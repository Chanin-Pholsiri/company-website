"use client";

const services = [
  {
    id: "web",
    name: "Web Development",
    description:
      "High-performance web applications built with modern frameworks. From marketing sites to complex enterprise platforms, we ship production-ready code that handles real traffic.",
    features: ["Next.js / React", "TypeScript", "REST & GraphQL APIs", "SEO-ready"],
  },
  {
    id: "mobile",
    name: "Mobile App Development",
    description:
      "Native and cross-platform apps for iOS and Android. We build apps that are fast, reliable, and go through proper review processes without shortcuts.",
    features: ["React Native", "Flutter", "iOS & Android", "App Store publishing"],
  },
  {
    id: "cloud",
    name: "Cloud & Infrastructure",
    description:
      "Scalable cloud architecture designed for reliability and cost control. From CI/CD pipelines to Kubernetes clusters, we manage infrastructure that stays up.",
    features: ["AWS / GCP / Azure", "Docker & Kubernetes", "CI/CD", "99.9% uptime SLA"],
  },
  {
    id: "ai",
    name: "Data & AI",
    description:
      "ML models, data pipelines, and AI-powered features that automate real workflows. We integrate LLMs and build predictive models that produce measurable results.",
    features: ["Machine learning", "Data analytics", "LLM integration", "Predictive models"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24" style={{ background: "var(--bg-secondary)" }}>
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
            What we build
          </h2>
          <p
            className="text-lg"
            style={{ color: "var(--text-secondary)", maxWidth: "52ch" }}
          >
            Four disciplines, one team. We work across the full stack so
            you don&apos;t have to coordinate between vendors.
          </p>
        </div>

        <div style={{ borderTop: "1px solid var(--border)" }}>
          {services.map((service, i) => (
            <div
              key={service.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-10"
              style={{
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div className="lg:col-span-4">
                <div
                  className="text-xs font-medium tabular-nums mb-3"
                  style={{ color: "var(--text-muted)" }}
                  aria-hidden="true"
                >
                  0{i + 1}
                </div>
                <h3
                  className="text-xl font-semibold"
                  style={{ color: "var(--text-primary)", lineHeight: 1.25 }}
                >
                  {service.name}
                </h3>
              </div>
              <div className="lg:col-span-5">
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)", maxWidth: "50ch" }}
                >
                  {service.description}
                </p>
              </div>
              <div className="lg:col-span-3 flex flex-wrap gap-2 lg:justify-end lg:items-start">
                {service.features.map((feat) => (
                  <span
                    key={feat}
                    className="px-2.5 py-1 rounded-md text-xs font-medium"
                    style={{
                      background: "rgba(99,102,241,0.08)",
                      color: "var(--accent)",
                      border: "1px solid rgba(99,102,241,0.18)",
                    }}
                  >
                    {feat}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-150 hover:text-white"
            style={{ color: "var(--accent)" }}
          >
            Talk to us about your project
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
