# سطر — Satr

A code-themed, fully frontend programming-education platform demo. Built as a personal showcase.

## Pages

- `index.html` — hero with live terminal card, code-rain canvas background, tracks grid, "made by a programmer" story, how-it-works steps.
- `courses.html` — full catalog: filter chips per track (.NET / Java / Node.js / Python / C++) plus text search, course cards with computed lesson counts, durations, and live progress bars.
- `course.html` — course detail: overall progress bar, collapsible syllabus units where every lesson links to its lesson page, sequential unlocking (each lesson opens after the previous one is complete), syntax-highlighted runnable sample with copy button.
- `lesson.html` — lesson page: video player with real watch tracking (completion measured from actual playback time, done at 90%), resume from last position, previous/next navigation with next-lesson gating, and the full course lesson list with per-lesson state.
- `playground.html` — in-browser JavaScript playground: editor with ready-made snippets, Run (also Ctrl/Cmd+Enter), console output with warnings/errors, code persisted in localStorage.
- `credits.html` — fonts licensing and demo note.

## Learning flow

Track → courses → course → lessons → video. Progress is measured from actual watch time per lesson and stored in the visitor's browser (localStorage, `satr_prog`); there is no account sync in this demo. The next lesson in a course unlocks only after the current one is complete.

## Demo media

Each track has a short programmatically generated terminal-style clip (`assets/video/<track>.mp4` + poster) so the full watch-and-unlock journey works end to end. Replace them with real lesson videos when using this as a template.

## Features

- Arabic-first (general-audience copy) with an English toggle; full RTL/LTR flip.
- Persisted light/dark theme and language (localStorage), applied before first paint to avoid flashes.
- Code-rain canvas background: ~20fps, reduced column count on small screens, pauses when the tab is hidden, fully static under `prefers-reduced-motion`.
- Local fonts (Cairo, IBM Plex Sans Arabic, JetBrains Mono — woff2, SIL OFL) so the site works offline.
- Track covers are SVG illustrations generated in code; no photographs.
- Responsive from 320px up; no horizontal overflow.

## Tech

Pure HTML + CSS + JavaScript. No build step, no server, no dependencies. Open `index.html` in a browser or serve the folder with any static server.

State (theme, language, playground code, lesson progress) is stored only in the visitor's browser via localStorage.

## Fonts

All fonts are open source from Google Fonts under the SIL Open Font License 1.1 (see `assets/fonts/OFL.txt`), bundled locally.

## License

Code and content © Zaynab Abu Twyla.

Made by Zaynab Abu Twyla — https://www.linkedin.com/in/zaynab-aboutwylah-b71a79314
