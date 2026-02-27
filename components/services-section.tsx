"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code2,
  Database,
  ShoppingCart,
  MessageSquare,
  Video,
  Zap,
  Layers,
  TrendingUp,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "End-to-end MERN stack solutions with scalable architecture, TypeScript for type safety, and production-ready deployment pipelines.",
  },
  {
    icon: Database,
    title: "HRMS Development",
    description:
      "Enterprise HR systems with attendance automation, leave workflows, performance tracking, and role-based dashboards.",
  },
  {
    icon: Layers,
    title: "LMS Platforms",
    description:
      "Feature-rich learning platforms with live classrooms, progress analytics, assignment management, and instructor tools.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description:
      "Scalable multi-vendor marketplaces with secure payments, inventory sync, order management, and vendor analytics.",
  },
  {
    icon: MessageSquare,
    title: "Real-time Communication",
    description:
      "WebSocket-based messaging systems with typing indicators, presence tracking, and persistence for conversations.",
  },
  {
    icon: Video,
    title: "Video Integration",
    description:
      "Seamless integration of Jitsi and WebRTC for live sessions, screen sharing, and recording capabilities.",
  },
  {
    icon: Zap,
    title: "API Architecture",
    description:
      "RESTful and GraphQL APIs with OAuth2 authentication, rate limiting, comprehensive documentation, and versioning.",
  },
  {
    icon: TrendingUp,
    title: "Performance & Optimization",
    description:
      "Database indexing, caching strategies with Redis, CDN optimization, and monitoring for 99.8%+ uptime.",
  },
];

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const items = sectionRef.current.querySelectorAll(".service-item");

      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          { x: -60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
          }
        );
      });
    }
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 lg:pl-48 py-24"
    >
      <div className="max-w-7xl w-full">
        <div className="mb-16">
          <span className="text-sm font-mono text-primary">02 — Services</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-4">
            What I Do
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="service-item group">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-primary transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
