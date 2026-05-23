"use client";

import { Globe, Smartphone, Cloud, Brain, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "High-performance web applications built with modern frameworks. From landing pages to complex enterprise platforms, we deliver pixel-perfect, scalable solutions.",
    features: ["Next.js / React", "TypeScript", "REST & GraphQL APIs", "SEO Optimized"],
    color: "#6366f1",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps for iOS and Android. We build intuitive, fast, and reliable apps that users love.",
    features: ["React Native", "Flutter", "iOS & Android", "App Store Publishing"],
    color: "#22d3ee",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description:
      "Scalable cloud architecture designed for reliability and performance. From DevOps pipelines to microservices, we handle your infrastructure.",
    features: ["AWS / GCP / Azure", "Docker & Kubernetes", "CI/CD Pipelines", "99.9% Uptime SLA"],
    color: "#a78bfa",
  },
  {
    icon: Brain,
    title: "Data & AI Solutions",
    description:
      "Turn your data into competitive advantage. We build ML models, data pipelines, and AI-powered features that automate and optimize your business.",
    features: ["Machine Learning", "Data Analytics", "LLM Integration", "Predictive Models"],
    color: "#34d399",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4"
            style={{
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.3)",
              color: "#818cf8",
            }}
          >
            What We Do
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Our <span className="gradient-text">Services</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            End-to-end technology solutions tailored to accelerate your digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative p-8 rounded-2xl transition-all duration-300 card-glow cursor-pointer"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `${service.color}15`,
                    border: `1px solid ${service.color}30`,
                  }}
                >
                  <Icon size={22} style={{ color: service.color }} />
                </div>

                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  {service.title}
                </h3>

                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feat) => (
                    <span
                      key={feat}
                      className="px-2.5 py-1 rounded-md text-xs font-medium"
                      style={{
                        background: `${service.color}10`,
                        color: service.color,
                        border: `1px solid ${service.color}20`,
                      }}
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-200 group-hover:gap-2.5"
                  style={{ color: service.color }}
                >
                  Learn more <ArrowRight size={14} />
                </a>

                <div
                  className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
