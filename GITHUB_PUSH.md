# GitHub and deploy checklist

## Which repo are you pushing to?

This project's remote is set to:
- **origin:** `https://github.com/Olayimika001/bevy_luxearena_store.git`

If you use **another repo** (e.g. `bevy_luxearena_shop` for Vercel), that repo will not show these changes until you push this code there.

## Make sure GitHub shows the latest code

1. **Confirm you're on the right repo**
   - In the browser, open: https://github.com/Olayimika001/bevy_luxearena_store
   - If you deploy from a different repo (e.g. `bevy_luxearena_shop`), either:
     - Push this repo to that one (add that repo as a second remote and push), or
     - Point Vercel/Cloudflare to **bevy_luxearena_store** as the source.

2. **Push from the project folder**
   - Open a terminal in `bagsio-clone` (this folder), then:
   ```bash
   cd c:\bevy-luxearena\bagsio-clone
   git status
   git push origin main
   ```

3. **If GitHub still doesn’t show `src/assets`**
   - Hard refresh the repo page (Ctrl+F5).
   - Open the latest commit (e.g. "changed logo path") and confirm `src/assets/Logo.png` is in the file list.
   - If you want to force-update the remote: `git push origin main --force` (only if you’re sure no one else depends on the current history).

## One repo for both store and deploy

To have both “store” and “shop” in sync, either:
- Use **one** GitHub repo for this app and connect both Vercel and any other service to that repo, or
- Add the second repo as a remote and push the same branch to both:
  ```bash
  git remote add shop https://github.com/Olayimika001/bevy_luxearena_shop.git
  git push shop main
  ```
