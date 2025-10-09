"use client"

import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code2, Briefcase, Award, MapPin, Calendar, Mail, Phone } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const highlights = [
  {
    icon: Code2,
    title: "2+ Years Experience",
    description: "Building production-ready full-stack applications",
  },
  {
    icon: Briefcase,
    title: "Complex Projects",
    description: "HRMS, LMS, and Multi-Vendor Marketplace systems",
  },
  {
    icon: Award,
    title: "MERN Stack Expert",
    description: "MongoDB, Express, React, Node.js specialist",
  },
]

const personalInfo = [
  { icon: Calendar, label: "Birthday", value: "3 Oct 1999" },
  { icon: MapPin, label: "Location", value: "Karachi, Pakistan" },
  { icon: Mail, label: "Email", value: "tabishdehlvi3@gmail.com" },
  { icon: Phone, label: "Phone", value: "+92 315 8814849" },
]

export default function About() {
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
    <section id="about" ref={sectionRef} className="py-32 relative border-t border-border">
      <div className="container mx-auto px-6">
        <motion.h2 ref={titleRef} className="text-5xl md:text-6xl font-bold mb-20">
          About <span className="text-primary">Me</span>
        </motion.h2>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <p className="text-xl md:text-2xl text-white leading-relaxed mb-8">
              MERN Stack developer with 2 years of experience in building and managing complex web and mobile
              applications. Proficient in both frontend and backend development, with a proven track record of working
              on dynamic projects such as Learning Management Systems and Human Resource Management Systems.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              I have strong technical skills as well as excellent interpersonal skills, enabling me to interact with a
              wide range of clients. I am eager to be challenged in order to grow and further improve my skills. My
              greatest passion in life is using my technical know-how to benefit other people and organisations.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-12 p-8 border border-border bg-black/30">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                    <info.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="text-white font-semibold">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group"
              >
                <div className="border border-border p-8 hover:border-primary transition-all duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
                  >
                    <item.icon className="text-primary" size={28} />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
