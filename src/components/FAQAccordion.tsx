"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const faqs = [
  {
    question: "How are projects quoted?",
    answer:
      "We quote after understanding scope, which usually means a Discovery Sprint or a working session. Every estimate without full scope is a guess; we surface the unknowns early and give you a number you can plan around.",
  },
  {
    question: "Do we need to start with a Discovery Sprint?",
    answer:
      "Not if you have a well-defined scope, technical documentation, and a clear brief. For greenfield builds or vague RFPs, we recommend the Sprint to protect both sides. A Sprint also functions as a vendor evaluation: you see how we think before committing to a longer engagement.",
  },
  {
    question: "Who owns the intellectual property?",
    answer:
      "You do, in full. All IP transfers on final payment. We sign NDAs before any conversation that requires one; just ask before we start.",
  },
  {
    question: "How do you handle scope changes during a build?",
    answer:
      "We work in weekly iterations. Changes that arrive between sprint cycles are queued and scoped in the next planning session. Changes during an active sprint are assessed for impact and either folded in (if small) or queued as a follow-on item. You decide which.",
  },
  {
    question: "What does a typical team look like?",
    answer:
      "A lead engineer who owns technical decisions, one to three product engineers who build features, and optionally a designer and a PM depending on the engagement. We staff to the actual problem, not to a fixed model.",
  },
  {
    question: "Can we start with a Discovery Sprint and decide later?",
    answer:
      "Yes. A Sprint is a complete, standalone engagement with no automatic commitment to the build phase. Many clients use it to evaluate fit as much as to plan the product.",
  },
  {
    question: "What is your current availability?",
    answer:
      "We take on two to four engagements at a time per discipline. If you're seeing a six to eight week start window in the intro call, that's accurate; we'd rather be honest about timing than overcommit.",
  },
  {
    question: "How do we get started?",
    answer:
      "A 30-minute intro call. We'll ask about the problem, the team, and the timeline. No deck required from your side.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div style={{ borderBottom: "1px solid var(--border)" }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full flex items-start justify-between gap-6 py-5 text-left"
        style={{ background: "none", border: "none", cursor: "pointer", padding: "20px 0" }}
      >
        <span
          className="text-base font-medium"
          style={{ color: "var(--text-primary)", lineHeight: 1.5 }}
        >
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={
            prefersReducedMotion ? { duration: 0 } : { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
          }
          className="shrink-0 mt-0.5"
          aria-hidden="true"
          style={{
            fontSize: "1.25rem",
            lineHeight: 1,
            fontWeight: 300,
            color: "var(--accent)",
            display: "block",
          }}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { height: { duration: 0.28, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.2 } }
            }
            style={{ overflow: "hidden" }}
          >
            <p
              className="pb-5 text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)", maxWidth: "60ch" }}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQAccordion() {
  return (
    <div style={{ borderTop: "1px solid var(--border)" }}>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}
