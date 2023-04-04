import { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  shortName: string
  description: string
  mainNav: NavItem[]
  links: {
    twitter: string
    github: string
  }
}

export const siteConfig: SiteConfig = {
  name: "Zlide AI",
  shortName: "Zlide",
  description:
    "A better way of interacting with AI and getting the answers you need.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/",
    github: "https://github.com/",
  },
}
