"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Redux",
      "Framer Motion",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "REST APIs",
      "Socket.io",
      "JWT",
    ],
  },
  {
    category: "Tools & Technologies",
    skills: ["Git", "AWS", "Jitsi", "WebRTC", "Stripe", "Redis"],
  },
  {
    category: "Specializations",
    skills: [
      "HRMS Development",
      "LMS Platforms",
      "E-Commerce",
      "Real-time Applications",
      "Video Conferencing",
      "Payment Integration",
    ],
  },
];

export function UniqueSkills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const categories = sectionRef.current.querySelectorAll(".skill-category");

      categories.forEach((category, index) => {
        gsap.fromTo(
          category,
          { x: index % 2 === 0 ? -60 : 60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: category,
              start: "top 80%",
            },
          }
        );
      });
    }
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 lg:pl-48 py-24"
    >
      <div className="max-w-7xl w-full">
        <div className="mb-16">
          <span className="text-sm font-mono text-primary">05 — Skills</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-4">
            Tech Stack
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category space-y-6">
              <h3 className="text-2xl font-bold text-accent">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-2 h-2 bg-primary group-hover:bg-accent transition-colors" />
                    <span className="text-lg text-muted-foreground group-hover:text-foreground transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
