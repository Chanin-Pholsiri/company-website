"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CTO, FinTrack Inc.",
    avatar: "SM",
    color: "#6366f1",
    text: "TechCorp delivered our platform two weeks ahead of schedule. The code quality was exceptional; our team extended it with zero issues. That's rare.",
  },
  {
    name: "David Park",
    role: "CEO, MedConnect",
    avatar: "DP",
    color: "#22d3ee",
    text: "Working with TechCorp reshaped our product. They challenged our assumptions before writing a line of code, and the result was better than what we originally scoped.",
  },
  {
    name: "Priya Sharma",
    role: "VP Engineering, LogiX",
    avatar: "PS",
    color: "#a78bfa",
    text: "After two failed engagements with other agencies, TechCorp finally got it right. Technical depth combined with real product thinking. Highly recommend for complex builds.",
  },
  {
    name: "James Wilson",
    role: "Founder, InsightAI",
    avatar: "JW",
    color: "#34d399",
    text: "The AI team took vague requirements and built a predictive model that increased our forecasting accuracy by 40%. They translated business goals into working engineering.",
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
        <h2
          className="font-bold mb-16"
          style={{
            fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
            color: "var(--text-primary)",
          }}
        >
          What clients say
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div
            className="p-8 rounded-2xl"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
          >
            <blockquote
              className="text-lg leading-relaxed mb-8"
              style={{ color: "var(--text-primary)", lineHeight: 1.6 }}
            >
              &ldquo;{t.text}&rdquo;
            </blockquote>

            <div className="flex items-center gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                style={{ background: t.color }}
              >
                {t.avatar}
              </div>
              <div>
                <div
                  className="text-sm font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {t.name}
                </div>
                <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                  {t.role}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {testimonials.map((item, i) => (
              <button
                key={item.name}
                onClick={() => setCurrent(i)}
                className="w-full text-left p-4 rounded-xl transition-all duration-150"
                aria-pressed={i === current}
                style={{
                  background: i === current ? "var(--bg-card-hover)" : "var(--bg-card)",
                  border: `1px solid ${i === current ? "rgba(99,102,241,0.35)" : "var(--border)"}`,
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                    style={{ background: item.color }}
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
                className="p-2.5 rounded-xl transition-all duration-150 hover:bg-white/5"
                style={{ border: "1px solid var(--border)", color: "var(--text-secondary)" }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                className="p-2.5 rounded-xl transition-all duration-150 hover:bg-white/5"
                style={{ border: "1px solid var(--border)", color: "var(--text-secondary)" }}
                aria-label="Next testimonial"
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
