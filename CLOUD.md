# CLOUD.md

Operational notes for running the Brave Heart website locally, in Cursor, or in a cloud agent environment.

## Working Directory

Run all commands from the repo root:

```text
BraveHeart-website/
```

## Install Dependencies

Use the package manager already present in the cloned listing-site repo.

Common Vite install:

```bash
npm install
```

## Start Development Server

Common Vite start:

```bash
npm run dev
```

Expected local URL is usually:

```text
http://localhost:5173
```

If the cloned repo uses a different script, inspect `package.json` and use the existing command.

## Build

Common production build:

```bash
npm run build
```

## Preview

Common Vite preview:

```bash
npm run preview
```

## Windows Notes

On native Windows, prefer PowerShell or Cursor's integrated terminal.

If npm behaves strangely in Git Bash, use PowerShell:

```powershell
npm install
npm run dev
```

## Required Validation Commands

Before marking a plan complete, run the available equivalents of:

```bash
npm run build
npm run lint
```

If no lint script exists, record that in the validation report rather than inventing one.

## Image Processing

Brave Heart marketing assets are converted with Sharp:

```bash
npm run images:braveheart
```

- Reads source PNG/WebP from `public/assets/`
- Writes production WebP to `public/assets/images/braveheart/`
- Quality: 82 (default); preserves dimensions; does not delete originals
- Conversion results JSON: `scripts/.braveheart-conversion-results.json`
- Update `docs/braveheart/image-conversion-report.md` after each run

Suggested future command:

```bash
npm run images:braveheart
```

## Deployment Notes

Production deployment target is not finalized in this package. Before deployment, verify:

- production domain;
- canonical URL;
- robots.txt uses production rules;
- sitemap uses production URLs;
- CTA destinations are live or clearly staged;
- analytics/tracking policy is approved.
