# VChemLab

A browser-based virtual chemistry laboratory for students from Class 9 through Postgraduate level. No installations, no dependencies — open `index.html` and it works.

**[Live Demo](https://sdeepak-dev.github.io/vchemlab)**

---

## What it does

VChemLab gives students a structured way to explore chemistry without physical lab access. It covers guided experiments with theory and procedures, apparatus references, quizzes, and a full periodic table — all tracked per user through localStorage.

---

## Features

- 40 guided experiments across four academic levels (Class 9–10, 11–12, Undergraduate, Postgraduate)
- Difficulty ratings: Beginner, Intermediate, Advanced, Expert
- Per-experiment quizzes with scoring
- Interactive periodic table — all 118 elements with atomic data
- 20 apparatus guides with usage notes and safety information
- XP-based progress tracking across experiments and quizzes
- User accounts via localStorage (register, login, persist progress)
- Dark and light theme, persisted across sessions
- Search and filter across all experiments
- Fully responsive — works on mobile and desktop

---

## Getting started

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME
```

Open `index.html` in any browser. That's it.

No package manager. No build step. No server required.

---

## Tech

Built entirely with vanilla HTML, CSS, and JavaScript.

- CSS custom properties for theming
- CSS Grid and Flexbox for layout
- Vanilla JS for routing, quiz engine, and all data logic
- localStorage for user auth and progress persistence
- SVG for all illustrations and animations
- Google Fonts (Outfit) — the only external resource

---

## Project structure

```
virtual-chemistry-lab/
├── index.html       — entire application
└── README.md
```

Single-file architecture. Everything lives in `index.html` — styles, scripts, and markup. Not ideal for a large production app, but intentional here to keep it dependency-free and instantly shareable.

---

## Roadmap

- Reaction simulation animations
- Hamburger menu for mobile navigation
- PDF export of progress report
- PWA support for offline use

---

## Author

S Deepak — B.Sc. Computer Science, VIT Vellore

[GitHub](https://github.com/sdeepak-dev) · [LinkedIn](https://www.linkedin.com/in/deepak-s-a39147403)
