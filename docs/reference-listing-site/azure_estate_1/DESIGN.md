# Design System Strategy: The Curated Estate

## 1. Overview & Creative North Star

**Creative North Star: "The Digital Curator"**
This design system rejects the "templated" nature of traditional real estate platforms in favor of a high-end editorial experience. Inspired by the meticulous staging of luxury interiors, the system prioritizes **intentional asymmetry**, **layered depth**, and **expansive breathing room**. 

Unlike standard real estate grids that feel congested with data, "The Digital Curator" treats every property listing like a feature story in an architectural digest. We achieve this by using oversized typography, overlapping elements (images bleeding into sections), and a strict "No-Line" policy. This creates a fluid, immersive environment that feels prestigious, modern, and inviting.

---

## 2. Colors

The palette is derived from the sophisticated interplay of cool coastal blues, warm oak tones, and clean gallery whites. It is designed to feel airy yet grounded.

### Color Tones
- **Primary (`#365F85`):** A deep, architectural blue used for focal points and authoritative accents.
- **Secondary (`#855234`):** A warm wood-tone used to provide organic contrast and a sense of "home."
- **Neutral/Surface (`#FBF9F5`):** A soft, off-white gallery base that prevents the clinical feel of pure hex white.

### The "No-Line" Rule
To maintain a premium editorial feel, **1px solid borders are prohibited for sectioning.** Designers must define boundaries through background shifts. For instance, a property details section using `surface-container-low` should sit directly against a `surface` background. The transition of color is the boundary.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of fine paper. 
- **Base Level:** `surface` (#fbf9f5)
- **Nested Content:** `surface-container-low` (#f5f3ef) for subtle grouping.
- **Elevated Highlights:** `surface-container-lowest` (#ffffff) for prominent cards or floating modules.

### The "Glass & Gradient" Rule
To add visual "soul," use **Glassmorphism** for floating navigation or overlaying property labels. Combine a semi-transparent `surface` color with a `backdrop-blur`. For primary CTAs, utilize a subtle linear gradient from `primary` (#365f85) to `primary-container` (#50789f) to create a soft, backlit effect.

---

## 3. Typography

The typography strategy balances the classic elegance of **Noto Serif** with the modern, high-performance legibility of **Manrope**.

- **Display & Headlines (Noto Serif):** Used for property titles and section headers. The serif high-contrast strokes convey heritage and prestige. Use `display-lg` (3.5rem) for hero sections to create a "magazine cover" impact.
- **Body & Titles (Manrope):** A clean, geometric sans-serif that ensures clarity in property descriptions and technical data. It provides the "modern" counter-balance to the serif headers.
- **Labels (Inter):** Used sparingly for micro-data (e.g., "SQ FT," "LOT SIZE") at small scales (`label-sm`) to ensure maximum utility without distracting from the editorial flow.

---

## 4. Elevation & Depth

We move away from traditional shadows in favor of **Tonal Layering**.

### The Layering Principle
Depth is achieved by "stacking" the surface-container tiers. A property card (`surface-container-lowest`) placed on a section background (`surface-container-low`) creates a soft, natural lift that mimics architectural shadows without the clutter of "drop shadow" effects.

### Ambient Shadows
When a floating effect is required (e.g., a "Schedule Viewing" modal), shadows must be extra-diffused:
- **Blur:** 24px - 40px
- **Opacity:** 4% - 8%
- **Color:** Use a tinted version of `on-surface` (#1b1c1a) rather than pure black to simulate natural light.

### The "Ghost Border" Fallback
If an element requires a container for accessibility (e.g., search inputs), use a **Ghost Border**: `outline-variant` (#c2c7cf) at **15% opacity**. Never use 100% opaque borders.

---

## 5. Components

### Buttons
- **Primary:** Gradient fill (`primary` to `primary-container`), white text, `md` (0.375rem) corner radius. High-end buttons should feel "weighted."
- **Secondary:** Transparent with a "Ghost Border" and `primary` text.
- **Tertiary:** Pure text with a 1px underline using the `secondary` (wood tone) color, spaced 4px from the baseline.

### Input Fields
Avoid "boxy" inputs. Use a `surface-container-low` background with a bottom-only `outline` token at 20% opacity. Labels should use `manrope` in `label-md`.

### Cards & Lists
**Strict Rule: Forbid the use of divider lines.** 
Separate listing items using vertical white space (use `Spacing 12` or `16` from the scale). Use subtle background shifts between alternate items if a visual break is required. Property cards should utilize a "bleeding" image style where the photo extends to the very edge of the `surface-container-lowest` container.

### Signature Component: The "Editorial Overlay"
A component specific to this system where a `display-sm` Noto Serif headline overlaps a high-resolution image by 20%, utilizing a backdrop-blur "Glass" pill for the sub-caption. This breaks the rigid grid and creates an custom, "designed" feel.

---

## 6. Do's and Don'ts

### Do
- **Do** use generous white space. If you think there is enough space, add 20% more.
- **Do** use `secondary` (#855234) for small "Human" touches—icon accents, underlines, or small callouts.
- **Do** align serif headlines to the left with significant indentation to create a modern, asymmetrical look.

### Don't
- **Don't** use black (#000000). Use `on-surface` (#1b1c1a) for all text to maintain a softer, premium contrast.
- **Don't** use standard shadows. If an element "pops" too much, it loses the "curated" feel.
- **Don't** use sharp corners. Always use at least the `DEFAULT` (0.25rem) or `md` (0.375rem) roundedness to keep the interface "inviting" and "soft."
- **Don't** use dividers. If the content feels messy, increase the `Spacing` tokens rather than adding lines.