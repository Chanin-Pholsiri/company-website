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
            Start a project
          </h2>
          <p
            className="text-lg"
            style={{ color: "var(--text-secondary)", maxWidth: "50ch" }}
          >
            Tell us what you&apos;re building. We&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 flex flex-col gap-5">
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
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${info.color}12` }}
                  >
                    <Icon size={16} style={{ color: info.color }} aria-hidden="true" />
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
              className="p-5 rounded-xl"
              style={{
                background: "rgba(99,102,241,0.06)",
                border: "1px solid rgba(99,102,241,0.15)",
              }}
            >
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                We typically respond within{" "}
                <strong style={{ color: "var(--text-primary)" }}>2 business hours</strong>.
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
                  htmlFor="contact-name"
                  className="text-xs font-medium"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Full name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Alex Chen"
                  className="px-4 py-3 rounded-xl text-sm outline-none transition-all duration-150 focus:ring-2 focus:ring-indigo-500/30"
                  style={{
                    background: "var(--bg-primary)",
                    border: "1px solid var(--border)",
                    color: "var(--text-primary)",
                  }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-email"
                  className="text-xs font-medium"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Work email *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="px-4 py-3 rounded-xl text-sm outline-none transition-all duration-150 focus:ring-2 focus:ring-indigo-500/30"
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
                htmlFor="contact-company"
                className="text-xs font-medium"
                style={{ color: "var(--text-secondary)" }}
              >
                Company
              </label>
              <input
                id="contact-company"
                type="text"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                placeholder="Your company name"
                className="px-4 py-3 rounded-xl text-sm outline-none transition-all duration-150 focus:ring-2 focus:ring-indigo-500/30"
                style={{
                  background: "var(--bg-primary)",
                  border: "1px solid var(--border)",
                  color: "var(--text-primary)",
                }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-message"
                className="text-xs font-medium"
                style={{ color: "var(--text-secondary)" }}
              >
                What are you building? *
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Describe the problem you're solving, what you need built, and your timeline..."
                className="px-4 py-3 rounded-xl text-sm outline-none resize-none transition-all duration-150 focus:ring-2 focus:ring-indigo-500/30"
                style={{
                  background: "var(--bg-primary)",
                  border: "1px solid var(--border)",
                  color: "var(--text-primary)",
                }}
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white transition-opacity duration-150 hover:opacity-90"
              style={{
                background: sent ? "#059669" : "var(--accent)",
                boxShadow: sent ? "none" : "0 0 20px rgba(99,102,241,0.2)",
              }}
            >
              {sent ? (
                <>
                  <CheckCircle2 size={16} aria-hidden="true" /> Message sent
                </>
              ) : (
                <>
                  <Send size={16} aria-hidden="true" /> Send message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
