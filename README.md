# Bali Sai Praveen: Portfolio

Personal portfolio built with TypeScript and Vite (no framework).

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build into dist/
```

## Make it yours

- **All content** lives in `src/data.ts` (typed by `src/types.ts`). Edit text there, not in the HTML.
- **Photo:** put your picture at `public/images/me.jpg`. Until then, your initials show.
- **Resume:** replace `public/assets/resume.pdf` to update the Resume button.
- **Colours and fonts:** the design tokens are at the top of `src/style.css`.

## Deploy to GitHub Pages

1. Push this project to a GitHub repo (branch `main`).
2. In the repo go to Settings > Pages and set Source to **GitHub Actions**.
3. Every push to `main` builds and publishes the site (`.github/workflows/deploy.yml`).
