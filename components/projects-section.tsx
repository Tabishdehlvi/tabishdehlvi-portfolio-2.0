"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
    number: "01",
    title: "Diabmart",
    subtitle: "E-Commerce Marketplace",
    description:
      "Engineered a scalable multi-vendor marketplace handling 50+ vendors and 10,000+ products. Architected using microservices with Nest.js backend, PostgreSQL for relational data, and Redis caching for performance. Implemented secure payment processing via Stripe, inventory synchronization, vendor analytics dashboard, and order fulfillment workflows. Platform supports 5000+ concurrent users with sub-second response times.",
    tags: [
      "Next.js",
      "Nest.js",
      "PostgreSQL",
      "Medusa.js",
      "Stripe",
      "Digital Ocean",
      "Redis",
    ],
    link: "https://diabmart.ae",
    github: "",
  },
  {
    number: "02",
    title: "CollabDash",
    subtitle: "Enterprise HRMS Platform",
    description:
      "Built a comprehensive Human Resource Management System serving 500+ employees across multiple organizations. Features include real-time attendance tracking, automated leave management, dynamic Kanban workflows, integrated video conferencing (Jitsi), and role-based analytics dashboards. Implemented Socket.io for instant notifications and real-time collaboration. System achieves 99.8% uptime with optimized MongoDB queries and Redis caching.",
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
    number: "03",
    title: "Tuition Highway",
    subtitle: "Learning Management System",
    description:
      "Developed a full-featured LMS platform supporting 2000+ students and 100+ instructors. Integrated live classroom sessions with Jitsi, real-time messaging via Socket.io, and automated progress tracking. Key features include assignment management, gradebook analytics, file management with S3 integration, and Stripe payment processing. Achieved 40% improvement in student engagement metrics.",
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
  }
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
