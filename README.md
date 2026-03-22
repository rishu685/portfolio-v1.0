# Rishabh Mishra — Portfolio

Full Stack Developer portfolio built with **React + Vite + Tailwind CSS**.

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
```

Output goes to `/dist`.

---

## Deploy to Vercel (3 steps)

### Option A — Vercel CLI (fastest)

```bash
npm install -g vercel
vercel
```

Follow the prompts. Done — live in ~30 seconds.

### Option B — GitHub + Vercel Dashboard

1. Push this folder to a GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "init portfolio"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your GitHub repo

3. Vercel auto-detects Vite. Click **Deploy**. Done.

### Option C — Drag & Drop

1. Run `npm run build`
2. Go to [vercel.com/new](https://vercel.com/new)
3. Drag the `dist/` folder into the browser. Live instantly.

---

## Project Structure

```
tanishk-vercel/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx          # Entry point
    ├── App.jsx           # Root component
    ├── index.css         # Tailwind + custom CSS
    ├── data.js           # All content data
    ├── hooks.js          # useInView, useCounter
    └── components/
        ├── Nav.jsx
        ├── Hero.jsx
        ├── Ticker.jsx
        ├── StatsBar.jsx
        ├── Services.jsx
        ├── Projects.jsx
        ├── LiveFeed.jsx
        ├── Experience.jsx
        ├── FAQ.jsx
        ├── CTA.jsx
        └── Footer.jsx
```

## Customisation

All content lives in `src/data.js` — edit your projects, services, experience, and FAQ there without touching any component files.
