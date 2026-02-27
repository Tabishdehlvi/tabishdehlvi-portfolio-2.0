"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    period: "2024 — Present",
    role: "Lead Full Stack Developer",
    company: "Collabez",
    location: "Karachi, Pakistan",
    description:
      "Leading a cross-functional development team in designing and delivering enterprise-scale full-stack applications. Architecting microservices-based solutions and implementing real-time features using WebSockets. Successfully deployed HRMS, LMS, and e-commerce platforms serving 1000+ concurrent users. Mentored junior developers and established best practices for code quality and performance optimization.",
  },
  {
    period: "2023 — 2024",
    role: "MERN Stack Developer",
    company: "Collabez",
    location: "Karachi, Pakistan",
    description:
      "Developed and deployed full-stack applications using MongoDB, Express.js, React, and Node.js. Implemented real-time features including Socket.io integration for chat functionality and WebRTC implementations. Contributed to multiple production applications including HRMS and LMS platforms. Optimized database queries and implemented caching strategies, improving application performance by 35%.",
  },
  {
    period: "2022 — 2023",
    role: "Frontend Developer",
    company: "Indus Valley Tech",
    location: "Karachi, Pakistan",
    description:
      "Built responsive, pixel-perfect web applications using React and modern frontend technologies. Collaborated closely with product and design teams to translate Figma designs into performant components. Implemented state management solutions using Redux and optimized rendering performance, achieving 95+ Lighthouse scores.",
  },
];

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const items = sectionRef.current.querySelectorAll(".experience-item");

      items.forEach((item) => {
        gsap.fromTo(
          item,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              end: "top 50%",
              scrub: 1,
            },
          }
        );
      });
    }
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 lg:pl-48 py-24"
    >
      <div className="max-w-7xl w-full">
        <div className="mb-16">
          <span className="text-sm font-mono text-primary">
            03 — Experience
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-4">
            Work History
          </h2>
        </div>

        <div className="space-y-24">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <p className="text-sm font-mono text-primary">{exp.period}</p>
                </div>
                <div className="lg:col-span-2 space-y-4">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{exp.role}</h3>
                    <p className="text-xl text-accent">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {exp.location}
                    </p>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                    {exp.description}
                  </p>
                </div>
              </div>
              {index < experiences.length - 1 && (
                <div className="mt-12 h-px bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
