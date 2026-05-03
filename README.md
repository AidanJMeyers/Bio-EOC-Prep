# Biology EOC Prep — Interactive Study Dashboard

A comprehensive review dashboard for the Florida Biology End-of-Course (EOC) Assessment, covering all reporting categories, benchmarks, and standards.

**Live site:** https://aidanjmeyers.github.io/Bio-EOC-Prep/

## Coverage

10 chapters aligned with the FL DOE Biology 1 EOC reporting categories:

1. **Nature of Science** — scientific method, hypothesis, theory vs. law (SC.912.N.1.1, L.14.1)
2. **Biochemistry** — water, macromolecules, enzymes (SC.912.L.18.1, L.18.11, L.18.12)
3. **Cell Structure & Transport** — organelles, membranes, homeostasis (SC.912.L.14.1–14.3)
4. **Photosynthesis & Cellular Respiration** — energy in cells (SC.912.L.18.7–18.10)
5. **Cell Cycle: Mitosis & Meiosis** — division, regulation (SC.912.L.16.14–16.17)
6. **DNA, RNA & Protein Synthesis** — replication, transcription, translation (SC.912.L.16.3–16.5, L.16.9)
7. **Genetics & Heredity** — Mendelian inheritance, Punnett squares, pedigrees (SC.912.L.16.1–16.2)
8. **Evolution & Classification** — natural selection, speciation, taxonomy (SC.912.L.15.1, L.15.6, L.15.13–15.15)
9. **Ecology & Ecosystems** — food webs, populations, biodiversity (SC.912.L.17.5, L.17.9, L.17.20)
10. **Human Body Systems** — organ systems, immunity, reproduction (SC.912.L.14.36, L.14.52, L.16.13)

## Features

- **Multiple-choice only** — every question is 4-option MCQ
- **Image-rich** — 60%+ of questions include a visual aid (diagram, food web, Punnett square, etc.)
- **Application style** — emphasis on experimental scenarios and applied reasoning
- **Per-block progress** — reviewed checkbox + 1–5 confidence slider + sticky notes
- **Practice exam** — proportional question distribution by chapter, running score, breakdown
- **Review Later** — every note auto-aggregated into a single review tab
- **Responsive** — works on phone, tablet, and desktop
- **Persistent** — progress saved via window.storage / localStorage

## Local development

```bash
npm install
npm run dev      # http://localhost:5173/Bio-EOC-Prep/
npm run build    # production build to dist/
```

## Source materials

Built from official FL DOE practice tests, the Biology 1 EOC test design summary, the official Biology 1 EOC item specifications, and Honors Biology unit study guides.
