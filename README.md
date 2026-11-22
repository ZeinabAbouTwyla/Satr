# سطر — Satr

A code-themed, fully frontend programming-education platform demo. Built as a personal showcase.

## Pages

- `index.html` — hero with live terminal card, code-rain canvas background, tracks grid, "made by a programmer" story, how-it-works steps.
- `courses.html` — full catalog: filter chips per track (.NET / Java / Node.js / Python / C++) plus text search, course cards with computed lesson counts and durations.
- `course.html` — course detail: collapsible syllabus units, syntax-highlighted runnable sample with copy button, totals computed from the real curriculum data.
- `playground.html` — in-browser JavaScript playground: editor with ready-made snippets, Run (also Ctrl/Cmd+Enter), console output with warnings/errors, code persisted in localStorage.
- `credits.html` — sources and licensing.

## Features

- Arabic-first (general-audience copy) with an English toggle; full RTL/LTR flip.
- Persisted light/dark theme and language (localStorage).
- Code-rain canvas background: ~20fps, reduced column count on small screens, pauses when the tab is hidden, fully static under `prefers-reduced-motion`.
- Local fonts (Cairo, IBM Plex Sans Arabic, JetBrains Mono — woff2, SIL OFL) so the site works offline.
- Track covers are SVG illustrations generated in code; no photographs.
- Responsive from 320px up; no horizontal overflow.

## Tech

Pure HTML + CSS + JavaScript. No build step, no server, no dependencies. Open `index.html` in a browser or serve the folder with any static server.

State (theme, language, playground code) is stored only in the visitor's browser via localStorage.

## Fonts

All fonts are open source from Google Fonts under the SIL Open Font License 1.1 (see `assets/fonts/OFL.txt`), bundled locally.

## License

Code and content © Zaynab Abu Twyla.

Made by Zaynab Abu Twyla — https://www.linkedin.com/in/zaynab-aboutwylah-b71a79314
