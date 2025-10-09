"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export function UniqueContact() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".contact-item")

      elements.forEach((element, index) => {
        gsap.fromTo(
          element,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
            },
          },
        )
      })
    }
  }, [])

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 lg:pl-48 py-24"
    >
      <div className="max-w-7xl w-full">
        <div className="mb-16">
          <span className="text-sm font-mono text-primary">06 — Contact</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-4">
            Let's Work <span className="italic text-accent">Together</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <p className="text-xl text-muted-foreground leading-relaxed contact-item">
              I'm currently available for freelance work and full-time opportunities. If you have a project in mind or
              just want to chat about technology, feel free to reach out.
            </p>

            <div className="space-y-6">
              <a href="mailto:tabishdehlvi3@gmail.com" className="contact-item flex items-center gap-4 text-lg group">
                <Mail className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                <span className="group-hover:text-primary transition-colors">tabishdehlvi3@gmail.com</span>
              </a>

              <a href="tel:+923158814849" className="contact-item flex items-center gap-4 text-lg group">
                <Phone className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                <span className="group-hover:text-primary transition-colors">+92 315 8814849</span>
              </a>

              <div className="contact-item flex items-center gap-4 text-lg">
                <MapPin className="w-6 h-6 text-primary" />
                <span>Karachi, Pakistan</span>
              </div>
            </div>

            <div className="contact-item flex gap-6 pt-8">
              <a
                href="#"
                className="w-12 h-12 flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="w-12 h-12 flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="w-12 h-12 flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="contact-item">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-mono text-primary mb-2">
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-transparent border border-border focus:border-primary outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-mono text-primary mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-transparent border border-border focus:border-primary outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-mono text-primary mb-2">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-transparent border border-border focus:border-primary outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 Tabish Dehlvi. Crafted with precision and passion.</p>
        </div>
      </div>
    </section>
  )
}
