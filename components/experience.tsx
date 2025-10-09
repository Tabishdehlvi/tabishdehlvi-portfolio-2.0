"use client"

import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const experiences = [
  {
    type: "work",
    title: "Front End Developer Intern",
    company: "Indus Valley Tech",
    location: "Karachi, Pakistan",
    period: "2022 - 2023",
    description: [
      "Translated flat design files to clean, accessible and interactive user experiences",
      "Learned new front-end programming languages and methodologies to perform tasks",
      "Created technical requirements and worked with engineering team to develop, test and launch functionality",
      "Detected and managed API changes. Generated EDA API docs from specification files like Swagger for AsyncAPI",
    ],
  },
  {
    type: "work",
    title: "Social Media Marketing",
    company: "Hello International Marketing Solution",
    location: "Karachi, Pakistan",
    period: "2018 - 2021",
    description: [
      "Customer service and customer support",
      "Created and managed social media advertisements",
      "Team leading of 5 persons",
    ],
  },
]

const education = [
  {
    degree: "Under Graduation in Computer Science",
    institution: "Virtual University",
    location: "Karachi, Pakistan",
    period: "2019 - Present",
  },
  {
    degree: "Intermediate of Pre-Engineering",
    institution: "Sindh Muslim Government Science College",
    location: "Karachi, Pakistan",
    period: "2016 - 2018",
  },
]

export default function Experience() {
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
    <section id="experience" ref={sectionRef} className="py-32 relative border-t border-border">
      <div className="container mx-auto px-6">
        <motion.h2 ref={titleRef} className="text-5xl md:text-6xl font-bold mb-20">
          Experience & <span className="text-primary">Education</span>
        </motion.h2>

        <div className="max-w-5xl mx-auto">
          {/* Professional Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-10">
              <Briefcase className="text-primary" size={32} />
              <h3 className="text-3xl font-bold text-white">Professional Experience</h3>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />

                  <div className="mb-2">
                    <h4 className="text-2xl font-bold text-white mb-1">{exp.title}</h4>
                    <p className="text-lg text-primary font-semibold mb-2">{exp.company}</p>
                    <div className="flex flex-wrap gap-4 text-muted-foreground text-sm mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={16} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={16} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground leading-relaxed flex gap-2">
                        <span className="text-primary mt-1.5">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-10">
              <GraduationCap className="text-primary" size={32} />
              <h3 className="text-3xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                  className="relative pl-8 border-l-2 border-accent/30 hover:border-accent transition-colors"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />

                  <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                  <p className="text-lg text-accent font-semibold mb-2">{edu.institution}</p>
                  <div className="flex flex-wrap gap-4 text-muted-foreground text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar size={16} />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={16} />
                      {edu.location}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
