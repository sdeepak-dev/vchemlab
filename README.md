# VChemLab — Virtual Chemistry Laboratory

> A browser-based virtual chemistry lab for students from Class 9 to Postgraduate level.  
> No installations. No dependencies. Open `index.html` and it works.

**[🔬 Live Demo → sdeepak-dev.github.io/vchemlab](https://sdeepak-dev.github.io/vchemlab)**

---

## Screenshots

<img width="1919" height="1033" alt="VChemLab Home" src="https://github.com/user-attachments/assets/3627ce2e-ffab-49ae-8a1a-8280c7aa840a" />
<img width="1918" height="977" alt="Screenshot 2026-06-27 201219" src="https://github.com/user-attachments/assets/a07e568b-12b7-4a13-aaad-390bb28b73ef" />
<img width="1919" height="1010" alt="VChemLab Experiments" src="https://github.com/user-attachments/assets/d7092815-f5e2-488b-a6cc-6f3efe0fd9bd" />


---

## What It Does

VChemLab gives students a structured way to explore chemistry without needing physical lab access:

- Guided experiments with objectives, theory, materials, and step-by-step procedures
- Interactive periodic table with data on all 118 elements
- Per-experiment quizzes with XP-based scoring
- Apparatus references with usage guides and safety notes
- Personal progress tracking across all experiments and quizzes

---

## Features

| Feature | Details |
|---|---|
| 🧪 Experiments | 40 guided labs across Class 9–10, 11–12, Undergraduate, and Postgraduate |
| 🔬 Apparatus | 20 instruments with usage guides and safety information |
| ⚛️ Periodic Table | All 118 elements with atomic data, categories, and click-to-view details |
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

| Layer | Detail |
|---|---|
| Styling | CSS custom properties, Grid, Flexbox, CSS animations |
| Logic | Vanilla JS — routing, quiz engine, XP system, localStorage auth |
| Illustrations | Inline SVG — all apparatus diagrams and hero animations |
| Fonts | Google Fonts (Outfit) — the only external resource |

---

## Project Structure

```
vchemlab/
├── index.html          ← markup and page structure
├── style.css           ← all styles, variables, responsive rules
├── app.js              ← all data (40 experiments, 20 apparatus, 118 elements) + app logic
├── images/
│   └── experiments/    ← category banner images (c9.png, c10.png, ug.png, pg.png)
└── README.md
```

The project is intentionally split into three files — no build step, no bundler, deployable anywhere as a static site.

---

## Experiment Levels

| Level | Experiments | Difficulty |
|---|---|---|
| Class 9–10 | 10 labs | Beginner – Intermediate |
| Class 11–12 | 10 labs | Intermediate – Advanced |
| Undergraduate | 10 labs | Advanced |
| Postgraduate | 10 labs | Expert |

---

## Roadmap

- [ ] Reaction simulation animations (colour change, bubble effects)
- [ ] Hamburger menu for mobile navigation
- [ ] PDF export of progress report
- [ ] PWA support for offline use

---

## Author

**S Deepak** — B.Sc. Computer Science, VIT Vellore (2024–2027)

[![GitHub](https://img.shields.io/badge/GitHub-sdeepak--dev-181717?style=flat&logo=github)](https://github.com/sdeepak-dev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Deepak%20S-0A66C2?style=flat&logo=linkedin)](https://www.linkedin.com/in/deepak-s-a39147403)

---

## License

This project is open source and available under the [MIT License](LICENSE).
