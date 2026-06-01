"use client";

import { CheckCircle2 } from "lucide-react";

const stats = [
  { value: "200+", label: "Projects delivered" },
  { value: "50+", label: "Expert engineers" },
  { value: "8+", label: "Years in business" },
  { value: "98%", label: "Client satisfaction" },
];

const values = [
  "We prioritize quality over speed without sacrificing delivery.",
  "Transparent communication at every stage of the project.",
  "Security and performance are built in, not added after the fact.",
  "Long-term partnerships, not one-off transactions.",
];

export default function About() {
  return (
    <section id="about" className="py-24" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2
              className="font-bold mb-6"
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
                color: "var(--text-primary)",
              }}
            >
              Building software that teams can rely on
            </h2>
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: "var(--text-secondary)", maxWidth: "55ch", lineHeight: 1.7 }}
            >
              TechCorp is a full-stack software development company founded by engineers
              who care about the craft. We combine deep technical expertise with
              product thinking to deliver solutions that hold up under real conditions.
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "var(--text-secondary)", maxWidth: "55ch", lineHeight: 1.7 }}
            >
              Our team works with startups and enterprises alike, from MVP to scale.
              Every line of code we write is built to last and documented for the next person.
            </p>

            <ul className="space-y-3 mb-10">
              {values.map((val) => (
                <li key={val} className="flex items-start gap-3">
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--accent)" }}
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

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white transition-opacity duration-200 hover:opacity-90"
              style={{ background: "var(--accent)" }}
            >
              Work with us
            </a>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-10 mb-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div
                    className="font-bold mb-1 tabular-nums"
                    style={{
                      fontSize: "2.5rem",
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                      color: "var(--text-primary)",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm" style={{ color: "var(--text-muted)" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="p-6 rounded-2xl"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <p
                className="text-sm leading-relaxed italic mb-4"
                style={{ color: "var(--text-secondary)" }}
              >
                &ldquo;We build partnerships. Our success is measured by yours.
                That&apos;s not a slogan; it&apos;s how we decide which engagements to take on.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: "var(--accent)" }}
                >
                  AC
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
