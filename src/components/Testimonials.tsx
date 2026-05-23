"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CTO, FinTrack Inc.",
    avatar: "SM",
    color: "#6366f1",
    rating: 5,
    text: "TechCorp delivered our platform 2 weeks ahead of schedule. The code quality is exceptional — our team was able to extend it with zero issues. Truly a world-class engineering team.",
  },
  {
    name: "David Park",
    role: "CEO, MedConnect",
    avatar: "DP",
    color: "#22d3ee",
    rating: 5,
    text: "Working with TechCorp transformed our product. They didn't just build what we asked — they challenged our assumptions and helped us build something much better. The result speaks for itself.",
  },
  {
    name: "Priya Sharma",
    role: "VP Engineering, LogiX",
    avatar: "PS",
    color: "#a78bfa",
    rating: 5,
    text: "After 3 failed attempts with other agencies, TechCorp finally got it right. They have a rare combination of technical depth and product thinking. Highly recommend for complex projects.",
  },
  {
    name: "James Wilson",
    role: "Founder, InsightAI",
    avatar: "JW",
    color: "#34d399",
    rating: 5,
    text: "The AI solutions team at TechCorp is exceptional. They took our vague requirements and built a predictive model that increased our accuracy by 40%. Best investment we've made.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-24" style={{ background: "var(--bg-secondary)" }}>
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
            Client Stories
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            What Clients <span className="gradient-text">Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="relative p-8 rounded-2xl"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
          >
            <div className="flex gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={16} fill="#f59e0b" style={{ color: "#f59e0b" }} />
              ))}
            </div>

            <blockquote
              className="text-lg leading-relaxed mb-8"
              style={{ color: "var(--text-primary)" }}
            >
              &ldquo;{t.text}&rdquo;
            </blockquote>

            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white"
                style={{
                  background: `linear-gradient(135deg, ${t.color}, ${t.color}80)`,
                }}
              >
                {t.avatar}
              </div>
              <div>
                <div
                  className="font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {t.name}
                </div>
                <div className="text-sm" style={{ color: "var(--text-muted)" }}>
                  {t.role}
                </div>
              </div>
            </div>

            <div
              className="absolute top-0 left-8 text-6xl font-serif leading-none"
              style={{ color: "rgba(99,102,241,0.15)", transform: "translateY(-20px)" }}
            >
              &ldquo;
            </div>
          </div>

          <div className="space-y-4">
            {testimonials.map((item, i) => (
              <button
                key={item.name}
                onClick={() => setCurrent(i)}
                className="w-full text-left p-4 rounded-xl transition-all duration-200"
                style={{
                  background: i === current ? "var(--bg-card-hover)" : "var(--bg-card)",
                  border: `1px solid ${i === current ? "rgba(99,102,241,0.4)" : "var(--border)"}`,
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}, ${item.color}80)`,
                    }}
                  >
                    {item.avatar}
                  </div>
                  <div>
                    <div
                      className="text-sm font-semibold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {item.name}
                    </div>
                    <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                      {item.role}
                    </div>
                  </div>
                </div>
              </button>
            ))}

            <div className="flex gap-2 pt-2">
              <button
                onClick={prev}
                className="p-2.5 rounded-xl transition-all duration-200 hover:bg-white/5"
                style={{ border: "1px solid var(--border)", color: "var(--text-secondary)" }}
                aria-label="Previous"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                className="p-2.5 rounded-xl transition-all duration-200 hover:bg-white/5"
                style={{ border: "1px solid var(--border)", color: "var(--text-secondary)" }}
                aria-label="Next"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
