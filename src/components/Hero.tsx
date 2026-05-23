"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${p.alpha})`;
        ctx.fill();
      });

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.6 }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99,102,241,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className="max-w-4xl">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-8"
            style={{
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.3)",
              color: "#818cf8",
            }}
          >
            <Sparkles size={12} />
            Trusted by 200+ companies worldwide
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            We Build{" "}
            <span className="gradient-text">Digital Solutions</span>{" "}
            <br className="hidden md:block" />
            That Matter
          </h1>

          <p
            className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
            style={{ color: "var(--text-secondary)" }}
          >
            From web apps to mobile platforms, cloud infrastructure to AI systems —
            we turn your vision into powerful software that drives real business results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #6366f1, #4f46e5)",
                boxShadow: "0 0 30px rgba(99,102,241,0.3)",
              }}
            >
              Start a Project
              <ArrowRight size={16} />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold transition-all duration-200 hover:bg-white/5"
              style={{
                color: "var(--text-primary)",
                border: "1px solid var(--border)",
              }}
            >
              <Play size={16} />
              View Our Work
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-md">
            {[
              { value: "200+", label: "Projects Delivered" },
              { value: "50+", label: "Team Members" },
              { value: "8+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-3xl font-bold mb-1"
                  style={{
                    background: "linear-gradient(135deg, #818cf8, #22d3ee)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div
          className="text-xs"
          style={{ color: "var(--text-muted)" }}
        >
          Scroll to explore
        </div>
        <div
          className="w-px h-12 animate-pulse"
          style={{ background: "linear-gradient(to bottom, var(--accent), transparent)" }}
        />
      </div>
    </section>
  );
}
