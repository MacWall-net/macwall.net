# macwall.net

Website for MacWall, built with Astro and deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`. Pages ship no JavaScript, cookies, analytics or trackers.

## URLs (as entered in App Store Connect)

| Field | URL | Source |
|---|---|---|
| Marketing URL | https://macwall.net/ | `src/pages/index.astro` |
| Support URL | https://macwall.net/support/ | `src/pages/support/index.astro` |
| Privacy Policy URL | https://macwall.net/privacy/ | `src/pages/privacy/index.astro` |

Shared header and footer are in `src/layouts/Layout.astro`. Styles (light and dark mode via `prefers-color-scheme`), the favicon and screenshots are static files in `public/`. The screenshots are 1600px JPEG copies of the MacWall repo's `marketing/screenshots/public/screenshots/apple/mac/en/`.

Internal links go through `url()` in `src/url.ts`, so they keep working in preview builds served under `/preview/<branch>` (`BASE_PATH`).

## Develop

```bash
npm ci
npm run dev
```

`npm run build` writes the static site to `dist/`, with directory-style `index.html` files so `/support/` and `/privacy/` need no rewrites.

## Custom domain

The deploy workflow uses GitHub Actions for Pages, so the custom domain is set in the repository's Settings > Pages (no `CNAME` file needed). Point macwall.net's DNS at GitHub Pages and enable "Enforce HTTPS".

## Before launch

- Replace the two `#app-store` placeholder links in `src/pages/index.astro` (marked `TODO`) with the Mac App Store URL.
- The support page lists macOS 14.0 as the minimum. MacWall's `MACOSX_DEPLOYMENT_TARGET` must be lowered to 14.0 to match before release.
- If the app's data handling changes, update the privacy page and its effective date.
