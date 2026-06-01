"use client";

import { useState } from "react";
import { ExternalLink, GitBranch } from "lucide-react";
import Link from "next/link";

const categories = ["All", "Web", "Mobile", "Cloud", "AI"];

const projects = [
  {
    title: "FinTrack Pro",
    category: "Web",
    description:
      "Real-time financial analytics platform serving 50,000+ users with live market data and portfolio management.",
    tech: ["Next.js", "PostgreSQL", "WebSocket"],
    color: "#6366f1",
  },
  {
    title: "MedConnect",
    category: "Mobile",
    description:
      "Telemedicine app connecting patients with doctors via video, messaging, and prescription management.",
    tech: ["React Native", "Node.js", "Firebase"],
    color: "#22d3ee",
  },
  {
    title: "CloudOps Suite",
    category: "Cloud",
    description:
      "Infrastructure automation platform for managing multi-cloud deployments with one-click provisioning.",
    tech: ["Kubernetes", "Terraform", "Go"],
    color: "#a78bfa",
  },
  {
    title: "InsightAI",
    category: "AI",
    description:
      "Predictive analytics engine using ML to forecast demand and optimize supply chains for retail.",
    tech: ["Python", "TensorFlow", "FastAPI"],
    color: "#34d399",
  },
  {
    title: "LogiX Platform",
    category: "Web",
    description:
      "End-to-end logistics management system with real-time tracking, routing optimization, and driver app.",
    tech: ["React", "GraphQL", "Redis"],
    color: "#f59e0b",
  },
  {
    title: "ShopNow",
    category: "Mobile",
    description:
      "Feature-rich e-commerce mobile app with AR product preview and personalized recommendations.",
    tech: ["Flutter", "Dart", "AWS"],
    color: "#ec4899",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-24" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <h2
              className="font-bold"
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
                color: "var(--text-primary)",
              }}
            >
              Selected work
            </h2>
          </div>
          <Link
            href="/pricing"
            className="text-sm font-medium transition-colors duration-150 hover:text-white shrink-0"
            style={{ color: "var(--accent)" }}
          >
            View engagement options →
          </Link>
        </div>

        <div className="flex gap-2 mb-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150"
              style={
                active === cat
                  ? {
                      background: "var(--accent)",
                      color: "#fff",
                    }
                  : {
                      background: "var(--bg-card)",
                      color: "var(--text-secondary)",
                      border: "1px solid var(--border)",
                    }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <article
              key={project.title}
              className="group rounded-2xl overflow-hidden transition-all duration-200 card-glow"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="h-32 flex items-center justify-center"
                style={{ background: `${project.color}08` }}
              >
                <span
                  className="font-bold select-none"
                  style={{
                    fontSize: "3.5rem",
                    lineHeight: 1,
                    color: `${project.color}50`,
                    letterSpacing: "-0.04em",
                  }}
                  aria-hidden="true"
                >
                  {project.title[0]}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span
                      className="text-xs font-medium px-2 py-0.5 rounded-md mb-2 inline-block"
                      style={{
                        background: `${project.color}12`,
                        color: project.color,
                      }}
                    >
                      {project.category}
                    </span>
                    <h3
                      className="text-lg font-semibold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button
                      className="p-1.5 rounded-lg transition-colors hover:bg-white/10"
                      style={{ color: "var(--text-muted)" }}
                      aria-label={`View ${project.title} repository`}
                    >
                      <GitBranch size={14} />
                    </button>
                    <button
                      className="p-1.5 rounded-lg transition-colors hover:bg-white/10"
                      style={{ color: "var(--text-muted)" }}
                      aria-label={`View ${project.title} live`}
                    >
                      <ExternalLink size={14} />
                    </button>
                  </div>
                </div>

                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md text-xs font-medium"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        color: "var(--text-muted)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:bg-white/5"
            style={{
              color: "var(--text-secondary)",
              border: "1px solid var(--border)",
            }}
          >
            Discuss your project
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
