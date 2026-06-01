---
target: homepage /
total_score: 15
p0_count: 2
p1_count: 3
timestamp: 2026-06-01T07-09-23Z
slug: src-app-page-tsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Contact form has no submit/success/error feedback; no active nav state |
| 2 | Match System / Real World | 2 | "Learn more" and "View All Projects" both link to #contact, not detail pages |
| 3 | User Control and Freedom | 2 | Portfolio filter can reset; no undo anywhere; no current-location indicator |
| 4 | Consistency and Standards | 1 | Home uses gradient text + eyebrows on every section; pricing page uses neither |
| 5 | Error Prevention | 1 | Contact form has no client-side validation; misleading link destinations |
| 6 | Recognition Rather Than Recall | 3 | Navigation clear; icons label services; filter tabs visible |
| 7 | Flexibility and Efficiency | 1 | No keyboard shortcuts; all CTAs go to same contact anchor; no skip-to-content |
| 8 | Aesthetic and Minimalist Design | 1 | Gradient text on 6 headings, eyebrow above every section, particle canvas, stat grid, identical card grid |
| 9 | Error Recovery | 1 | Form has no error states; submission outcome unknown |
| 10 | Help and Documentation | 1 | No contextual help; FAQ only on pricing page |
| **Total** | | **15/40** | **Poor** |

## Anti-Patterns Verdict

**LLM assessment**: Definitively AI-generated. Hits every first-order reflex: particle canvas, gradient text on every section heading, eyebrow pill above every section, stat cards in hero, 4-identical-card service grid, gradient portfolio card backgrounds, star-rated testimonials. PRODUCT.md named this exact pattern as the primary anti-reference. The pricing page (built this session) violates none of these patterns — opening both pages side by side reveals two completely different design systems.

**Deterministic scan (3 findings)**:
- `ai-color-palette`: Portfolio.tsx:15 (from-indigo-900 gradient), Portfolio.tsx:31 (from-purple-900 gradient)
- `gradient-text`: globals.css:71 (.gradient-text class used on 6+ section headings)

## Priority Issues

**[P0] Gradient text on 6+ section headings** — .gradient-text applied to "Digital Solutions", "Services", "Future of Software", "Projects", "Say", "Our Blog". Most recognizable AI tell. Fix: remove .gradient-text class and all usages.

**[P0] Eyebrow pill above every section** — "Trusted by 200+", "What We Do", "About Us", "Our Work", "What Clients Say", "Insights" — all six sections have eyebrow badges. Fix: remove all six.

**[P1] Hero-metric template** — 200+/50+/8+ stat grid with gradient text below the hero CTA. Fix: remove stat grid entirely.

**[P1] Identical 4-card service grid** — icon + heading + text + features, four times, all linking to #contact. Fix: redesign services with varied visual weight.

**[P1] Cross-page inconsistency with /pricing** — home uses gradient text + eyebrows; pricing uses neither. Consistency scored 1/4.

## Persona Red Flags

**Jordan**: "Learn more" → contact form dead end. "View All Projects" → same. Never gets service detail.

**Riley**: Form has no visible validation. Portfolio filter reveals thin content (1 project per filtered category). Hover-only project links appear non-functional.

**Diana (Enterprise CTO)**: Closes the tab on the homepage; "world-class" in footer, stat claims with no named clients, template aesthetic. Pricing page would recover trust if she got there.

## Minor Observations

- Particle canvas has no prefers-reduced-motion alternative
- "Scroll to explore" text is unnecessary
- Hero primary CTA still uses gradient fill (inconsistent with Navbar's solid accent)
- Footer: "world-class digital solutions" is a named banned buzzword
- Testimonial quotes contain em dashes
- Blog section likely another identical card grid
