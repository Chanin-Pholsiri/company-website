"use client";

import { Clock, ArrowRight } from "lucide-react";

const posts = [
  {
    category: "Engineering",
    title: "Why We Switched Our Entire Infrastructure to Kubernetes",
    excerpt: "After 3 years on Docker Compose, we made the leap. Here's what we learned, what broke, and why we'd do it again.",
    date: "May 18, 2026",
    readTime: "8 min read",
    color: "#6366f1",
  },
  {
    category: "AI / ML",
    title: "Building Production-Ready LLM Applications in 2026",
    excerpt: "Prompt engineering, RAG pipelines, evaluation frameworks — the practical guide we wish we had when starting.",
    date: "May 10, 2026",
    readTime: "12 min read",
    color: "#22d3ee",
  },
  {
    category: "Product",
    title: "How We Cut Our Client's Time-to-Market by 60%",
    excerpt: "A deep dive into our rapid prototyping process, from wireframe to production in 4 weeks.",
    date: "Apr 29, 2026",
    readTime: "6 min read",
    color: "#a78bfa",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4"
              style={{
                background: "rgba(99,102,241,0.1)",
                border: "1px solid rgba(99,102,241,0.3)",
                color: "#818cf8",
              }}
            >
              Insights
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              Latest from <span className="gradient-text">Our Blog</span>
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-white shrink-0"
            style={{ color: "#818cf8" }}
          >
            View all posts <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 card-glow"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="h-2"
                style={{ background: `linear-gradient(90deg, ${post.color}, ${post.color}50)` }}
              />
              <div className="p-6">
                <span
                  className="text-xs font-semibold px-2 py-1 rounded-md inline-block mb-4"
                  style={{
                    background: `${post.color}15`,
                    color: post.color,
                  }}
                >
                  {post.category}
                </span>
                <h3
                  className="text-base font-bold leading-snug mb-3 group-hover:text-indigo-400 transition-colors"
                  style={{ color: "var(--text-primary)" }}
                >
                  {post.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {post.excerpt}
                </p>
                <div
                  className="flex items-center justify-between text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={11} />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
