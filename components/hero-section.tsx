"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Download } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (nameRef.current && titleRef.current) {
      gsap.fromTo(
        nameRef.current.children,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.5,
          ease: "power3.out",
        }
      );
    }

    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
        }
      );
    }
  }, []);

  const handleDownloadResume = () => {
    const resumeUrl = "/Tabish_Dehlvi_Resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Tabish_Dehlvi_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 lg:pl-48"
    >
      {/* 🌄 Mobile background image */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/tabish.jpg"
          alt="Tabish Dehlvi"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
      </div>

      <div className="absolute inset-0 hidden lg:block bg-gradient-to-br from-primary/10 via-transparent to-accent/5 blur-3xl" />

      <div className=" relative z-10 max-w-7xl w-full">
        <div className="flex space-between">
          {/* Content Column */}
          <div className="space-y-6 md:space-y-8">
            <h1
              ref={nameRef}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight overflow-hidden leading-none"
            >
              <span className="inline-block">Tabish</span>{" "}
              <span className="inline-block text-primary">Dehlvi</span>
            </h1>

            <p
              ref={titleRef}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground italic leading-relaxed"
            >
              Architecting scalable full-stack solutions that transform business challenges into competitive advantages. Specialized in building enterprise-grade MERN applications with real-time capabilities.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-wrap gap-3 md:gap-4 pt-4 md:pt-8"
            >
              <a
                href="#projects"
                className="px-6 md:px-8 py-3 md:py-4 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors text-sm md:text-base"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="px-6 md:px-8 py-3 md:py-4 border border-border text-foreground font-medium hover:border-primary hover:text-primary transition-colors text-sm md:text-base"
              >
                Get in Touch
              </a>
              <button
                onClick={handleDownloadResume}
                className="px-6 md:px-8 py-3 md:py-4 border border-accent text-accent font-medium hover:bg-accent hover:text-accent-foreground transition-colors flex items-center gap-2 text-sm md:text-base"
              >
                <Download className="w-4 h-4 md:w-5 md:h-5" />
                Download Resume
              </button>
            </motion.div>
          </div>

          <div
            ref={imageRef}
            className="hidden lg:flex flex-[0_0_33.333%] justify-center lg:justify-end relative"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80"
            >
              <div className="absolute inset-0 rounded-3xl bg-primary/20 blur-3xl animate-pulse" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl ring-2 ring-primary/20">
                <Image
                  src="/tabish.jpg"
                  alt="Tabish Dehlvi"
                  fill
                  className="object-cover rounded-3xl"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
