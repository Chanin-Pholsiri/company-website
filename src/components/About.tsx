"use client";

import { CheckCircle2, Users, Trophy, Clock } from "lucide-react";

const stats = [
  { icon: Trophy, value: "200+", label: "Projects Delivered", color: "#6366f1" },
  { icon: Users, value: "50+", label: "Expert Engineers", color: "#22d3ee" },
  { icon: Clock, value: "8+", label: "Years in Business", color: "#a78bfa" },
  { icon: CheckCircle2, value: "98%", label: "Client Satisfaction", color: "#34d399" },
];

const values = [
  "We prioritize quality over speed — but never sacrifice delivery.",
  "Transparent communication at every stage of the project.",
  "Security and performance are built-in, not added on.",
  "Long-term partnerships, not one-off transactions.",
];

export default function About() {
  return (
    <section id="about" className="py-24" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4"
              style={{
                background: "rgba(99,102,241,0.1)",
                border: "1px solid rgba(99,102,241,0.3)",
                color: "#818cf8",
              }}
            >
              About Us
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              Building the{" "}
              <span className="gradient-text">Future of Software</span>
            </h2>
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              TechCorp is a full-stack software development company founded by engineers
              who believe great software changes the world. We combine deep technical
              expertise with business acumen to deliver solutions that actually work.
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              Our team of 50+ engineers, designers, and strategists works with startups
              and enterprises alike — from MVP to scale. Every line of code we write
              is built to last.
            </p>

            <ul className="space-y-3">
              {values.map((val) => (
                <li key={val} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0"
                    style={{ color: "#6366f1" }}
                  />
                  <span
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {val}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #4f46e5)",
                }}
              >
                Work With Us
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="p-6 rounded-2xl text-center"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: `${stat.color}15` }}
                  >
                    <Icon size={20} style={{ color: stat.color }} />
                  </div>
                  <div
                    className="text-3xl font-bold mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs font-medium"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              );
            })}

            <div
              className="col-span-2 p-6 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(34,211,238,0.1))",
                border: "1px solid rgba(99,102,241,0.2)",
              }}
            >
              <p
                className="text-sm leading-relaxed italic"
                style={{ color: "var(--text-secondary)" }}
              >
                &ldquo;We don&apos;t just build software — we build partnerships.
                Our success is measured by your success.&rdquo;
              </p>
              <div className="mt-3 flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: "linear-gradient(135deg, #6366f1, #22d3ee)" }}
                >
                  TC
                </div>
                <div>
                  <div
                    className="text-xs font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Alex Chen
                  </div>
                  <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                    CEO & Co-founder
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
