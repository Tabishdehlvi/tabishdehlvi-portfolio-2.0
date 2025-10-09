"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Code2, Database, ShoppingCart, MessageSquare, Video, Zap, Layers, TrendingUp } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "End-to-end MERN stack applications with modern architecture and best practices.",
  },
  {
    icon: Database,
    title: "HRMS Development",
    description: "Complete HR management systems with attendance, leaves, and employee management.",
  },
  {
    icon: Layers,
    title: "LMS Platforms",
    description: "Learning management systems with live classrooms, assignments, and progress tracking.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Multi-vendor marketplaces with payment integration and inventory management.",
  },
  {
    icon: MessageSquare,
    title: "Real-time Chat",
    description: "WebSocket-based chat applications with real-time messaging and notifications.",
  },
  {
    icon: Video,
    title: "Video Conferencing",
    description: "Integrated video meeting solutions using Jitsi and WebRTC technologies.",
  },
  {
    icon: Zap,
    title: "API Development",
    description: "RESTful APIs with authentication, authorization, and comprehensive documentation.",
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    description: "Code optimization, caching strategies, and performance monitoring implementation.",
  },
]

export function UniqueServices() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (sectionRef.current) {
      const items = sectionRef.current.querySelectorAll(".service-item")

      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          { x: -60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
          },
        )
      })
    }
  }, [])

  return (
    <section
      id="services"
      ref={sectionRef}
      className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 lg:pl-48 py-24"
    >
      <div className="max-w-7xl w-full">
        <div className="mb-16">
          <span className="text-sm font-mono text-primary">02 — Services</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-4">What I Do</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="service-item group">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-primary transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
