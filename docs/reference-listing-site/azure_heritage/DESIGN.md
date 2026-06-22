# Design System Document: The Editorial Estate

## 1. Overview & Creative North Star
### Creative North Star: "The Digital Curator"
This design system moves away from traditional real estate "search-and-grid" templates toward a bespoke, high-end editorial experience. It is designed to feel like a premium coffee-table book—authoritative yet airy, quiet yet deeply intentional. 

We achieve this by breaking the rigid, boxy constraints of web design. By utilizing intentional asymmetry, layered depth, and "Cormorant Garamond" as a light-as-air typographic anchor, we transform a functional interface into a curated gallery. The goal is to evoke the feeling of walking through a luxury estate: expansive, perfectly lit, and meticulously detailed.

---

## 2. Colors
Our palette is a dialogue between the cool, architectural strength of charcoal/blue and the warm, human touch of peach accents.

### Palette Strategy
*   **Primary (`#324A5B`) & Tertiary (`#2F4A5F`):** These charcoal-blue tones represent the structural elements—the steel and shadow of fine architecture. Use these for high-contrast text and primary brand moments.
*   **Secondary Accent (`#FFDBCA`):** This warm peach is our "signature glow." It must be used sparingly to draw the eye to high-value interactions (CTAs, featured property status) without overwhelming the sophisticated cool tones.
*   **Neutrals:** Use the `surface` and `surface-container` tiers to build architectural planes rather than lines.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning or containment. Boundaries must be defined solely through background color shifts. For example, a property detail module (`surface-container-low`) should sit against a `surface` background to create a visible but soft boundary.

### Glass & Gradient
To provide visual "soul," use subtle gradients when transitioning between `primary` and `primary-container`. For floating navigation or luxury filters, implement **Glassmorphism**:
*   **Background:** `surface` at 70% opacity.
*   **Backdrop-filter:** `blur(12px)`.
*   **Border:** Use the "Ghost Border" (see Section 4).

---

## 3. Typography
The typographic system relies on the interplay between the delicate serif of a high-end magazine and the functional clarity of modern tech.

*   **Display & Headlines (Cormorant Garamond, Light 300):** These are our "statement pieces." Use massive scale (`display-lg`) for property names. The Light 300 weight is mandatory; it creates a sense of fragility and high-cost elegance.
*   **Body Text (Google Sans, 18px, Weight 400):** This is the workhorse. Google Sans provides a clean, modern contrast to the serif headlines. The 18px baseline ensures readability and a premium "breathable" feel compared to cramped standard web sizes.
*   **Labels (Google Sans, 0.75rem):** Used for micro-copy and metadata. Always in uppercase with slight tracking (letter-spacing: 0.05em) to maintain an editorial feel.

---

## 4. Elevation & Depth
Depth is achieved through **Tonal Layering**, mimicking how light falls across different architectural surfaces.

*   **The Layering Principle:** Stack `surface-container` tiers to create hierarchy. 
    *   *Base:* `surface` (`#F9F9FA`)
    *   *Sub-Section:* `surface-container-low` (`#F3F3F4`)
    *   *Interactive Card:* `surface-container-lowest` (`#FFFFFF`)
*   **Ambient Shadows:** For floating elements, use a shadow with a 24px-32px blur, at 5% opacity, tinted with the `on-surface` color. It should feel like an ambient occlusion, not a "drop shadow."
*   **The Ghost Border:** If a boundary is strictly required for accessibility, use the `outline-variant` token at 15% opacity. Never use 100% opaque lines.

---

## 5. Components

### Buttons
*   **Primary:** Background: `primary` (#324A5B). Typography: Google Sans 16px. Border Radius: `DEFAULT` (0.25rem). 
*   **Secondary/Accent:** Background: `secondary-container` (#FFDBCA). Typography: `on-secondary-container`. Use this exclusively for the "final" conversion action (e.g., "Book a Private Viewing").
*   **Tertiary:** Ghost style. No background. Use a `secondary-fixed` bottom border (0.175rem) that expands on hover.

### Cards & Property Lists
*   **No Dividers:** Forbid the use of divider lines. Separate property listings using vertical white space (`spacing-12` or `spacing-16`).
*   **Composition:** Images should take precedence. Use an "Overlapping Title" layout where the `headline-md` serif text slightly overlaps the top-left or bottom-left of the image container to break the grid.

### Input Fields
*   **Style:** Minimalist. Only a bottom border using `outline-variant` (20% opacity). 
*   **Focus State:** The bottom border transitions to `primary`. Helper text uses `label-md` in `on-surface-variant`.

### Signature Component: The Curator Chip
*   Used for filtering (e.g., "Penthouse," "Waterfront").
*   **Unselected:** `surface-container-high` with `on-surface-variant` text.
*   **Selected:** `secondary-container` (#FFDBCA) with `on-secondary-fixed` text.

---

## 6. Do's and Don'ts

### Do:
*   **Use Asymmetry:** Place high-end property descriptions off-center. Let the "Cormorant Garamond" text have its own lane of white space.
*   **Embrace the Peach:** Use `#FFDBCA` for small highlights like a "New Listing" badge or a custom map marker.
*   **Focus on Leading:** Ensure a generous line-height (1.6+) for body text to maintain the "Editorial" feel.

### Don't:
*   **Don't use 100% Black:** Use `on-background` (`#1A1C1D`) for text. Pure black is too harsh for this delicate palette.
*   **Don't Box Everything:** Avoid wrapping every group of elements in a container with a border. Trust the spacing scale to group items logically.
*   **Don't Over-round:** Stick to `ROUND_FOUR` (0.25rem/0.375rem). While "soft," it must remain professional and architectural, not "bubbly."