"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    title: "CollabDash",
    subtitle: "HRMS Platform",
    description:
      "Comprehensive Human Resource Management System with attendance tracking, employee management, leave management, Kanban board, calendar scheduling, real-time chat, and video conferencing using Jitsi. Features role-based dashboards for Admin, HR, Team Lead, and Employee.",
    tags: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Express",
      "Socket.io",
      "Jitsi",
      "Redux",
    ],
    link: "https://app.collabdash.io",
    github: "",
  },
  {
    number: "02",
    title: "Tuituin Highway",
    subtitle: "Learning Management System",
    description:
      "Full-featured LMS delivering seamless learning experiences with teacher and student management, assignments, progress reports, file sharing, real-time chat, live classrooms using Jitsi, and invoice management. Complete educational ecosystem in one platform.",
    tags: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Express",
      "WebRTC",
      "Jitsi",
      "Stripe",
    ],
    link: "https://portal.tuitionhighway.com",
    github: "",
  },
  {
    number: "03",
    title: "Multi-Vendor Marketplace",
    subtitle: "E-Commerce Platform",
    description:
      "Scalable multi-vendor e-commerce platform with vendor management, product listings, inventory tracking, order processing, payment integration, customer reviews, and comprehensive admin dashboard. Built for handling multiple sellers and thousands of products.",
    tags: [
      "Next.js",
      "Nest.js",
      "Postgress SQL",
      "Medusa.js",
      "Stripe",
      "Digital Ocean",
      "Redis",
    ],
    link: "https://diabmart.com",
    github: "",
  },
];

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const projects = sectionRef.current.querySelectorAll(".project-item");

      projects.forEach((project) => {
        gsap.fromTo(
          project,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: project,
              start: "top 80%",
              end: "top 40%",
              scrub: 1,
            },
          }
        );
      });
    }
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen px-6 md:px-12 lg:px-24 lg:pl-48 py-24"
    >
      <div className="max-w-7xl w-full mx-auto">
        <div className="mb-16">
          <span className="text-sm font-mono text-primary">04 — Projects</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-4">
            Selected Work
          </h2>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                <div className="lg:col-span-2">
                  <span className="text-6xl font-bold text-muted-foreground/20">
                    {project.number}
                  </span>
                </div>

                <div className="lg:col-span-10 space-y-6">
                  <div>
                    <h3 className="text-4xl md:text-5xl font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xl text-accent italic">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-4 py-2 text-sm border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>View Project</span>
                    </a>
                    {project.github && (
                      <a
                        href={project.github}
                        className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
                      >
                        <Github className="w-5 h-5" />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
