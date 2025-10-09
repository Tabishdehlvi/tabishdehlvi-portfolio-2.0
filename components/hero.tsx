"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import gsap from "gsap"

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (titleRef.current && subtitleRef.current) {
      const tl = gsap.timeline()

      tl.from(titleRef.current.children, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      }).from(
        subtitleRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4",
      )
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="text-primary text-lg font-mono">Hi, I'm</span>
          </motion.div>

          <h1 ref={titleRef} className="text-6xl md:text-8xl font-bold mb-8 text-balance leading-tight">
            <span className="inline-block text-white">Tabish</span>{" "}
            <span className="inline-block text-primary">Dehlvi</span>
          </h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-8 text-white/80"
          >
            Full Stack <span className="text-accent">MERN</span> Developer
          </motion.h2>

          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl text-balance leading-relaxed"
          >
            Crafting complex enterprise applications with 2 years of experience. Specialized in HRMS, LMS, and
            Multi-Vendor Marketplace solutions with real-time features.
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center gap-4 mb-16"
          >
            <motion.div variants={itemVariants}>
              <Button asChild size="lg" className="bg-primary text-black hover:bg-primary/90 font-semibold">
                <a href="#projects">View Projects</a>
              </Button>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-black bg-transparent"
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-6"
          >
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:tabishdehlvi3@gmail.com", label: "Email" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                variants={itemVariants}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon size={28} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <ArrowDown className="text-primary" size={32} />
      </motion.div>
    </section>
  )
}
