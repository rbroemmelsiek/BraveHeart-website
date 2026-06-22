# Design System: High-End Editorial Guidelines

## 1. Overview & Creative North Star: "The Curated Gallery"
The North Star for this design system is **"The Curated Gallery."** We are not building a standard real estate portal; we are designing a digital exhibition of high-end architectural lifestyle. 

To achieve this, we break away from the rigid, "boxed-in" layout typical of modern SaaS. Instead, we embrace an **Editorial Strategy** characterized by:
*   **Intentional Asymmetry:** Off-center imagery and staggered text blocks that mimic a premium print magazine.
*   **Breathing Room:** Aggressive use of whitespace (using the `20` and `24` spacing tokens) to allow the delicate typography to "breathe."
*   **Overlapping Elements:** Breaking the container grid by allowing high-resolution imagery to bleed behind text or secondary UI elements to overlap image margins.

---

## 2. Colors
Our palette is a sophisticated interplay of soft blues and deep charcoals, grounded by off-white parchment tones.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning. Structural boundaries must be defined solely through background color shifts. 
*   Transition from `surface` (#fbf9f5) to `surface-container-low` (#f5f3ef) to denote a new content block. 
*   Avoid "hairline" dividers between list items; use vertical space (token `6` or `8`) instead.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of premium materials (glass, matte paper, linen). 
*   **Base:** `surface`
*   **Layer 1:** `surface-container-low` (for secondary content sections)
*   **Layer 2:** `surface-container-highest` (for interactive elements like cards)
*   **Layer 3:** `surface-container-lowest` (#ffffff) (for primary focal points like search inputs or active modals).

### Glass & Gradient Signature
*   **The Glass Rule:** For floating navigation or action menus, use `surface-container-lowest` at 70% opacity with a `backdrop-blur` of 20px.
*   **Signature Textures:** Use subtle linear gradients for primary CTAs (from `primary` #355f86 to `primary-container` #4f78a0) to provide a "silk-finish" depth that flat hex codes cannot replicate.

---

## 3. Typography: Delicate & Elegant
The typography is the soul of this system. It balances the weight of history with modern clarity.

*   **Display & Headlines:** **Cormorant Garamond (Light 300)**. 
    *   *Note:* This font is delicate and high-contrast. It must be used at large scales (`display-lg` at 3.5rem) to maintain its elegant legibility. It conveys an authoritative, heritage-estate feel.
*   **Body & Utility:** **Work Sans**. 
    *   A clean, geometric sans-serif that provides a "functional" counterpoint to the romanticism of the headlines. It ensures that technical property details remain highly readable.
*   **Hierarchy Strategy:** Always pair a `display-md` Cormorant Garamond headline with a `label-md` Work Sans sub-header in all-caps (letter-spacing: 0.1rem) to create a "Vogue-style" editorial lockup.

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows are often too "digital." We use **Tonal Layering** to define space.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` background. The subtle shift from ivory to white provides all the "lift" required.
*   **Ambient Shadows:** If a floating effect is necessary (e.g., a "Contact Agent" fab), use a shadow with a blur of 40px and an opacity of 4% using the `on-surface` color (#1b1c1a) as the tint. It should look like a soft shadow on a gallery wall, not a computer-generated glow.
*   **The "Ghost Border" Fallback:** If accessibility demands a border, use `outline-variant` (#c2c7cf) at 15% opacity. Never use 100% opaque lines.
*   **Glassmorphism:** Use semi-transparent `primary-container` overlays for image hover states to keep the layout feeling light and integrated.

---

## 5. Components

### Buttons
*   **Primary:** `primary` background with `on-primary` text. Use `roundedness-sm` (0.125rem) for a sharp, architectural edge.
*   **Tertiary:** No background. Underlined text using `tertiary` (#834f31) with a 2px offset.

### Cards & Lists
*   **Forbid Dividers:** Do not use lines to separate listings. Use `spacing-12` as a vertical gap or alternating `surface-container` background tints.
*   **Image-Centric:** Cards should be borderless. The image should occupy 60% of the card area, with text set in an asymmetrical, wide-margin layout below.

### Input Fields
*   **Style:** Minimalist. Only a bottom-border (Ghost Border style) that transforms into a `primary` 2px line on focus. Labels should use `label-sm` in `secondary` color, floating above the input.

### Signature Component: The "Editorial Hero"
*   A large-scale image component that spans 80% of the viewport width (offset to the right), with a `display-lg` headline overlapping the left edge of the image by 10%. This creates the "signature" custom look of the system.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical margins. If the left margin is `spacing-16`, the right margin can be `spacing-24`.
*   **Do** use high-contrast font sizes. A tiny `label-sm` next to a massive `display-lg` creates professional tension.
*   **Do** leverage the "soft blue" (`primary-fixed-dim`) for background tints on content-heavy pages to reduce eye strain.

### Don't:
*   **Don't** use 1px solid borders to box in content. It kills the editorial flow.
*   **Don't** use standard "drop shadows." They feel dated and "out-of-the-box."
*   **Don't** use Cormorant Garamond for body text or small labels; its delicate serifs will break and lose legibility at small scales.
*   **Don't** center-align everything. Modern editorial design thrives on a strong, off-center axis.