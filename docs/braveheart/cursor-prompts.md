# Brave Heart Cursor Prompts

## Prompt 1: Repo Inspection Only

```text
Inspect only. Do not modify application code.

This repo was cloned from a working React/Vite/Tailwind listing website. Preserve the existing app shell, routing approach, shared components, responsive behavior, navbar/footer/modal patterns, and CSS/Tailwind architecture unless a change is explicitly required.

Read README.md, PRD.md, CLAUDE.md, PROGRESS.md, package.json, src/App.*, src/components/*, src/pages/*, and src/index.css.

Create .agent/notes/00.repo-and-source-inspection.md with:
1. Current repo structure.
2. Current route structure.
3. Reusable components to preserve.
4. Current style/token system.
5. Files safe to edit.
6. Files not to edit yet.
7. Risks and unknowns.
8. Recommended phased conversion plan.

Do not implement code.
```

## Prompt 2: Image Intake

```text
Inspect new images in public/assets/images/braveheart/inbox/.
Do not change React code yet.

For each image:
1. Identify filename, dimensions, format, and file size.
2. Convert to optimized WebP preserving dimensions.
3. Use lowercase kebab-case filenames.
4. Save converted files into public/assets/images/braveheart/.
5. Keep originals in inbox until approval.
6. Update docs/braveheart/asset-inventory.md.
7. Recommend page and section placement.
8. Identify duplicates or near-duplicates.
```

## Prompt 3: New Content Drafts

```text
Review new drafts in docs/braveheart/content-drafts/.
Do not change React code yet.

For each draft:
1. Recommend target page.
2. Recommend exact placement.
3. Recommend heading.
4. Classify content type.
5. Recommend matching image from asset-inventory.md.
6. Update content-map.md with proposed placement.
7. Flag legal/compliance-sensitive claims.
```
