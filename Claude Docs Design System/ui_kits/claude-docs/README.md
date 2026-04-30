# Claude Docs — UI Kit

Interactive recreation of the claude-docs web guide SPA.

## Design Width
1280px desktop, responsive down to 375px mobile.

## Components
- `Sidebar.jsx` — Fixed 240px sidebar with logo, nav links, footer tagline
- `Cards.jsx` — Metric cards, content cards, quick-win items, context strategies, code blocks
- `PageLayouts.jsx` — All 10 page views (Overview, Recommendations, Prompts, Context, etc.)
- `index.html` — Main interactive prototype with routing between all pages

## Usage
Open `index.html` in a browser. Click nav items to switch between pages.

## Tech Notes
- Plain React + Babel (no build step)
- Lucide icons via CDN
- Inter font via Google Fonts
- Colors match production Tailwind theme exactly
