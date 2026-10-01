import Button from "../components/Button"
import Container from "../components/Container"
import Seo from "../components/Seo"

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" path="/404" noIndex />
      <Container className="pt-32 pb-28 lg:pt-40">
        <p className="eyebrow text-muted">404</p>
        <h1 className="heading-display mt-4 max-w-3xl">This page doesn&apos;t exist.</h1>
        <p className="mt-6 max-w-lg text-lg text-muted">The link may be old, or the address may be mistyped.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button to="/">Back home</Button>
          <Button to="/work" variant="secondary">
            View work
          </Button>
        </div>
      </Container>
    </>
  )
}
