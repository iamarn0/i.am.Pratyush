const rawUrl = (import.meta.env.VITE_SITE_URL || "").trim().replace(/\/$/, "")

export const site = {
  name: "Pratyush Mondal",
  title: "Full-Stack Developer",
  email: "pratyush27mondal@gmail.com",
  github: "https://github.com/iamarn0",
  location: "India",
  url: /^https?:\/\//.test(rawUrl) ? rawUrl : "",
  ogImage: "",
  description:
    "Pratyush Mondal is a full-stack developer building production applications, logistics systems, SaaS products, and intelligent systems.",
  headline: "I build web products and intelligent systems that solve real-world problems.",
  support:
    "Full-stack developer building production applications, logistics systems, SaaS products, and intelligent systems.",
}

export const nav = [
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
]

export const mobileNav = [
  { to: "/", label: "Home", end: true },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
]

export function pageTitle(title) {
  if (!title) return `${site.name} — ${site.title}`
  return `${title} — ${site.name}`
}
