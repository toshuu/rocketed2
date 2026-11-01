# REST API — Blueboard Explainer

A 60-second, 1080×1920, 30 fps illustrated whiteboard-style explainer with a blue-ink palette. Built as a HyperFrames HTML composition using SVG illustrations, CSS, and GSAP stroke-draw / reveal animations.

## Render
Requires Node.js 22+ and FFmpeg.

```bash
npx hyperframes doctor
npx hyperframes lint
npx hyperframes render --output rest-api-blueboard.mp4 --fps 30 --quality standard
```

The GitHub Actions workflow `.github/workflows/render-rest-api-blueboard.yml` checks and renders the MP4, then uploads it as `rest-api-blueboard-video`.

## Covered
- What an API is, and REST as an architectural style
- Resources and endpoints
- HTTP methods: GET, POST, PUT, PATCH, DELETE
- Request components and a sample GET
- Server-side routing, validation, business logic, and database access
- JSON responses and HTTP status codes
- A practical order-creation flow
- Authentication, authorization, validation, and HTTPS

Editorial note: the animation is caption-led, with no voiceover or music track. The examples are illustrative, not a claim that every REST API must use JSON or implement exactly these endpoints.
