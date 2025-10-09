"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "Redux", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs", "Socket.io", "JWT"],
  },
  {
    category: "Tools & Technologies",
    skills: ["Git", "Docker", "AWS", "Jitsi", "Stripe", "Postman", "VS Code"],
  },
  {
    category: "Specializations",
    skills: [
      "Real-time Chat",
      "Video Conferencing",
      "Role-based Access",
      "Payment Integration",
      "File Management",
      "Analytics",
    ],
  },
]

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="skills" ref={sectionRef} className="py-32 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-20"
        >
          Skills & <span className="text-primary">Technologies</span>
        </motion.h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="border border-border p-8 hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-secondary text-white border border-border hover:border-primary hover:text-primary transition-all cursor-default font-mono text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <div className="border border-primary/30 p-12 bg-primary/5">
            <h3 className="text-3xl font-bold mb-6 text-white">Full Stack MERN Expertise</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Specialized in building complex enterprise applications with MongoDB, Express.js, React.js, and Node.js.
              Experienced in integrating real-time features, video conferencing, payment systems, and creating scalable
              architectures for production environments.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
