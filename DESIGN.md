---
name: TechCorp
description: Software development agency for enterprise clients — precise, rigorous, authoritative.
colors:
  signal-indigo: "#6366f1"
  accent-cyan: "#22d3ee"
  bg-void: "#06060e"
  bg-depth: "#0d0d1a"
  surface: "#111120"
  surface-hover: "#16162a"
  border-subtle: "#1e1e35"
  ink-primary: "#f1f5f9"
  ink-secondary: "#94a3b8"
  ink-muted: "#475569"
typography:
  display:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 3vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.signal-indigo}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.md}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "#4f46e5"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.md}"
    padding: "14px 24px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.md}"
    padding: "14px 24px"
  button-ghost-hover:
    backgroundColor: "rgba(255,255,255,0.05)"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.md}"
    padding: "14px 24px"
  chip:
    backgroundColor: "rgba(99,102,241,0.1)"
    textColor: "#818cf8"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.lg}"
    padding: "32px"
  card-hover:
    backgroundColor: "{colors.surface-hover}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.lg}"
    padding: "32px"
---

# Design System: TechCorp

## 1. Overview

**Creative North Star: "The Precision Layer"**

This is an engineering-first brand surface — a company whose credibility comes from doing precise, rigorous work, and whose interface must embody that character without announcing it. The system is a dark, dense environment with high ink contrast and minimal decoration: near-black backgrounds layered in tonal steps, a single structural accent color (Signal Indigo), and typography that does nearly all the communicative work. Nothing performs confidence; the restraint is the confidence.

The system explicitly rejects the saturated AI-generated agency aesthetic: particle canvas heroes, gradient text, indigo-to-cyan tinted stat cards, eyebrow pill labels above every section, and glassmorphism used as atmosphere. Those patterns signal that a site was generated in 45 seconds. This system signals that it was built by people who understand the difference. The palette is genuinely committed (not a hedged "nearly dark, slightly indigo everywhere"), the typography scale is deliberate and unambiguous, and every interactive element has a clear, functional reason to exist.

The target context is a CTO at a mid-to-large company, doing focused vendor evaluation. The interface should feel like a well-produced technical document, not a pitch deck.

**Key Characteristics:**
- Dark-to-void backgrounds layered tonally, not illuminated decoratively
- Signal Indigo appears only where a decision can be made or attention is structurally required
- Type hierarchy carries full communicative weight; decoration does not assist it
- Flat surfaces with functional glow-on-elevation, never ambient shadows
- No gradient text; no rounded-icon-above-every-heading; no eyebrow labels as grammatical scaffolding
- Geist Sans across all roles — one family, committed weight contrast

## 2. Colors: The Structural Palette

One true accent on a deep void background. Color is structural, not atmospheric.

### Primary
- **Signal Indigo** (`#6366f1`): The single functional accent. Appears on primary CTAs, the recommended engagement tier border, active navigation states, focus rings, and progress indicators. Its rarity is its meaning. Never use it decoratively.

### Secondary
- **Terminal Cyan** (`#22d3ee`): Used sparingly as a secondary signal for data labels, tech-stack tags, and alternating icon tints in multi-item displays. Does not share semantic space with Signal Indigo; cyan is informational, indigo is decisional.

### Neutral
- **Void Black** (`#06060e`): Page body background. The deepest layer.
- **Depth Navy** (`#0d0d1a`): Secondary page sections, alternating backgrounds. One tonal step up from Void.
- **Surface Slate** (`#111120`): Card and container backgrounds. The resting surface for interactive elements.
- **Surface Hover** (`#16162a`): Cards and containers at hover state. A tonal lift, not a glow.
- **Border Subtle** (`#1e1e35`): All borders, dividers, and input strokes. Just visible against Surface Slate; no stronger.
- **Ink Primary** (`#f1f5f9`): All body text, headings, and primary labels on dark backgrounds. High contrast; non-negotiable.
- **Ink Secondary** (`#94a3b8`): Supporting copy, captions, secondary labels. Minimum 4.5:1 against all surface tokens — verify before using on anything lighter than Surface Slate.
- **Ink Muted** (`#475569`): Placeholder text, timestamp metadata, disabled states. Never use for body copy or descriptive content.

### Named Rules

**The Signal Rule.** Signal Indigo is a functional material, not a brand color. It appears on ≤10% of any given screen surface. If it appears everywhere, it signals nothing.

**The Muted Ceiling Rule.** Ink Muted (`#475569`) is prohibited for body copy and meaningful descriptive text. It passes 4.5:1 only against Void Black — nowhere else. Use Ink Secondary (`#94a3b8`) for supporting text on Surface Slate or deeper.

## 3. Typography

