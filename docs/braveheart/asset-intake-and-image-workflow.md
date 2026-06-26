# Brave Heart Asset Intake, Image Conversion, and SEO Image Workflow

## Purpose

Defines how new Brave Heart images are added, converted, tracked, approved, inserted, and validated.

## Raw Image Intake

Place new images here first (not served in production):

```text
assets-sources/braveheart/inbox/
```

After conversion, production WebP output is written to `public/assets/images/braveheart/`.

## Production Image Folder

Approved and optimized images live here:

```text
public/assets/images/braveheart/
```

Preferred format:

```text
.webp
```

## Conversion Rules

Cursor should convert PNG, JPG, and JPEG images to WebP.

Rules:

1. Preserve original dimensions unless resizing is specifically requested.
2. Do not upscale.
3. Use lowercase kebab-case filenames.
4. Use WebP quality 82 by default.
5. Use quality 75–80 if the image remains unnecessarily large.
6. Preserve transparency where required.
7. Keep originals in `assets-sources/braveheart/` until deletion is approved.
8. Do not wire images into React pages until inventory and placement are approved.

## Inventory Requirements

Update:

```text
docs/braveheart/asset-inventory.md
```

Each entry should include:

```text
Asset ID:
Original filename:
Production filename:
Production path:
Format:
Dimensions:
File size:
Suggested page:
Suggested section:
Alt text:
Caption:
SEO keywords:
Status:
Notes:
```

## Image SEO Requirements

Every public image must have:

- descriptive alt text;
- meaningful filename;
- width and height attributes where practical;
- lazy loading unless above the fold;
- priority loading only for primary hero image;
- no misleading keyword stuffing.

## Validation

After implementation, verify:

- file exists;
- browser loads the image;
- image is WebP unless exception approved;
- dimensions are acceptable;
- desktop and mobile layouts remain stable;
- alt text is present;
- image is recorded in asset inventory;
- placement is recorded in content map.
