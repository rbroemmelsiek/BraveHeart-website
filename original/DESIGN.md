---
theme:
  colors:
    # Baseline Oak St. Palette (Monochrome & Elegant)
    # Swap these to Braveheart colors (e.g., Slate Navy, Crimson)
    primary: "#1A1A1A"           # Black/Dark Charcoal for buttons & key accents
    on_primary: "#FFFFFF"        # White text on primary buttons
    secondary: "#666666"         # Medium gray for subtext and metadata
    tertiary: "#8A8A8A"          # Accent color (used for lines and highlights)
    tertiary_fixed: "#E0E0E0"    # Subtle accent backgrounds
    surface: "#FFFFFF"           # Main background (Stark White)
    on_surface: "#111111"        # Main text color (Near Black)
    surface_container_lowest: "#FFFFFF"
    surface_container_low: "#F9F9F9" # Light gray for alternating sections
    surface_container: "#F4F4F4"     # Marginally darker for cards
    outline_variant: "#E5E5E5"   # Very subtle borders
  typography:
    # Exact Google Fonts extracted from the HTML head
    font_serif: "'Cormorant Garamond', serif"
    font_sans: "'Work Sans', sans-serif"
    font_alt: "'Noto Serif', serif"
    
    # Semantic text roles mapped to HTML classes
    headline_font: "'Cormorant Garamond', serif"
    body_font: "'Work Sans', sans-serif"
    label_font: "'Work Sans', sans-serif"
  spacing:
    max_width_hero: "1920px"
    max_width_content: "1400px"
    max_width_text: "800px"
    section_py_base: "96px"   # Usually mapped to py-24 in Tailwind
    section_py_large: "128px" # Usually mapped to py-32 in Tailwind
  borders:
    radius_sm: "2px" # Used extensively on buttons and image cards
    radius_lg: "8px" # Used on glass panels
---

# Style Guide & Component Rules

## 1. Typography Treatments
- **Headlines (`.font-headline`, `.font-serif-delicate`):** Use *Cormorant Garamond*. Keep font weights very light (`font-light`). Use tight line-heights (`leading-tight` or `leading-[0.9]`) for massive text, and frequently use italics (`italic`) for specific words to create an editorial, poetic rhythm.
- **Micro-copy & Labels (`.font-label`):** Use *Work Sans*. Font sizes should be exceptionally small (`text-[10px]` or `text-xs`). ALWAYS use uppercase (`uppercase`) and extreme letter spacing (`tracking-[0.2em]`, `tracking-widest`).
- **Body Text (`.font-body`):** Use *Work Sans*. Keep font weights light (`font-light`) with very loose line height (`leading-relaxed` or `leading-loose`) to ensure breathability.

## 2. Luxury UI Components
- **Buttons (`.btn-transition`):** Sharp or barely-rounded corners (`rounded-sm` / `2px`). Primary buttons use solid background (`bg-primary`) with uppercase, tracking-widest text. No drop shadows by default.
- **The Glass Panel (`.glass-panel`, `.glass-nav`):** Used over images or as floating cards. Requires a translucent background (e.g., `bg-white/60`), background blur (`backdrop-blur-md`), and a very subtle border (`border border-white/20`).
- **Iconography:** Strictly Google Material Symbols Outlined. Keep them thin and elegant.

## 3. Layout & Pacing
- **The "Curated Absence of Noise":** Sections must have massive vertical padding (`py-24` to `py-32`). Elements should never feel crowded.
- **Image Treatment (`.card-lift`):** Images are often placed in containers with `aspect-[4/5]`, `aspect-video`, or `aspect-square`. Images often start partially grayscale (`grayscale-[0.2]`) and transition to full color and scale up slightly (`scale-105`) on hover with a slow duration (`duration-1000`).
- **Grid Layouts:** Use 12-column grids for complex layouts, often spanning items across 5 or 7 columns to create intentional asymmetry (e.g., an image taking 7 columns, and the text taking 5 columns, leaving empty grid space).

## 4. Animation & Interaction
- **Reveal (`.reveal`):** Text and images should fade in and slide up slightly as they enter the viewport.
- **Hover States:** Links should use `transition-colors duration-500` to fade smoothly between `text-secondary` and `text-primary`.