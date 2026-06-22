# Brave Heart SEO and Publication Checklist

## Purpose

Defines page metadata, robots, sitemap, internal linking, and publication validation requirements.

## Required SEO Fields Per Public Page

Track in:

```text
docs/braveheart/seo-publication-map.md
```

Required fields:

```text
Route:
Canonical URL:
SEO title:
Meta description:
H1:
Primary keyword:
Secondary keywords:
Open Graph title:
Open Graph description:
Open Graph image:
Twitter/X card image:
Robots directive:
Sitemap inclusion:
Last updated date:
```

## Page-Level SEO Checks

Before publication, verify:

1. Exactly one H1 per page.
2. Logical heading order.
3. SEO title is unique.
4. Meta description is unique.
5. Canonical URL is correct.
6. Open Graph image exists.
7. Images have alt text.
8. Internal links resolve.
9. No old listing-site copy remains.
10. No accidental `noindex` on public pages.
11. Legal, privacy, terms, and accessibility pages are reachable.
12. CTA links are working or intentionally stubbed.

## robots.txt

Production:

```text
User-agent: *
Allow: /

Sitemap: https://braveheartfirstresponders.com/sitemap.xml
```

Staging:

```text
User-agent: *
Disallow: /
```

Do not apply staging robots rules to production.

## Sitemap

Minimum routes:

```text
/
/our-story
/who-we-serve
/savings-comparison
/service-lines
/our-guarantee
/case-studies
/privacy-policy
/terms-of-service
/accessibility
```

Each sitemap entry should include:

```text
loc
lastmod
changefreq
priority
```

## Publication Gate

A page is not publication-ready until route, content, image, CTA, metadata, robots, sitemap, mobile layout, and build validation pass.
