"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "HRMS - Human Resource Management System",
    description:
      "A comprehensive HR management solution designed for small organizations with full-featured capabilities including attendance tracking, employee management, leave management, and integrated collaboration tools.",
    features: [
      "Attendance Tracking & Employee Management",
      "Leave Management System",
      "Built-in Kanban Board (Trello-like)",
      "Calendly-like Scheduling App",
      "Real-time Chat Application",
      "Video Meeting Rooms (Jitsi Integration)",
      "Multi-role Dashboards (Admin, HR, Team Lead, Employee)",
    ],
    tech: ["MongoDB", "Express", "React", "Node.js", "Jitsi", "Socket.io", "Redux"],
    link: "#",
    github: "#",
  },
  {
    title: "LMS - Learning Management System",
    description:
      "A full-featured learning platform delivering seamless educational experiences with comprehensive teacher and student management, real-time collaboration, and integrated virtual classrooms.",
    features: [
      "Teacher & Student Management",
      "Assignment Creation & Submission",
      "Progress Reports & Analytics",
      "File Sharing System",
      "Real-time Chat Application",
      "Live Classroom (Jitsi Integration)",
      "Invoice Management",
      "Course Management & Enrollment",
    ],
    tech: ["MongoDB", "Express", "React", "Node.js", "Jitsi", "Socket.io", "Chart.js"],
    link: "#",
    github: "#",
  },
  {
    title: "Multi-Vendor Marketplace",
    description:
      "A robust e-commerce platform enabling multiple vendors to sell products with comprehensive vendor management, product listings, order processing, and payment integration.",
    features: [
      "Vendor Registration & Management",
      "Product Listing & Inventory",
      "Shopping Cart & Checkout",
      "Payment Gateway Integration",
      "Order Management System",
      "Review & Rating System",
      "Admin Dashboard & Analytics",
      "Real-time Notifications",
    ],
    tech: ["MongoDB", "Express", "React", "Node.js", "Stripe", "Redux", "AWS S3"],
    link: "#",
    github: "#",
  },
]

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="projects" ref={sectionRef} className="py-32 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-20"
        >
          Featured <span className="text-primary">Projects</span>
        </motion.h2>

        <div className="max-w-6xl mx-auto space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="border border-border p-8 md:p-12 hover:border-primary/50 transition-all duration-300"
            >
              <div className="mb-6">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white text-balance">{project.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>
              </div>

              <div className="mb-8">
                <h4 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">Key Features</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-start text-muted-foreground">
                      <span className="text-accent mr-3 mt-1">▹</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 text-sm font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Button asChild className="bg-primary text-black hover:bg-primary/90 font-semibold">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} className="mr-2" />
                    View Project
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-black bg-transparent"
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    Source Code
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
