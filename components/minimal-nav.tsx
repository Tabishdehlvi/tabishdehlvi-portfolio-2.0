"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function MinimalNav() {
  const [activeSection, setActiveSection] = useState("hero")

  const sections = [
    { id: "hero", label: "00", name: "Intro" },
    { id: "about", label: "01", name: "About" },
    { id: "services", label: "02", name: "Services" },
    { id: "experience", label: "03", name: "Experience" },
    { id: "projects", label: "04", name: "Projects" },
    { id: "skills", label: "05", name: "Skills" },
    { id: "contact", label: "06", name: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed left-12 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
    >
      <div className="flex flex-col gap-6">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group flex items-center gap-4 text-left"
          >
            <span
              className={`font-mono text-sm transition-colors ${
                activeSection === section.id ? "text-primary" : "text-muted-foreground"
              } group-hover:text-primary`}
            >
              {section.label}
            </span>
            <div className="flex items-center gap-2">
              <div
                className={`h-px transition-all ${
                  activeSection === section.id ? "w-12 bg-primary" : "w-6 bg-muted-foreground"
                } group-hover:w-12 group-hover:bg-primary`}
              />
              <span
                className={`text-xs transition-all ${
                  activeSection === section.id ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                } group-hover:opacity-100 group-hover:translate-x-0`}
              >
                {section.name}
              </span>
            </div>
          </button>
        ))}
      </div>
    </motion.nav>
  )
}
