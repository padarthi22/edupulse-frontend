# EduPulse — Frontend (React + Vite + Tailwind)

Monochrome SPA for the EduPulse decision-support platform. Pairs with the
Spring Boot backend (separate repo `padarthi22/edupulse`).

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173, proxies /api → http://127.0.0.1:5050
```

For production builds, point the frontend at the deployed backend:

```bash
VITE_API_URL=https://<your-railway-backend>.up.railway.app/api \
  vercel deploy --prod
```

`lib/api.js` reads `import.meta.env.VITE_API_URL` and falls back to `/api`
(handled by the Vite dev proxy locally).

## Deploy

This repo is wired for Vercel via `vercel.json` (SPA rewrites to
`/index.html`). Connect the repo to a Vercel project, set
`VITE_API_URL` to the Railway backend URL, deploy.
