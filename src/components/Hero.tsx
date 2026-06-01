"use client";

import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 65% 0%, rgba(99,102,241,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className="max-w-3xl">
          <h1
            className="font-bold mb-6"
            style={{
              fontSize: "clamp(2.75rem, 6vw, 5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              color: "var(--text-primary)",
            }}
          >
            We build software that earns trust.
          </h1>

          <p
            className="text-lg md:text-xl leading-relaxed mb-10"
            style={{
              color: "var(--text-secondary)",
              maxWidth: "52ch",
              lineHeight: 1.7,
            }}
          >
            From web apps to mobile platforms, cloud infrastructure to AI systems.
            TechCorp is a full-stack engineering team that delivers software
            built to last, for startups and enterprise teams alike.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white transition-opacity duration-150 hover:opacity-90"
              style={{
                background: "var(--accent)",
                fontSize: "0.9375rem",
                boxShadow: "0 0 30px rgba(99,102,241,0.3)",
              }}
            >
              Start a project
              <ArrowRight size={15} />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold transition-all duration-200 hover:bg-white/5"
              style={{
                color: "var(--text-primary)",
                border: "1px solid var(--border)",
                fontSize: "0.9375rem",
              }}
            >
              View our work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
