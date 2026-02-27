"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".animate-in");

      elements.forEach((element) => {
        gsap.fromTo(
          element,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
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
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 lg:pl-48 py-24"
    >
      <div className="max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            <div className="animate-in">
              <span className="text-sm font-mono text-primary">01 — About</span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-4">
                Crafting <span className="italic text-accent">interfaces</span>
              </h2>
            </div>

            <div className="animate-in space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a Full Stack MERN Developer with 2+ years of hands-on experience delivering production-grade applications across diverse industries. I specialize in designing and implementing scalable systems that drive measurable business impact.
              </p>
              <p>
                My expertise spans end-to-end development of mission-critical platforms including HR Management Systems, Learning Management Systems, and multi-vendor e-commerce ecosystems. I excel at integrating complex features like real-time communication, video conferencing, and advanced workflows into cohesive, user-centric applications.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="animate-in space-y-8">
            {/* PERSONAL DETAILS */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Personal Details</h3>
              <div className="grid grid-cols-2 gap-4 text-muted-foreground">
                <div>
                  <p className="text-xs font-mono text-primary mb-1">NAME</p>
                  <p>Tabish Dehlvi</p>
                </div>
                <div>
                  <p className="text-xs font-mono text-primary mb-1">
                    LOCATION
                  </p>
                  <p>Karachi, Pakistan</p>
                </div>
                <div>
                  <p className="text-xs font-mono text-primary mb-1">EMAIL</p>
                  <p className="break-all">tabishdehlvi3@gmail.com</p>
                </div>
                <div>
                  <p className="text-xs font-mono text-primary mb-1">PHONE</p>
                  <p>+92 315 8814849</p>
                </div>

                {/* GITHUB */}
                <div>
                  <p className="text-xs font-mono text-primary mb-1">GITHUB</p>
                  <a
                    href="https://github.com/tabishdehlvi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono hover:text-primary  transition-colors break-all"
                  >
                    github.com/tabishdehlvi
                  </a>
                </div>

                {/* LINKEDIN */}
                <div>
                  <p className="text-xs font-mono text-primary mb-1">
                    LINKEDIN
                  </p>
                  <a
                    href="https://linkedin.com/in/tabish-dehlvi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono hover:text-primary  transition-colors break-all"
                  >
                    linkedin.com/in/tabish-dehlvi
                  </a>
                </div>
              </div>
            </div>

            {/* EDUCATION */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Education</h3>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <p className="text-xs font-mono text-primary mb-1">
                    2023 — PRESENT
                  </p>
                  <p className="font-medium text-foreground">
                    Computer Science
                  </p>
                  <p className="text-sm">Virtual University</p>
                </div>
                <div>
                  <p className="text-xs font-mono text-primary mb-1">
                    2016 — 2018
                  </p>
                  <p className="font-medium text-foreground">Pre-Engineering</p>
                  <p className="text-sm">
                    Sindh Muslim Government Science College
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
