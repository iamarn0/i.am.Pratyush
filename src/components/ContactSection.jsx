import { useId, useState } from "react"
import { site } from "../data/site"
import Button from "./Button"
import Container from "./Container"
import GithubIcon from "./GithubIcon"

const initial = { name: "", email: "", message: "" }
const accessKey = (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "").trim()

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = "Please add your name."
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = "Please add a valid email."
  if (values.message.trim().length < 8) errors.message = "Please write a short note about the project (at least 8 characters)."
  return errors
}

export default function ContactSection({ level = "h2" }) {
  const baseId = useId()
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState("")
  const [sending, setSending] = useState(false)
  const Title = level

  function update(field, value) {
    setValues((current) => ({ ...current, [field]: value }))
  }

  async function onSubmit(event) {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      setStatus("Please fix the fields above, then try again.")
      return
    }

    if (!accessKey) {
      setStatus("The contact form is not configured yet. Use Email me instead.")
      return
    }

    setSending(true)
    setStatus("Sending…")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
          subject: `Portfolio inquiry from ${values.name.trim()}`,
          from_name: "Portfolio contact",
          replyto: values.email.trim(),
        }),
      })
      const result = await response.json()
      if (!response.ok || !result.success) {
        throw new Error(result.message || "The message could not be sent.")
      }
      setValues(initial)
      setStatus("Sent. I’ll get back to you by email.")
    } catch {
      setStatus("Something went wrong. Please email me directly.")
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-20 lg:py-36" aria-labelledby="contact-title">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Title id="contact-title" className="max-w-[12ch] text-[clamp(2.8rem,6vw,5.4rem)] leading-[0.98] font-medium tracking-[-0.035em] text-balance">
              Have a project in mind?
            </Title>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              I&apos;m based in India. Tell me what you want to build, who it is for, and where the idea stands today.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              <Button href={`mailto:${site.email}`}>Email me</Button>
              <Button href={site.github} external variant="secondary">
                <GithubIcon size={16} />
                GitHub
              </Button>
            </div>
          </div>

          <form className="lg:col-span-5" onSubmit={onSubmit} noValidate>
            <p className="text-sm leading-relaxed text-muted">
              Prefer to write it out? Your note is sent to my inbox. I&apos;ll reply by email.
            </p>
            <div className="mt-6 grid gap-5">
              <Field
                id={`${baseId}-name`}
                label="Name"
                value={values.name}
                error={errors.name}
                autoComplete="name"
                onChange={(value) => update("name", value)}
              />
              <Field
                id={`${baseId}-email`}
                label="Email"
                type="email"
                value={values.email}
                error={errors.email}
                autoComplete="email"
                onChange={(value) => update("email", value)}
              />
              <Field
                id={`${baseId}-message`}
                label="Project"
                value={values.message}
                error={errors.message}
                multiline
                onChange={(value) => update("message", value)}
              />
            </div>
            <div className="mt-6">
              <Button type="submit" disabled={sending}>
                {sending ? "Sending…" : "Send message"}
              </Button>
            </div>
            <p className="mt-4 min-h-6 text-sm text-muted" role="status">
              {status}
            </p>
          </form>
        </div>
      </Container>
    </section>
  )
}

function Field({ id, label, value, error, onChange, type = "text", multiline = false, autoComplete }) {
  const errorId = `${id}-error`
  const shared = {
    id,
    value,
    autoComplete,
    "aria-invalid": error ? "true" : "false",
    "aria-describedby": error ? errorId : undefined,
    onChange: (event) => onChange(event.target.value),
    className:
      "mt-2 w-full border border-line bg-surface px-4 py-3 text-base text-ink outline-none focus-visible:border-ink",
  }

  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      {multiline ? <textarea {...shared} rows={5} /> : <input {...shared} type={type} />}
      {error ? (
        <p id={errorId} className="mt-2 text-sm font-medium text-accent" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}
