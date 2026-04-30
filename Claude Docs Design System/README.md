# Claude Docs — Design System

Interactive web guide for optimizing Claude Code usage. Deployed at https://generic-ia-docs.netlify.app/

## Sources

- **Codebase (local):** `claude-docs/` — React 18 + TypeScript + Vite 6 + Tailwind CSS v4 + shadcn/ui + React Router v7
- **GitHub repo:** https://github.com/Caio-mizuno/claude-docs
- **Live site:** https://generic-ia-docs.netlify.app/

---

## Product Overview

A single-page application (SPA) with a fixed 240px sidebar and 10 main routes. The product is a **documentation/guide web app** targeted at developers using Claude Code. Written in Brazilian Portuguese. The sidebar provides quick navigation between sections; content renders in a `max-w-5xl` centered main area.

### Routes
| Route | Content |
|---|---|
| `/` | Visão Geral — principles + quick wins |
| `/recommendations` | Recommended workflows |
| `/prompts` | Prompting techniques + examples |
| `/context` | Context management + token reduction |
| `/structure` | CLAUDE.md + best practices |
| `/agents` | Available agents + usage |
| `/skills` | Skills + examples |
| `/plugins` | Plugins + extensions |
| `/rag` | RAG + advanced techniques |
| `/advanced` | Pro techniques + performance |

---

## Content Fundamentals

**Language:** Brazilian Portuguese throughout. Technical terms (Claude Code, CLAUDE.md, RTK, Caveman, etc.) remain in English.

**Tone:** Direct, practical, developer-focused. No fluff. Imperative voice in tips ("Use seleção de código", "Feche conversas longas"). Reads like advice from a senior dev.

**Casing:** Sentence case for headings. Technical names in their original casing (Claude Code, RTK, CodeRabbit).

**Emoji:** Used sparingly as bullet icons inside content (❌, ✅, 🔥, 💰, ⚡) — not decorative, always functional signifiers (error/success/impact).

**Numbers rule:** Specificity drives trust. Savings are always quantified: "60-90% economia de tokens", "16x mais barato", "-70%". Always use concrete ranges over vague claims.

**Copy vibe:** Concise, opinionated, achievement-oriented. Every piece of content promises a measurable benefit.

**Examples:**
- "Economize até **70%** em custos"
- "Use comandos imperativos curtos: 'Adicione validação' vs 'Por favor, você poderia...'"
- "Total: ~500 tokens"

---

## Visual Foundations

