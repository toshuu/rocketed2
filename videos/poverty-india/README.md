# Poverty in India — HyperFrames video

A 30-second, 1920×1080 motion-graphics explainer created with HyperFrames, HTML/CSS, and GSAP.

## Render locally

Requirements: Node.js 22+ and FFmpeg.

```bash
cd videos/poverty-india
npx hyperframes doctor
npx hyperframes lint
npx hyperframes render --output poverty-in-india.mp4 --fps 30 --quality standard
```

The GitHub Actions workflow `.github/workflows/render-poverty-india.yml` installs the runtime, checks the composition, renders the MP4, and uploads it as the `poverty-in-india-video` artifact.

## Data notes

The video uses World Bank estimates published in the April 2026 India Development Update:
- Poverty at the $4.20/day (2021 PPP) lower-middle-income line: 57.7% in 2011–12 and 16.1% in 2023–24.
- Extreme poverty at the $3.00/day (2021 PPP) line: 27.1% in 2011–12 and 2.6% in 2023–24.

These are survey-based estimates and depend on the poverty line and survey methodology. They are not live counts.

Source: https://thedocs.worldbank.org/en/doc/4262e1e15b463ecb360cec4ad78cf062-0310012026/original/April-2026-India-Development-Update.pdf
