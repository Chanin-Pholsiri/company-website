import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Pricing | TechCorp",
  description:
    "Three engagement models structured around how software is actually built. We scope before we quote.",
};

const engagementModels = [
  {
    id: "discovery",
    duration: "2–4 weeks",
    name: "Discovery Sprint",
    description:
      "Validate scope and architecture before any team is committed or code is written. We map every decision, surface the unknowns, and produce a plan you can act on immediately.",
    deliverable:
      "A technical specification, architecture diagram, and delivery timeline. Decision-ready on the final day of the Sprint.",
    featured: false,
  },
  {
    id: "build",
    duration: "3–12 months",
    name: "Build Partnership",
    description:
      "A dedicated team (engineering, design, product management) delivers your product in weekly iterations. The build is always releasable; there is no big-bang launch.",
    deliverable:
      "A shipped, production-deployed product. Feature-complete and documented. Continue as a Retained engagement or hand off clean.",
    featured: true,
  },
  {
    id: "retained",
    duration: "Ongoing",
    name: "Retained Engineering",
    description:
      "Your team, extended. We maintain velocity on an existing codebase without the overhead of re-onboarding new engineers every quarter.",
    deliverable:
      "Code shipped on your schedule. The codebase maintained, extended, and tested. No handoff friction.",
    featured: false,
  },
];

const comparisonRows: { label: string; values: [string, string, string] }[] = [
  {
    label: "Duration",
    values: ["2–4 weeks", "3–12 months", "Ongoing"],
  },
  {
    label: "Team size",
    values: [
      "Lead engineer + technical PM",
      "4–8 people across engineering, design, and PM",
      "2–6 embedded engineers",
    ],
  },
  {
    label: "Delivery cadence",
    values: [
      "Daily updates; final deliverable at Sprint end",
      "Weekly sprint reviews",
      "Weekly or per-commit",
    ],
  },
  {
    label: "Primary deliverable",
    values: [
      "Technical specification and delivery plan",
      "Shipped, production-deployed product",
      "Maintained codebase velocity",
    ],
  },
  {
    label: "IP ownership",
    values: [
      "Full transfer on completion",
      "Full transfer on completion",
      "Full transfer on completion",
    ],
  },
  {
    label: "Best for",
    values: [
      "Greenfield builds, vendor evaluation, pre-funding technical diligence",
      "0→1 product builds, major feature sets, platform migrations",
      "Teams scaling faster than hiring, post-launch iteration",
    ],
  },
];

