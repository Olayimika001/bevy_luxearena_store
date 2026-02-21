# Deploying this app on Cloudflare Pages

This project uses **npm** only (no pnpm). Use these settings so the build succeeds.

## Build configuration

1. **Root directory**
   - If this app lives in a **subfolder** of the repo (e.g. `bagsio-clone`), set **Root directory** in Cloudflare to that folder.
   - If the repo contains **only** this Vue app (all files at repo root), leave Root directory **empty**.

2. **Build settings**
   - **Framework preset:** None (or Vite)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`

3. **Node**
   - Use Node 18 or 20. This repo includes `.nvmrc` with `20` if your environment supports it.

## If you see a pnpm / lockfile error

- The error means Cloudflare is using **pnpm** and a lockfile that doesn’t match this app.
- Fix: set **Root directory** to the folder that has **only** this Vue app (this project’s `package.json` has no React/Next/Radix).
- Ensure there is **no** `pnpm-lock.yaml` in that root (this project uses `package-lock.json` only).
- In Cloudflare, you can try **Clear cache and retry** after changing the root.