### Colors
- **Primary accent:** Purple (`purple-600` = `#9333ea`) — brand color for icons, active nav states, CTAs, highlights
- **Backgrounds:** `slate-50` (#f8fafc) for page; `white` for cards/sidebar
- **Text:** `slate-900` for headings, `slate-600` for body, `slate-400` for muted/metadata
- **Success/positive:** Green (`green-50/200/600/700`) — used for metrics, quick wins, success states
- **Info/neutral:** Blue (`blue-50/200/600/700`) — used for strategies, info callouts
- **Warning/cost:** Yellow/Amber (`yellow-50/200/600/700`) — cost-related metrics
- **Error/avoid:** Red (`red-50/200/600/700`) — "don't do this" patterns
- **Code blocks:** `slate-900` bg with `green-400` text — dark terminal aesthetic

### Typography
- **Font stack:** System default (no custom webfonts defined — browser system-ui/sans-serif via Tailwind)
- **Base size:** 16px
- **h1:** 2xl (1.5rem), font-weight 500
- **h2:** xl (1.25rem), font-weight 500
- **h3:** lg (1.125rem), font-weight 500
- **Body/label/button:** base (1rem), weight 400–500
- **Line height:** 1.5 throughout
- **Code inline:** `bg-slate-100 px-1.5 py-0.5 rounded text-xs` — light gray pill

### Cards
- `bg-white` background, `border border-slate-200` (1px rgba(0,0,0,0.1))
- Border radius: `0.625rem` (10px)
- Padding: CardHeader `pb-3`, CardContent standard
- Tinted variants: `bg-purple-50/50 border-purple-200`, `bg-green-50 border-green-200`, etc.
- No drop shadows (flat card style) — distinction via border and tinted background

### Layout
- Sidebar: 240px fixed, `bg-white`, right border `slate-200`
- Main content: `max-w-5xl mx-auto p-4 md:p-6`
- Grid: `grid-cols-1 md:grid-cols-3` for metric cards; `grid-cols-1 md:grid-cols-2` for comparisons
- Gap: `gap-4` standard

### Spacing & Radius
- Standard radius: `0.625rem` (rounded-lg)
- Sm radius: `0.375rem` (rounded-md)
- Sidebar nav item padding: `px-3 py-2.5`
- Code block padding: `p-4`

### Backgrounds / Surfaces
- No images, illustrations, or gradients on the page itself
- Tinted card backgrounds use light color washes (e.g. `from-green-50 to-emerald-50`) — subtle, never saturated
- Dark code blocks (`bg-slate-900`) are the only truly dark surface

### Animation / Interaction
- Sidebar slide-in transition: `duration-300 ease-in-out` (translate)
- Nav hover: `hover:bg-slate-50 hover:text-slate-900` — color shift, no scale/shadow
- Active nav: `bg-purple-50 text-purple-700` — tinted background + brand color
- No complex animations; micro-interactions only via Tailwind `transition-colors`

### Iconography
- **Library:** Lucide React exclusively (lucide-react@0.487.0)
- **Style:** Outline/stroke, weight consistent with Lucide defaults (~1.5px stroke)
- **Size pattern:** `w-4 h-4` in nav; `w-5 h-5` in section headings/card icons; `w-6 h-6` in feature callouts; `w-8 h-8` in main header
- **Color:** Matches context — `text-purple-600` for brand icons, `text-slate-400` for inactive nav, `text-green-600` / `text-blue-600` / etc. for semantic icons
- No custom SVGs, no icon fonts, no PNG icons — 100% Lucide

### Shadows / Borders
- Cards: flat border only (`border border-slate-200`), no box-shadow
- Inputs: no visible border by default (`--input: transparent`)
- Focus ring: `ring` from Tailwind, `oklch(0.708 0 0)`

### Hover/Press States
- Background tint on hover (lightest gray: `slate-50`, `slate-100`)
- Text darkens (slate-600 → slate-900)
- No scale transforms, no shadow lift

---

## Iconography

Lucide React is the sole icon system. Icons are always inline SVG (no sprite, no font). CDN available via `https://unpkg.com/lucide@latest`. Key icons used:

- `Sparkles` — Claude Code brand mark (sidebar logo, header)
- `LayoutDashboard`, `MessageSquare`, `Layers`, `FolderOpen`, `Bot`, `Wrench`, `Rocket`, `Database`, `Puzzle`, `Star` — navigation
- `CheckCircle2`, `XCircle` — success / error states
- `Gauge`, `TrendingDown`, `DollarSign` — metrics
- `Lightbulb`, `Target`, `Zap`, `FileCode` — principles

No emoji in navigation or hero elements. Emoji appear only as inline content markers in body copy (❌ ✅ 🔥).

---

## File Index

```
README.md                  ← this file
SKILL.md                   ← skill definition for Claude Code agents
colors_and_type.css        ← CSS custom properties: colors, type scale, tokens
assets/                    ← logos, icons (none currently — Lucide CDN only)
preview/                   ← design system card HTML files
  colors-brand.html
  colors-semantic.html
  colors-code.html
  type-scale.html
  type-ui.html
  spacing-radius.html
  spacing-tokens.html
  components-cards.html
  components-badges.html
  components-nav.html
  components-code.html
  components-buttons.html
ui_kits/
  claude-docs/
    README.md
    index.html             ← interactive SPA prototype
    Sidebar.jsx
    Cards.jsx
    CodeBlock.jsx
    PageLayouts.jsx
```