const processSteps = [
  {
    number: "1",
    title: "Scope the problem",
    description:
      "We spend the first days understanding what you are building and why, before any architectural decision is made. Most cost overruns begin here.",
  },
  {
    number: "2",
    title: "Ship in iterations",
    description:
      "Weekly delivery, always releasable. You can use what we built after every sprint. There is no waiting for a release that doesn't match what was agreed.",
  },
  {
    number: "3",
    title: "Extend or hand off",
    description:
      "After the build, we either continue as a Retained partner or execute a documented handoff. Documented means your team can take ownership from day one.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Header */}
        <section
          className="pt-40 pb-20"
          style={{ background: "var(--bg-primary)" }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <h1
                className="font-bold mb-6"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: "var(--text-primary)",
                }}
              >
                How we structure engagements
              </h1>
              <p
                className="text-lg leading-relaxed"
                style={{
                  color: "var(--text-secondary)",
                  maxWidth: "55ch",
                  lineHeight: 1.7,
                }}
              >
                We don&apos;t quote before we understand the work. Our three
                engagement models are built around how software is actually
                developed: define the problem first, deliver iteratively, then
                extend or hand off cleanly.
              </p>
            </div>
          </div>
        </section>

        {/* Engagement Models */}
        <section
          className="pb-24"
          style={{ background: "var(--bg-primary)" }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {engagementModels.map((model) => (
                <article
                  key={model.id}
                  className="flex flex-col rounded-2xl"
                  style={{
                    padding: "32px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderTop: model.featured
                      ? "3px solid var(--accent)"
                      : "1px solid var(--border)",
                  }}
                >
                  {model.featured && (
                    <span
                      className="text-xs font-medium block mb-4"
                      style={{ color: "var(--accent)" }}
                    >
                      Recommended
                    </span>
                  )}
                  <p
                    className="text-xs font-medium mb-3 uppercase tracking-wider"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {model.duration}
                  </p>
                  <h2
                    className="text-xl font-semibold mb-4"
                    style={{ color: "var(--text-primary)", lineHeight: 1.25 }}
                  >
                    {model.name}
                  </h2>
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {model.description}
                  </p>
                  <div
                    className="mt-6 pt-5"
                    style={{ borderTop: "1px solid var(--border)" }}
                  >
                    <p
                      className="text-xs font-medium mb-2"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Deliverable
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {model.deliverable}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section
          className="py-24"
          style={{
            background: "var(--bg-secondary)",
            borderTop: "1px solid var(--border)",
          }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <h2
              className="font-bold mb-12"
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
                color: "var(--text-primary)",
              }}
            >
              Compare engagements
            </h2>
            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  minWidth: "620px",
                  borderCollapse: "collapse",
                }}
              >
                <thead>
                  <tr>
                    <th
                      scope="col"
                      aria-label="Feature"
                      style={{
                        width: "200px",
                        textAlign: "left",
                        padding: "0 24px 16px 0",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                        color: "var(--text-muted)",
                        borderBottom: "1px solid var(--border)",
                        position: "sticky",
                        left: 0,
                        background: "var(--bg-secondary)",
                        zIndex: 1,
                      }}
                    />
                    {engagementModels.map((model) => (
                      <th
                        key={model.id}
                        scope="col"
                        style={{
                          textAlign: "left",
                          padding: "0 24px 16px",
                          fontSize: "0.875rem",
                          fontWeight: 600,
                          color: model.featured
                            ? "var(--accent)"
                            : "var(--text-primary)",
                          borderBottom: "1px solid var(--border)",
                          verticalAlign: "bottom",
                        }}
                      >
                        {model.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.label}>
                      <th
                        scope="row"
                        style={{
                          textAlign: "left",
                          padding: "16px 24px 16px 0",
                          fontSize: "0.8125rem",
                          fontWeight: 500,
                          color: "var(--text-muted)",
                          borderBottom: "1px solid var(--border)",
                          verticalAlign: "top",
                          position: "sticky",
                          left: 0,
                          background: "var(--bg-secondary)",
                          zIndex: 1,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {row.label}
                      </th>
                      {row.values.map((val, j) => (
                        <td
                          key={j}
                          style={{
                            padding: "16px 24px",
                            fontSize: "0.875rem",
                            color: "var(--text-secondary)",
                            borderBottom: "1px solid var(--border)",
                            verticalAlign: "top",
                            lineHeight: 1.6,
                          }}
                        >
                          {val}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Process Preview */}
        <section
          className="py-24"
          style={{ background: "var(--bg-primary)" }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <h2
              className="font-bold mb-16"
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
                color: "var(--text-primary)",
              }}
            >
              How every engagement starts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {processSteps.map((step) => (
                <div key={step.number}>
                  <div
                    aria-hidden="true"
                    className="font-bold mb-5 select-none tabular-nums"
                    style={{
                      fontSize: "5rem",
                      lineHeight: 1,
                      color: "var(--border)",
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {step.number}
                  </div>
                  <h3
                    className="text-lg font-semibold mb-3"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "var(--text-secondary)",
                      maxWidth: "30ch",
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section
          className="py-24"
          style={{
            background: "var(--bg-secondary)",
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <figure className="max-w-2xl">
              <blockquote>
                <p
                  className="font-medium leading-relaxed mb-8"
                  style={{
                    fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)",
                    lineHeight: 1.5,
                    color: "var(--text-primary)",
                  }}
                >
                  &ldquo;We came in with a vague brief and left with a shipped
                  product and a team we trusted. They asked the right questions
                  before writing a single line of code.&rdquo;
                </p>
              </blockquote>
              <figcaption>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Sarah Park
                </p>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  CTO, Meridian Financial
                </p>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="py-24"
          style={{ background: "var(--bg-primary)" }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20">
              <div className="lg:col-span-1">
                <h2
                  className="font-bold"
                  style={{
                    fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                    lineHeight: 1.2,
                    letterSpacing: "-0.01em",
                    color: "var(--text-primary)",
                  }}
                >
                  Common questions
                </h2>
              </div>
              <div className="lg:col-span-2">
                <FAQAccordion />
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section
          className="py-32"
          style={{
            background: "var(--bg-secondary)",
            borderTop: "1px solid var(--border)",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2
              className="font-bold mb-4"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "var(--text-primary)",
              }}
            >
              Have a project in mind?
            </h2>
            <p
              className="text-lg mb-10 mx-auto"
              style={{
                color: "var(--text-secondary)",
                maxWidth: "42ch",
                lineHeight: 1.65,
              }}
            >
              We scope engagements in a 30-minute intro call. No pitch deck
              required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-white transition-opacity duration-150 hover:opacity-90"
                style={{
                  background: "var(--accent)",
                  boxShadow: "0 0 30px rgba(99,102,241,0.3)",
                  fontSize: "0.9375rem",
                }}
              >
                Schedule an intro call
              </a>
              <a
                href="/#portfolio"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold transition-colors duration-150 hover:bg-white/5"
                style={{
                  color: "var(--text-primary)",
                  border: "1px solid var(--border)",
                  fontSize: "0.9375rem",
                }}
              >
                View case studies
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
