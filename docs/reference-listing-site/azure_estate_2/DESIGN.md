# Design System Strategy: High-End Editorial Luxury

## 1. Overview & Creative North Star: "The Digital Curator"

This design system is built to transcend the transactional nature of real estate and move into the realm of architectural curation. Our Creative North Star is **"The Digital Curator"**—an aesthetic that mirrors a high-end coffee table book. 

We break the "template" look through **intentional asymmetry** and **tonal depth**. Instead of standard grids, we utilize generous negative space (white space is a luxury commodity) and overlapping elements where imagery "breaks" the container boundaries. This creates a layered, three-dimensional experience that feels bespoke, premium, and authoritative.

---

## 2. Colors & Surface Philosophy

The palette is a sophisticated interplay of coastal blues and warm, organic neutrals, inspired by high-end residential interiors.

### Color Tokens
- **Primary (`#365f85`):** The "Pacific" blue. Used for primary actions and focused highlights.
- **Secondary (`#855234`):** The "Walnut" tone. Used sparingly for warmth and heritage-inspired accents.
- **Surface (`#fbf9f5`):** The "Fine Linen" base. A warm off-white that prevents the sterile "tech" feel.

### The "No-Line" Rule
To maintain an editorial feel, **1px solid borders are strictly prohibited for sectioning.** Boundaries must be defined solely through background color shifts.
- Use `surface-container-low` (`#f5f3ef`) sections sitting on a `surface` (`#fbf9f5`) background to create structural definition without visual noise.

### Surface Hierarchy & Nesting
Treat the UI as physical layers. Each inner container should use a tier shift to define importance:
- **Base Level:** `surface`
- **Secondary Content:** `surface-container-low`
- **Interactive Cards:** `surface-container-lowest` (pure white) to create a subtle "pop."

### The "Glass & Gradient" Rule
For floating navigation or hero overlays, use **Glassmorphism**. Apply `surface` at 80% opacity with a `20px` backdrop-blur. For main CTAs, apply a subtle linear gradient from `primary` to `primary_container` to give the button "soul" and a slight metallic sheen.

---

## 3. Typography: The Editorial Voice

The typographic scale is designed for high-contrast legibility and rhythmic variation.

- **Display & Headlines:** *Cormorant Garamond (Light 300)*. This is our "Editorial Voice." It should be used with generous tracking (letter-spacing) to convey elegance. 
- **Body & Titles:** *Google Sans (Regular 400)*. This provides a modern, high-legibility counterpart to the serif headlines.
- **Hierarchy Logic:**
    - **Display-LG (3.5rem):** Reserved for hero titles and property names.
    - **Headline-MD (1.75rem):** Section headers.
    - **Body-LG (1rem / 18px):** Standard reading text, ensuring a premium, spacious feel.
    - **Label-MD (0.75rem):** All-caps with 0.1rem tracking for property features or metadata.

---

## 4. Elevation & Depth

We eschew traditional drop shadows for **Tonal Layering**, mimicking how light interacts with premium paper and glass.

- **The Layering Principle:** Depth is achieved by stacking tiers. A card using `surface-container-lowest` placed on a `surface-container-low` background creates a natural lift.
- **Ambient Shadows:** If a floating element (like a modal) is required, use a tinted shadow: `rgba(27, 28, 26, 0.06)` with a `40px` blur and `10px` offset. Never use pure black shadows.
- **The "Ghost Border":** For input fields or subtle containment, use the `outline-variant` token at **15% opacity**. It should be felt rather than seen.
- **Glassmorphism:** Use semi-transparent surface colors to let property photography bleed through the UI, making the interface feel integrated into the environment.

---

## 5. Components

### Buttons
- **Primary:** `primary` background with `on_primary` text. Use `ROUND_FOUR` (0.25rem) corner radius. Subtle gradient shift on hover.
- **Secondary:** `surface-container-highest` background with `primary` text. No border.
- **Tertiary:** Text-only in `primary`, 700 weight, with a `2px` underline that expands on hover.

### Cards (The "Curation" Card)
- **Styling:** Forbid divider lines. Use `surface-container-low` for the card body. 
- **Spacing:** Use `spacing-6` (2rem) for internal padding to ensure the content breathes.
- **Visuals:** Images should have a subtle `2%` inner glow to soften the transition between photo and container.

### Input Fields
- **Style:** Underline-only or "Ghost Border" containers.
- **State:** On focus, the label (Google Sans) shifts to `primary` color, and the underline thickens to `2px`.

### Navigation (The "Floating Gallery" Bar)
- Use a `surface` glassmorphism effect. Instead of a full-width bar, use a centered, pill-shaped container to reinforce the "luxury boutique" feel.

---

## 6. Do's and Don'ts

### Do
- **Do** use asymmetrical layouts where text blocks overlap the edge of high-res images.
- **Do** use the `spacing-20` (7rem) scale for section breaks to create a sense of vastness.
- **Do** align serif headlines to the center for a formal, gallery-like feel.
- **Do** use the `secondary` (#855234) wood-tone for small UI details like pagination dots or active tab underlines.

### Don't
- **Don't** use 1px solid black or high-contrast borders.
- **Don't** use standard "Material Design" blue (#2196F3); stick strictly to our custom Pacific Blue (`#365f85`).
- **Don't** crowd the screen. If a section feels "full," increase the spacing scale. 
- **Don't** use heavy drop shadows on cards; let the background color shifts do the heavy lifting for depth.