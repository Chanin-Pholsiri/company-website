"use client";

import { useState } from "react";
import { ExternalLink, GitBranch } from "lucide-react";

const categories = ["All", "Web", "Mobile", "Cloud", "AI"];

const projects = [
  {
    title: "FinTrack Pro",
    category: "Web",
    description: "Real-time financial analytics platform serving 50,000+ users with live market data and portfolio management.",
    tech: ["Next.js", "PostgreSQL", "WebSocket"],
    color: "#6366f1",
    bg: "from-indigo-900/40 to-blue-900/40",
  },
  {
    title: "MedConnect",
    category: "Mobile",
    description: "Telemedicine app connecting patients with doctors via video, messaging, and prescription management.",
    tech: ["React Native", "Node.js", "Firebase"],
    color: "#22d3ee",
    bg: "from-cyan-900/40 to-teal-900/40",
  },
  {
    title: "CloudOps Suite",
    category: "Cloud",
    description: "Infrastructure automation platform for managing multi-cloud deployments with one-click provisioning.",
    tech: ["Kubernetes", "Terraform", "Go"],
    color: "#a78bfa",
    bg: "from-purple-900/40 to-pink-900/40",
  },
  {
    title: "InsightAI",
    category: "AI",
    description: "Predictive analytics engine using ML to forecast demand and optimize supply chains for retail.",
    tech: ["Python", "TensorFlow", "FastAPI"],
    color: "#34d399",
    bg: "from-emerald-900/40 to-green-900/40",
  },
  {
    title: "LogiX Platform",
    category: "Web",
    description: "End-to-end logistics management system with real-time tracking, routing optimization, and driver app.",
    tech: ["React", "GraphQL", "Redis"],
    color: "#f59e0b",
    bg: "from-amber-900/40 to-orange-900/40",
  },
  {
    title: "ShopNow",
    category: "Mobile",
    description: "Feature-rich e-commerce mobile app with AR product preview and personalized recommendations.",
    tech: ["Flutter", "Dart", "AWS"],
    color: "#ec4899",
    bg: "from-pink-900/40 to-rose-900/40",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-24" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4"
            style={{
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.3)",
              color: "#818cf8",
            }}
          >
            Our Work
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            A selection of projects we&apos;re proud to have delivered.
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              style={
                active === cat
                  ? {
                      background: "linear-gradient(135deg, #6366f1, #4f46e5)",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-2xl overflow-hidden transition-all duration-300 card-glow"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className={`h-40 bg-gradient-to-br ${project.bg} flex items-center justify-center`}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white"
                  style={{
                    background: `${project.color}30`,
                    border: `1px solid ${project.color}50`,
                    color: project.color,
                  }}
                >
                  {project.title[0]}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span
                      className="text-xs font-medium px-2 py-0.5 rounded-md mb-2 inline-block"
                      style={{
                        background: `${project.color}15`,
                        color: project.color,
                      }}
                    >
                      {project.category}
                    </span>
                    <h3
                      className="text-lg font-bold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button
                      className="p-1.5 rounded-lg transition-colors hover:bg-white/10"
                      style={{ color: "var(--text-muted)" }}
                      aria-label="View repository"
                    >
                      <GitBranch size={14} />
                    </button>
                    <button
                      className="p-1.5 rounded-lg transition-colors hover:bg-white/10"
                      style={{ color: "var(--text-muted)" }}
                      aria-label="View live"
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
                        background: "rgba(255,255,255,0.05)",
                        color: "var(--text-muted)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:bg-white/5"
            style={{
              color: "var(--text-secondary)",
              border: "1px solid var(--border)",
            }}
          >
            View All Projects
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
