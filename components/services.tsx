"use client"

import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Database, Zap, Users, MessageSquare, Video, ShoppingCart, GraduationCap } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: Code,
    title: "Full Stack Development",
    description:
      "End-to-end web application development using MERN stack with modern best practices and scalable architecture.",
  },
  {
    icon: Users,
    title: "HRMS Development",
    description:
      "Complete Human Resource Management Systems with attendance tracking, employee management, and role-based dashboards.",
  },
  {
    icon: GraduationCap,
    title: "LMS Development",
    description:
      "Learning Management Systems with course management, progress tracking, assignments, and live classroom features.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description:
      "Multi-vendor marketplaces and e-commerce platforms with payment integration and inventory management.",
  },
  {
    icon: MessageSquare,
    title: "Real-time Chat Apps",
    description: "WebSocket-based real-time messaging applications with file sharing and notification systems.",
  },
  {
    icon: Video,
    title: "Video Conferencing",
    description:
      "Integration of video meeting solutions using Jitsi for seamless virtual collaboration and live streaming.",
  },
  {
    icon: Database,
    title: "API Development",
    description: "RESTful API design and development with MongoDB, authentication, and comprehensive documentation.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Application optimization, code refactoring, and implementation of best practices for faster load times.",
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  useEffect(() => {
    if (titleRef.current && isInView) {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
    }
  }, [isInView])

  return (
    <section id="services" ref={sectionRef} className="py-32 relative border-t border-border">
      <div className="container mx-auto px-6">
        <motion.h2 ref={titleRef} className="text-5xl md:text-6xl font-bold mb-8">
          <span className="text-primary">Services</span> I Offer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-muted-foreground mb-20 max-w-3xl"
        >
          Specialized in building complex, scalable applications with modern technologies and best practices.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="border border-border p-6 h-full hover:border-primary transition-all duration-300 bg-black/50">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                >
                  <service.icon className="text-primary" size={24} />
                </motion.div>
                <h3 className="text-lg font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
