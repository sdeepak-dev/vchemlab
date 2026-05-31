# VChemLab — Virtual Chemistry Laboratory

> A browser-based virtual chemistry lab for students from Class 9 to Postgraduate level.  
> No installations. No dependencies. Open `index.html` and it works.

**[🔬 Live Demo → sdeepak-dev.github.io/vchemlab](https://sdeepak-dev.github.io/vchemlab)**

---

## Screenshots

> *(Add 2–3 screenshots here. Drag and drop images directly into this file on GitHub.)*  
> Suggested shots: Home page, an experiment page, the periodic table, the progress tracker.

---

## What It Does

VChemLab gives students a structured way to explore chemistry without needing physical lab access. It covers:

- Guided experiments with objectives, theory, materials, and procedures
- An interactive periodic table with data on all 118 elements
- Per-experiment quizzes with XP-based scoring
- Apparatus references with safety notes
- Personal progress tracking across experiments and quizzes

---

## Features

| Feature | Details |
|---|---|
| 🧪 Experiments | 40 guided labs across Class 9–10, 11–12, Undergraduate, and Postgraduate |
| 🔬 Apparatus | 20 instruments with usage guides and safety information |
| ⚛️ Periodic Table | All 118 elements with atomic data, categories, and filters |
| 📝 Quizzes | Per-experiment quizzes with difficulty ratings (Beginner → Expert) |
| 🏆 Progress Tracking | XP system tracking completed experiments and quiz scores |
| 👤 User Accounts | Register, log in, and persist progress via localStorage |
| 🌗 Theming | Dark and light mode, persisted across sessions |
| 📱 Responsive | Fully functional on mobile and desktop |
| ⚡ Zero Dependencies | No npm, no build step, no external libraries |

---

## Getting Started

```bash
git clone https://github.com/sdeepak-dev/vchemlab.git
cd vchemlab
```

Open `index.html` in any browser. That's it.

No package manager. No build step. No server required.

---

## Tech Stack

Built entirely with vanilla HTML, CSS, and JavaScript.

- **CSS custom properties** for theming and dark/light mode
- **CSS Grid and Flexbox** for responsive layout
- **Vanilla JS** for routing, quiz engine, XP logic, and all data handling
- **localStorage** for user authentication and progress persistence
- **SVG** for illustrations and animations
- **Google Fonts (Outfit)** — the only external resource

---

## Project Structure

```
vchemlab/
├── index.html     ← entire application (styles, scripts, markup)
└── README.md
```

**Single-file architecture** — intentional. Keeping everything in one `index.html` makes the project dependency-free, instantly shareable, and deployable anywhere without a build step. Not suitable for a large production app, but the right tradeoff here.

---

## Roadmap

- [ ] Reaction simulation animations (colour change, bubble effects)
- [ ] Hamburger menu for mobile navigation
- [ ] PDF export of progress report
- [ ] PWA support for offline use

---

## Author

**S Deepak** — B.Sc. Computer Science, VIT Vellore (2024–2028)

[![GitHub](https://img.shields.io/badge/GitHub-sdeepak--dev-181717?style=flat&logo=github)](https://github.com/sdeepak-dev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Deepak%20S-0A66C2?style=flat&logo=linkedin)](https://www.linkedin.com/in/deepak-s-a39147403)

---

## License

This project is open source and available under the [MIT License](LICENSE).
