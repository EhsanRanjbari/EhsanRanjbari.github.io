---
name: Resume site design decisions
description: Color palette, fonts, layout approach, and CSS architecture for the new dark-themed minimal resume site (v2, built from scratch 2026-03-23)
type: project
---

Complete rewrite of the resume site — old "Global" template replaced with a custom-built single-file dark-mode portfolio.

**Why:** User wanted a modern, minimalistic, futuristic design (Apple/Tesla/GitHub aesthetic) replacing the jQuery-based template.

**How to apply:**
- Single file: index.html with all CSS and JS embedded (no external stylesheets or scripts)
- Color palette via CSS custom properties: --bg #0a0a0a, --surface #111111, --border #1a1a1a, --text-primary #ededed, --text-secondary #888888, --accent #00e5ff (cyan), --accent-hover #00b8d4
- Light mode toggle stores preference in localStorage; light vars: --bg #f5f5f5, --surface #ffffff, --border #e0e0e0
- Font: Inter from Google Fonts (weights 300-700), loaded via link tag
- Layout: CSS Grid + Flexbox, max-width 1120px, mobile-first with breakpoints at 480px, 768px, 1024px
- Sections: Hero (full viewport), About, Experience (vertical timeline), Projects (2-col card grid), Skills (3-col tag groups), Education, Publication, Contact, Footer
- Animations: IntersectionObserver fade-in, CSS conic-gradient glow ring on hero photo, navbar blur-backdrop on scroll, hover lifts on cards
- Photo: Ehsan.png in repo root, displayed as circular with animated glow ring
- Mobile: hamburger menu with slide-in overlay panel, all grid layouts collapse to single column
- Print styles: forces white background, hides nav/decorative elements, page-break-inside avoid on cards
- No external JS libraries — vanilla JS only (theme toggle, scroll spy, mobile menu, IntersectionObserver)
