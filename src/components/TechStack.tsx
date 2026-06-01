"use client";

const stacks = [
  {
    category: "Frontend",
    color: "#6366f1",
    techs: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Three.js"],
  },
  {
    category: "Backend",
    color: "#22d3ee",
    techs: ["Node.js", "Python", "Go", "Rust", "GraphQL", "REST APIs"],
  },
  {
    category: "Mobile",
    color: "#a78bfa",
    techs: ["React Native", "Flutter", "Swift", "Kotlin", "Expo", "Capacitor"],
  },
  {
    category: "Cloud & DevOps",
    color: "#34d399",
    techs: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform"],
  },
  {
    category: "Data & AI",
    color: "#f59e0b",
    techs: ["TensorFlow", "PyTorch", "LangChain", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "Security",
    color: "#ec4899",
    techs: ["OAuth 2.0", "JWT", "OWASP", "Penetration Testing", "SOC2", "GDPR"],
  },
];

export default function TechStack() {
  return (
    <section className="py-24" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2
            className="font-bold mb-4"
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
              color: "var(--text-primary)",
            }}
          >
            Our tech stack
          </h2>
          <p
            className="text-lg"
            style={{ color: "var(--text-secondary)", maxWidth: "52ch" }}
          >
            Tools chosen for reliability, community support, and fitness
            for the problem. We don&apos;t chase trends; we use what works.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stacks.map((stack) => (
            <div
              key={stack.category}
              className="p-6 rounded-2xl"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: stack.color }}
                />
                <h3
                  className="font-semibold text-sm"
                  style={{ color: "var(--text-primary)" }}
                >
                  {stack.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {stack.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1.5 rounded-lg text-xs font-medium"
                    style={{
                      background: `${stack.color}0d`,
                      color: stack.color,
                      border: `1px solid ${stack.color}20`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
