# Deploying to Cloudflare Pages

This project uses **npm** (not pnpm). If the build fails with a pnpm lockfile error, do the following.

## 1. Set the root directory (important)

If your GitHub repo contains multiple projects (e.g. a monorepo):

- In Cloudflare Pages: **Settings** → **Builds & deployments** → **Build configuration**.
- Set **Root directory** to `bagsio-clone` (or the folder that contains this project).
- This makes Cloudflare run the build inside this folder, where only `package-lock.json` exists, so it will use npm.

## 2. Build settings

- **Framework preset:** None (or Vue if available).
- **Build command:** `npm run build`
- **Build output directory:** `dist`

## 3. Remove pnpm lockfile from the repo (if the error persists)

If a `pnpm-lock.yaml` file exists in your repo (at the root or in this folder):

- Delete it from the repo and commit. This project uses only `package-lock.json`.
- Redeploy.

## 4. Environment variables (optional)

- **NODE_VERSION:** `20` (in Cloudflare **Settings** → **Environment variables** if you need a specific Node version).