**Body Font:** Geist Sans (with `system-ui, sans-serif` fallback)
**Mono Font:** Geist Mono (code samples, inline technical labels only)

**Character:** A single geometric sans with committed weight contrast. Geist's optical balance at large sizes and its readable structure at small sizes make one family sufficient. The mono variant appears only for genuinely code-shaped content — never as a style device for "looking technical."

### Hierarchy

- **Display** (700 weight, `clamp(2.5rem, 5vw, 4rem)`, line-height 1.1, letter-spacing −0.02em): Hero headings only. Maximum one per page. Use `text-wrap: balance`.
- **Headline** (700 weight, `clamp(1.75rem, 3vw, 2.5rem)`, line-height 1.2, letter-spacing −0.01em): Section headings. Use `text-wrap: balance`. Never more than three per page.
- **Title** (600 weight, `1.25rem`, line-height 1.3): Card headings, sidebar headings, modal titles.
- **Body** (400 weight, `1rem / 16px`, line-height 1.65): All prose. Cap line length at 65–75ch. Add 0.05 to line-height versus typical light-on-white copy: dark backgrounds make weight read lighter.
- **Label** (500 weight, `0.875rem / 14px`, line-height 1.4): UI labels, button text, tag text, nav items. Not for extended reading.

### Named Rules

**The Single Family Rule.** Geist Sans is the only display and body typeface in this system. Geist Mono is permitted for genuinely code-shaped content. Adding a second display family is prohibited — it introduces visual competition that weakens the typographic authority the system depends on.

**The Gradient Text Prohibition.** `background-clip: text` combined with any gradient is absolutely forbidden. Emphasis is expressed through weight contrast (400 → 700) and size ratio (≥1.25× between steps). Never through decoration.

## 4. Elevation

This system uses tonal layering as its primary depth cue, not shadows. The background stack (`bg-void` → `bg-depth` → `surface` → `surface-hover`) creates depth without illumination. Shadows appear only as functional responses to interaction state, never as ambient decoration.

### Shadow Vocabulary

- **Hover Glow** (`0 0 30px rgba(99, 102, 241, 0.15)`): Applied to interactive cards at hover. Confirms interactivity; does not decorate the resting state. Used on `.card-glow:hover`.
- **CTA Glow** (`0 0 30px rgba(99, 102, 241, 0.3)`): Applied persistently to primary CTA buttons to give them visual pull. One instance per page section maximum.

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat at rest. No ambient shadows, no tonal lift, no glow on non-interactive elements. Depth comes from the tonal background stack. Shadows are reserved for interaction state confirmation.

**The No Ambient Shadow Rule.** `box-shadow` values that appear on `.card` or `.section` elements at rest (not `:hover`, not `:focus`) are prohibited. If you feel the need for an ambient shadow, the tonal background values are not contrasting enough — fix those instead.

## 5. Components

### Buttons

Two variants. Primary for decisive actions; Ghost for secondary actions. No tertiary or text-only buttons.

- **Shape:** Gently rounded (12px, `{rounded.md}`)
- **Primary:** Signal Indigo (`#6366f1`) background, Ink Primary text. Padding 14px 24px. Transition: `background 0.15s ease-out, transform 0.15s ease-out`.
- **Primary Hover:** Background shifts to `#4f46e5` (10% darker indigo). `transform: translateY(-1px)`. No scale — scale distorts adjacent layout.
- **Focus:** `outline: 2px solid #6366f1; outline-offset: 2px`. Never remove focus indicators.
- **Ghost:** Transparent background, Ink Primary text, Border Subtle border (`1px solid #1e1e35`). At hover: `background: rgba(255,255,255,0.05); border-color: #6366f1`.
- **Prohibited:** Gradient backgrounds on buttons. `linear-gradient(135deg, #6366f1, #4f46e5)` is the pattern the current codebase uses — it is banned going forward. Solid Signal Indigo only.

### Cards and Containers

Tonal panels, not lifted boxes. Cards earn their existence when parallel-comparison affordance is genuinely needed.

- **Corner Style:** Softly rounded (16px, `{rounded.lg}`)
- **Background:** Surface Slate (`#111120`)
- **Hover:** Surface Hover (`#16162a`) via background tint transition, plus the Hover Glow shadow
- **Border:** Border Subtle (`#1e1e35`), 1px
- **Internal Padding:** 32px (`{spacing.lg}`)
- **Prohibited:** Nested cards (a card inside a card). Side-stripe `border-left` or `border-right` greater than 1px as a colored accent. The featured/recommended card is distinguished by a top-border accent (`border-top: 3px solid #6366f1`), not a side stripe.

### Feature Tags and Chips

Used for technology labels, capability tags, and engagement-type indicators.

