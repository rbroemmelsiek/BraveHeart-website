# Design System Strategy: The Digital Curator

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Digital Curator."** Inspired by high-end editorial archives and the architectural serenity of the provided reference image, this system moves beyond functional utility into the realm of digital craftsmanship. 

To achieve a "bespoke" feel, the system rejects standard grid-bound layouts. Instead, it utilizes **Intentional Asymmetry**—where whitespace is a primary design element—and **Overlapping Layers** that break the digital plane. The goal is a visual experience that feels less like a website and more like an exquisitely curated physical portfolio. Expect expansive margins, high-contrast typography scales, and a sense of "quiet luxury."

---

## 2. Colors
Our palette is anchored by the soft, atmospheric blue of the primary brand identity, warmed by a secondary "Peche" accent.

### The Palette
*   **Primary (`#486177`):** Use for authority and deep brand moments.
*   **Secondary Accent (`#FFDBCA`):** Use sparingly for warmth—secondary buttons, decorative hairlines, or highlighted luxury tags.
*   **Surface / Neutral:** Ranging from `surface-container-lowest` (`#ffffff`) to `surface-dim` (`#dbdad6`), these provide the "paper" on which our curation sits.

### Color Principles
*   **The "No-Line" Rule:** 1px solid borders are strictly prohibited for defining sections. Visual boundaries must be achieved through background color shifts. For example, a `surface-container-low` section should sit directly against a `surface` background to define its edge.
*   **Surface Hierarchy & Nesting:** Treat the UI as physical layers. Use `surface-container` tiers (Lowest to Highest) to "nest" depth. An inner content card should use a higher or lower tier than its parent container to define importance without adding visual noise.
*   **The Glass & Gradient Rule:** For floating navigation or modal overlays, use **Glassmorphism**. Combine semi-transparent surface colors with a `backdrop-blur` (e.g., 20px) to allow background textures to bleed through.
*   **Signature Textures:** Apply subtle linear gradients from `primary` to `primary-container` on main CTAs or Hero image overlays. This adds "soul" and depth that prevents the UI from feeling flat or "off-the-shelf."

---

## 3. Typography
The typography is the voice of the brand: authoritative, light, and intentionally spaced.

*   **Display & Headline (Cormorant Garamond, Light 300):** Our "Editorial Voice." Headlines should be large, airy, and given ample room to breathe. Use `display-lg` (3.5rem) for hero moments to establish immediate luxury.
*   **Body Text (Google Sans, 18px, weight 400):** Our "Informational Voice." This sans-serif provides a modern, readable counter-point to the serif headlines. It should feel grounded and precise.
*   **Labels (Plus Jakarta Sans):** Used for micro-copy and utility. The contrast between the serif headlines and the geometric sans labels creates a sophisticated, multi-layered hierarchy.

---

## 4. Elevation & Depth
Depth in this system is a result of **Tonal Layering**, not structural shadows.

*   **The Layering Principle:** Stack `surface-container` tokens to create natural lift. Place a `surface-container-lowest` card on a `surface-container-low` section. This creates a soft edge that mimics high-end stationery.
*   **Ambient Shadows:** If a floating effect is mandatory (e.g., a "Reserve" button), use extra-diffused shadows.
    *   *Values:* 0px 20px 40px rgba(0, 0, 0, 0.06).
    *   *Note:* The shadow color must be a tinted version of `on-surface` rather than pure grey.
*   **The "Ghost Border" Fallback:** If accessibility requires a border, use the `outline-variant` token at **15% opacity**. Never use 100% opaque, high-contrast lines.

---

## 5. Components

### Buttons
*   **Primary:** Solid `primary` color. High-contrast white text. `0.25rem` (sm) roundedness. 
*   **Secondary:** Solid `secondary_container` (`#FFDBCA`). Adds warmth to the blue-heavy palette. Use for "Inquire" or "View Gallery."
*   **Tertiary:** Text-only with a subtle `secondary` underline (2px) that expands on hover.

### Cards & Lists
*   **The Divider Ban:** Do not use line dividers in lists or between cards. Use **Spacing Scale 8 (2.75rem)** or subtle background shifts to separate content blocks.
*   **Editorial Cards:** Feature images with a slight overlap of text containers (using negative margins) to break the "boxed" layout.

### Input Fields
*   **Style:** Minimalist. Only a bottom border using `outline-variant` at 20% opacity. Labels in `label-md` (Plus Jakarta Sans) floating above.
*   **State:** On focus, the bottom border transitions to a 2px `primary` blue.

### Signature Component: The Curator Gallery
*   A horizontal scrolling list where images have varying aspect ratios (asymmetry). Captions use `Cormorant Garamond` italicized to emphasize the editorial feel.

---

## 6. Do's and Don'ts

### Do
*   **Do** use the Spacing Scale generously. If in doubt, add more whitespace.
*   **Do** overlap elements. Let an image bleed into the next section or have a text box sit 20px over a photo.
*   **Do** use the secondary color `#FFDBCA` for small, "human" touches like a notification dot or a subtle highlight tag.

### Don't
*   **Don't** use standard 1px borders or heavy drop shadows. It shatters the "editorial" illusion.
*   **Don't** crowd the interface. If the screen feels busy, remove an element rather than shrinking it.
*   **Don't** use pure black (#000000). Use `on-surface` (`#1b1c1a`) for a softer, more premium black.