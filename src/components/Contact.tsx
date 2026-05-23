"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@techcorp.dev", color: "#6366f1" },
  { icon: Phone, label: "Phone", value: "+66 2 123 4567", color: "#22d3ee" },
  { icon: MapPin, label: "Office", value: "Bangkok, Thailand", color: "#a78bfa" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="py-24" style={{ background: "var(--bg-secondary)" }}>
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
            Get in Touch
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Start Your <span className="gradient-text">Project</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Tell us about your project. We&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 flex flex-col gap-6">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.label}
                  className="flex items-start gap-4 p-5 rounded-xl"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${info.color}15` }}
                  >
                    <Icon size={18} style={{ color: info.color }} />
                  </div>
                  <div>
                    <div
                      className="text-xs font-medium mb-1"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {info.label}
                    </div>
                    <div
                      className="text-sm font-semibold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {info.value}
                    </div>
                  </div>
                </div>
              );
            })}

            <div
              className="p-5 rounded-xl mt-2"
              style={{
                background: "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(34,211,238,0.1))",
                border: "1px solid rgba(99,102,241,0.2)",
              }}
            >
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                We typically respond within <strong style={{ color: "var(--text-primary)" }}>2 business hours</strong>.
                For urgent projects, mention it in your message.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 p-8 rounded-2xl flex flex-col gap-5"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label
                  className="text-xs font-medium"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  className="px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-indigo-500/30"
                  style={{
                    background: "var(--bg-primary)",
                    border: "1px solid var(--border)",
                    color: "var(--text-primary)",
                  }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="text-xs font-medium"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@company.com"
                  className="px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-indigo-500/30"
                  style={{
                    background: "var(--bg-primary)",
                    border: "1px solid var(--border)",
                    color: "var(--text-primary)",
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                className="text-xs font-medium"
                style={{ color: "var(--text-secondary)" }}
              >
                Company / Organization
              </label>
              <input
                type="text"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                placeholder="Your company name"
                className="px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-indigo-500/30"
                style={{
                  background: "var(--bg-primary)",
                  border: "1px solid var(--border)",
                  color: "var(--text-primary)",
                }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                className="text-xs font-medium"
                style={{ color: "var(--text-secondary)" }}
              >
                Tell us about your project *
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Describe your project, requirements, and timeline..."
                className="px-4 py-3 rounded-xl text-sm outline-none resize-none transition-all duration-200 focus:ring-2 focus:ring-indigo-500/30"
                style={{
                  background: "var(--bg-primary)",
                  border: "1px solid var(--border)",
                  color: "var(--text-primary)",
                }}
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{
                background: sent
                  ? "linear-gradient(135deg, #34d399, #059669)"
                  : "linear-gradient(135deg, #6366f1, #4f46e5)",
                boxShadow: "0 0 20px rgba(99,102,241,0.2)",
              }}
            >
              {sent ? (
                <>
                  <CheckCircle2 size={16} /> Message Sent!
                </>
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