- **Style:** Tinted panel — `background: rgba(99,102,241,0.1); border: 1px solid rgba(99,102,241,0.25)`. Pill-shaped (`{rounded.full}`).
- **Text:** `#818cf8` (lightened indigo). Label weight (500), 0.75rem.
- **Cyan variant:** Same structure using Terminal Cyan's tint (`rgba(34,211,238,0.1)` / border `rgba(34,211,238,0.25)` / text `#22d3ee`). Used for tech-stack or secondary categorization — never in the same visual cluster as the indigo variant.
- **Prohibited:** Eyebrow pills as section grammar (a pill above every heading to label each section). One consistent system is voice; one on every heading is AI scaffolding.

### Inputs and Fields

Used in the contact form and any future form surfaces.

- **Style:** Surface Slate background, Border Subtle stroke (1px), rounded (8px, `{rounded.sm}`)
- **Focus:** Border shifts to Signal Indigo (`border-color: #6366f1`). No glow — the focus ring on the outside (`outline: 2px solid rgba(99,102,241,0.4)`) is the sole focus signal.
- **Placeholder:** Ink Muted (`#475569`) — contrast is 4.5:1 only against Void Black. On Surface Slate, use Ink Secondary (`#94a3b8`) for placeholder text instead.
- **Error:** Border shifts to a warm error red (`#ef4444`). Error message below the field in 0.875rem, same error red, weight 500.

### Navigation

Fixed header, transparent at rest, tonal-blur on scroll.

- **At rest:** Transparent background; no bottom border.
- **Scrolled:** `background: rgba(6,6,14,0.9); backdrop-filter: blur(12px); border-bottom: 1px solid #1e1e35`.
- **Nav links:** Label weight (500), 0.875rem, Ink Secondary. On hover: Ink Primary (`#f1f5f9`). Transition: `color 0.15s ease-out`.
- **Active/current page:** Ink Primary, no underline, no other indicator. The typography weight distinction is sufficient.
- **Mobile:** Full-width drawer, Surface background, stacked links at body size.

## 6. Do's and Don'ts

### Do:
- **Do** use Signal Indigo (`#6366f1`) on ≤10% of any screen surface. Its rarity is its meaning.
- **Do** use the tonal background stack (`bg-void` → `bg-depth` → `surface`) to create depth without shadows.
- **Do** apply the Hover Glow (`0 0 30px rgba(99,102,241,0.15)`) only at interactive card hover — never at rest.
- **Do** write button labels as verb + object: "Start a project", "View case studies", "Discuss your engagement". Never "Submit" or "Click here".
- **Do** cap body line length at 65–75ch using `max-width` on text containers.
- **Do** use `text-wrap: balance` on Display and Headline, `text-wrap: pretty` on Body prose.
- **Do** distinguish the recommended card tier with `border-top: 3px solid #6366f1`, not a side-stripe border.
- **Do** test Ink Secondary (`#94a3b8`) contrast before using: it passes 4.5:1 only against Surface Slate and deeper.
- **Do** use Geist Mono exclusively for code-shaped content (inline code, stack labels where mono is semantically correct). Never for style.
- **Do** respect `prefers-reduced-motion`: every transition must have an instant-swap alternative.

### Don't:
- **Don't** use `background-clip: text` with any gradient. Gradient text is absolutely forbidden. This is the single most identifiable AI-slop pattern on the current site.
- **Don't** use the current `linear-gradient(135deg, #6366f1, #4f46e5)` button background. Solid Signal Indigo only.
- **Don't** put a small uppercase tracked eyebrow pill above every section heading. One deliberate badge is voice; one on every heading is AI grammar — the exact pattern this site explicitly rejects.
- **Don't** use the hero-metric template: large numbers (`200+`, `50+`, `8+`) with small labels and gradient tints. It is the first-order training-data reflex for "tech agency" and this site exists to avoid that.
- **Don't** build identical card grids (same-sized cards with icon + heading + body text, repeated without visual variation). Services, testimonials, and blog posts must differentiate cards by emphasis, not just content.
- **Don't** use a particle canvas or animated background field as a hero backdrop. It is a signature of the AI-generated SaaS landing page aesthetic this site explicitly rejects.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored card accent (side-stripe). Use a top-border accent or background tint instead.
- **Don't** use Ink Muted (`#475569`) for body copy or meaningful descriptive text. It fails 4.5:1 contrast on Surface Slate.
- **Don't** place ambient `box-shadow` on cards or sections at rest. Shadows appear only at hover/focus.
- **Don't** add a second typeface family as a display font. One family, committed weight contrast. Two similar sans-serifs are indistinguishable and read as indecision.
- **Don't** build glassmorphism panels (`backdrop-filter: blur` + semi-transparent bg) as the default card pattern. It is decorative, not functional, and reads as atmosphere-over-substance.
