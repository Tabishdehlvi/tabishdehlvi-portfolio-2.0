"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Linkedin, Github, Send } from "lucide-react"

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" ref={sectionRef} className="py-32 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-20"
        >
          Get In <span className="text-primary">Touch</span>
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="border border-border p-12">
              <div className="text-center mb-12">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  I'm currently open to new opportunities and interesting projects. Whether you have a question or just
                  want to say hi, feel free to reach out!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 mb-12">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background border-border text-white placeholder:text-muted-foreground"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background border-border text-white placeholder:text-muted-foreground"
                    />
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-background border-border resize-none text-white placeholder:text-muted-foreground"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-center"
                >
                  <Button type="submit" size="lg" className="bg-primary text-black hover:bg-primary/90 font-semibold">
                    <Send size={16} className="mr-2" />
                    Send Message
                  </Button>
                </motion.div>
              </form>

              <div className="border-t border-border pt-12">
                <div className="flex flex-col items-center gap-8">
                  <p className="text-muted-foreground">Or connect with me on:</p>
                  <div className="flex gap-6">
                    {[
                      { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
                      { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                      { icon: Github, href: "https://github.com", label: "GitHub" },
                    ].map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                        whileHover={{ scale: 1.2, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-14 h-14 border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-all"
                        aria-label={social.label}
                      >
                        <social.icon size={24} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center text-muted-foreground font-mono text-sm"
          >
            <p>© 2025 Full Stack MERN Developer. Built with Next.js, Framer Motion & GSAP.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
