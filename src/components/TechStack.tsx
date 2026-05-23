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
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4"
            style={{
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.3)",
              color: "#818cf8",
            }}
          >
            Technology
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Our <span className="gradient-text">Tech Stack</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            We use battle-tested, cutting-edge technologies to deliver robust and scalable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: stack.color, boxShadow: `0 0 10px ${stack.color}` }}
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
                    className="px-3 py-1.5 rounded-lg text-xs font-medium"
                    style={{
                      background: `${stack.color}10`,
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
