# HomeToHome Form Design Library

**Version:** 1.3.0  
**Status:** LOCKED - Do not deviate without explicit approval  
**Last Updated:** 2026-05-09  

This document defines the **canonical form design system** for all forms in the HomeToHome application. Every form component, field type, and layout pattern MUST conform to this specification.

---

## Table of Contents

1. [Overview](#overview)
2. [Layout Architecture](#layout-architecture)
3. [Color Palette](#color-palette)
4. [Typography](#typography)
5. [Field Types Reference](#field-types-reference)
6. [Navigation Components](#navigation-components)
7. [Enum/EnumList Selection Patterns](#enumenumlist-selection-patterns)
8. [Implementation Files](#implementation-files)
9. [Progressive Disclosure](#progressive-disclosure)
10. [Embedded Help Videos](#embedded-help-videos-video-switch)
11. [Spacing Standards](#spacing-standards)
12. [AI-Suggested Field Values](#ai-suggested-field-values)
13. [Do's and Don'ts](#dos-and-donts)

---

## Overview

The HomeToHome Form Design Library provides a consistent, accessible, and responsive form experience across all platforms. Forms use a **wizard-style multi-step layout** with horizontal stepper navigation.

### Key Principles

1. **Consistency** - Every form uses identical field styling, spacing, and interaction patterns
2. **Floating Labels** - Labels always float above fields, never inside as placeholders
3. **Two-Column Grid** - Desktop uses 2-column grid, mobile stacks to single column
4. **Inline-First Selection** - Enum/EnumList fields use inline patterns (chips, dropdowns) or cascading forms; never out-of-context popup modals
5. **Clear Visual Hierarchy** - Section headers, field labels, and navigation are clearly differentiated

---

## Layout Architecture

### Form Container Structure

```
┌─────────────────────────────────────────────────┐
│ HEADER BAR (dark blue #141D84)                  │
│ [Icon] Title                    [Fullscreen] [X]│
├─────────────────────────────────────────────────┤
│ STEPPER NAVIGATION (white background)           │
│ ● STEP 1 ─── ○ STEP 2 ─── ○ STEP 3 ─── ...     │
├─────────────────────────────────────────────────┤
│                                                 │
│ SECTION TITLE (no redundant subtitle)           │
│                                                 │
│ ┌──────────────────┐  ┌──────────────────┐     │
│ │ Field 1          │  │ Field 2          │     │
│ └──────────────────┘  └──────────────────┘     │
│                                                 │
│ ┌──────────────────┐  ┌──────────────────┐     │
│ │ Field 3          │  │ Field 4          │     │
│ └──────────────────┘  └──────────────────┘     │
│                                                 │
├─────────────────────────────────────────────────┤
│ FOOTER NAVIGATION                               │
│ [Cancel]              < BACK  1/5  NEXT >      │
│                       (or FINISH on last page)  │
└─────────────────────────────────────────────────┘
```

### Responsive Behavior

- **Desktop (≥768px):** Two-column grid (`grid-cols-2`), `gap-x-6 gap-y-2`
- **Mobile (<768px):** Single column (`grid-cols-1`)
- **Full-width fields:** LongText, File, Image, Signature, Drawing, Show, SectionHeader

---

## Color Palette

### Primary Colors

| Purpose | Color | Hex | Tailwind Class |
|---------|-------|-----|----------------|
| Header Background | Dark Blue | `#141D84` | `bg-[#141D84]` |
| Active/Focus | Medium Blue | `#5972d0` | `border-[#5972d0]` |
| Link Text | Dark Blue | `#141D84` | `text-[#141D84]` |
| Success/Complete | Green | (Emerald) | `text-emerald-600` |
| Error | Red | (Red 500) | `border-red-500` |

### Neutral Colors

| Purpose | Color | Tailwind Class |
|---------|-------|----------------|
| Border Default | Gray 300 | `border-gray-300` |
| Text Primary | Gray 900 | `text-gray-900` |
| Text Secondary | Gray 500 | `text-gray-500` |
| Placeholder | Gray 400 | `text-gray-400` |
| Background | White | `bg-white` |
| Disabled Background | Gray 50 | `bg-gray-50` |

---

## Typography

### Font Family
- Primary: `font-sans` (system sans-serif stack)

### Text Sizes

| Element | Size | Weight | Class |
|---------|------|--------|-------|
| Header Title | Medium | Medium | `text-md font-medium` |
| Section Title | Large | Normal | `text-lg font-normal` |
| Field Label | Extra Small | Medium | `text-xs font-medium` |
| Field Value | Small | Normal | `text-sm text-gray-900` |
| Stepper Label | Extra Small | Bold | `text-xs font-bold uppercase` |
| Navigation | Extra Small | Bold | `text-xs font-bold uppercase` |

---

## Field Types Reference

### Category 1: Identity & Contact

| Field Type | MesopType | Icon | Notes |
|------------|-----------|------|-------|
| Name Field | `Name` | None | Standard text input |
| Email Address | `Email` | Mail | `type="email"` |
| Phone Number | `Phone` | Phone | Auto-format: `(555) 123-4567` |
| Mailing Address | `Address` | None | Standard text input |

### Category 2: Numbers & Finance

| Field Type | MesopType | Icon/Control | Notes |
|------------|-----------|--------------|-------|
| Price / Currency | `Price` | $ prefix | Format with commas, 2 decimals |
| Percentage | `Percent` | % suffix | 0-100 validation |
| Number (Integer) | `Number` | +/- stepper | Integer only |
| Decimal | `Decimal` | +/- stepper (optional) | Allows decimals |
| Change Counter | `ChangeCounter` | # suffix | Read-only counter |
| Progress Bar | `Progress` | Slider | 0-100% with thumb indicator |

### Category 3: Dates & Time

| Field Type | MesopType | Icon | Notes |
|------------|-----------|------|-------|
| Date Picker | `Date` | Calendar | Native date input |
| Time Picker | `Time` | Clock | Native time input |
| Date & Time | `DateTime` | Calendar | Native datetime-local |
| Duration | `Duration` | None | Text input |
| Change Timestamp | `ChangeTimestamp` | Clock | Read-only |

### Category 4: Media & Input

| Field Type | MesopType | Icon | Notes |
|------------|-----------|------|-------|
| Text Field | `Text` | None | Standard text input |
| Long Text / Notes | `LongText` | None | Textarea, 3 rows default |
| Image Upload | `Image` | Image | Click to upload |
| File Upload | `File` | FileText | Click to upload |
| Video Link | `Video` | Video | URL input + embed preview |
| Signature | `Signature` | PenTool | Canvas for signing |
| Drawing / Sketch | `Drawing` | PenTool | Canvas for drawing |

### Category 5: Controls & Metadata

| Field Type | MesopType | Control | Notes |
|------------|-----------|---------|-------|
| Yes/No Toggle | `Yes/No` | Switch | Left-aligned toggle |
| Dropdown (Enum) | `Enum` | ChevronDown | Opens popup modal |
| Multi-Select (EnumList) | `EnumList` | ChevronDown | Opens popup modal |
| Reference (Ref) | `Ref` | Search | Opens popup modal |
| Color Picker | `Color` | Palette | Native color + hex input |
| Website URL | `Url` | Link | URL validation |
| Lat/Long | `LatLong` | MousePointer | Format: `00.00, 00.00` |

### Special Types

| Field Type | MesopType | Notes |
|------------|-----------|-------|
| Page Break | `PageBreak` | Creates new wizard step |
| Section Header | `SectionHeader` | Full-width divider with title |
| Show (Embed) | `Show` | YouTube/content embed |

---

## Navigation Components

### Stepper Navigation

```
┌───────────────────────────────────────────────────────────────┐
│ ◀ │ ① STEP ONE ─── ② STEP TWO ─── ③ STEP THREE │ ▶ │
└───────────────────────────────────────────────────────────────┘
```

**States:**
- **Active:** Blue circle with white number, blue bold label
- **Completed:** Blue circle with white checkmark
- **Inactive:** White circle with gray border, gray label
- **Connector:** Dashed gray line between steps

### Footer Navigation

```
┌───────────────────────────────────────────────────────────────┐
│ [Cancel]                      < BACK   1 / 5   NEXT >         │
│                               (or FINISH ✓ on last step)      │
└───────────────────────────────────────────────────────────────┘
```

**Buttons:**
- **Cancel:** Red text, left side (only shown when `onCancel` provided)
- **Back:** Gray text, disabled on first step
- **Page Indicator:** Bold gray on light gray background
- **Next:** Blue text (#141D84)
- **Finish:** Green text (emerald-600) with checkmark on last step

---

## Enum/EnumList Selection Patterns

Selection patterns are **inline-first** to keep users focused on their workflow. The pattern used depends on the number of options available.

### Pattern Selection by Option Count

| Options | Single Select (Enum) | Multi Select (EnumList) |
|---------|----------------------|-------------------------|
| **2-4** | Inline chips/radio buttons | Inline checkboxes/chips |
| **5-8** | Native `<select>` dropdown | Native `<select multiple>` or chip toggle |
| **9-20** | Cascading form (FormStack) | Cascading form (FormStack) |
| **20+** | Cascading form (FormStack) | Cascading form (FormStack) |

### Pattern 1: Inline Chips (2-4 options)

Best for small, mutually exclusive choices. Options are always visible.

```
┌─────────────────────────────────────────────────┐
│ Property Type                                   │
│                                                 │
│ [Single Family] [Condo] [Townhouse] [Multi]     │
│  ^^^^^^^^^^^^                                   │
│  (selected)                                     │
└─────────────────────────────────────────────────┘
```

**Specifications:**
- Chips arranged horizontally, wrap on overflow
- Selected chip: `bg-[#141D84] text-white border-[#141D84]`
- Unselected chip: `bg-white text-gray-700 border-gray-300`
- Hover: `hover:border-[#141D84] hover:text-[#141D84]`
- Padding: `px-3 py-1.5`
- Gap between chips: `gap-2`

### Pattern 2: Native Dropdown (5-8 options)

Standard browser dropdown. Familiar, accessible, no context switch.

```
┌─────────────────────────────────────────────────┐
│ Property Type                                   │
│ ┌─────────────────────────────────────────────┐ │
│ │ Single Family                           ▼   │ │
│ └─────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────┘
```

**Specifications:**
- Native `<select>` element
- Border: `border-gray-300`
- Focus: `focus:ring-2 focus:ring-[#141D84]/30 focus:border-[#141D84]`
- Padding: `px-3 py-2`
- Full width within column

### Pattern 3: Cascading Form (9+ options)

For larger option sets, selection opens as a **child form** in the FormStack. This maintains context while providing a dedicated selection experience.

```
Parent Form (dimmed)              Selection Form (active)
┌────────────────────┐            ┌─────────────────────────────┐
│ Add Transaction    │            │ ← Property Type             │
│                    │            ├─────────────────────────────┤
│ Property Type      │───────────▶│ ┌─────────────────────────┐ │
│ [Select...]     ▼  │            │ │ Search...               │ │
│                    │            │ └─────────────────────────┘ │
│ Price              │            │                             │
│ [$___________]     │            │ ○ Single Family             │
│                    │            │ ○ Residential (1-4 Units)   │
└────────────────────┘            │ ○ Residential (5+ Units)    │
                                  │ ○ Townhome/Rowhouse         │
                                  │ ○ Condominium               │
                                  │ ○ Coop                      │
                                  │ ○ Apartment                 │
                                  │ ○ Manufactured Home         │
                                  │ ○ Mixed Use                 │
                                  │ ...                         │
                                  ├─────────────────────────────┤
                                  │ [Cancel]        [Select]    │
                                  └─────────────────────────────┘
```

**Behavior:**
- Triggered by clicking the field or chevron icon
- Uses `FormStack.push()` to open selection as child form
- Parent form state is preserved (see CASCADING_FORMS_SPEC.md)
- On selection: `FormStack.pop({ result: selectedValue, action: 'save' })`
- On cancel: `FormStack.pop({ action: 'cancel' })`
- Selection result auto-populates the parent field

**Selection Form Features:**
- Search bar at top (always visible)
- Scrollable option list
- Radio buttons for single select (Enum)
- Checkboxes for multi-select (EnumList)
- Cancel/Select footer buttons

### Multi-Select (EnumList) Variations

| Options | Pattern |
|---------|---------|
| 2-6 | Inline checkboxes or toggle chips |
| 7+ | Cascading form with checkboxes |

**Inline Checkboxes (2-6 options):**
```
┌─────────────────────────────────────────────────┐
│ Amenities                                       │
│                                                 │
│ ☑ Pool   ☑ Gym   ☐ Parking   ☐ Laundry         │
└─────────────────────────────────────────────────┘
```

### Pattern 4: Contact Reference Picker (Ref fields)

For Ref fields that reference contacts (vendors, clients, providers), use the `ContactRefPicker` component which shows a card view of the contact database.

```
Parent Form (dimmed)              Contact Picker (active)
┌────────────────────┐            ┌─────────────────────────────┐
│ Add Client         │            │ ← Add Vendor(s)         ×   │
│                    │            │   3 Vendors                 │
│ Vendor             │───────────▶├─────────────────────────────┤
│ [Select...]     🔍 │            │ ┌─────────────────────────┐ │
│                    │            │ │ 🔍 Search vendors...    │ │
│ Budget             │            │ └─────────────────────────┘ │
│ [$___________]     │            │                             │
│                    │            │ ┌─ + Add New Vendor ──────┐ │
└────────────────────┘            │ └─────────────────────────┘ │
                                  │                             │
                                  │ ┌─────────────────────────┐ │
                                  │ │ ○  [👤] Mike's Plumbing │ │
                                  │ │     Plumber             │ │
                                  │ │     ABC Services        │ │
                                  │ └─────────────────────────┘ │
                                  │ ┌─────────────────────────┐ │
                                  │ │ ○  [👤] Jane Electric   │ │
                                  │ │     Electrician         │ │
                                  │ │     JE Electric Co      │ │
                                  │ └─────────────────────────┘ │
                                  │                             │
                                  ├─────────────────────────────┤
                                  │ [Clear]        [Select]     │
                                  └─────────────────────────────┘
```

**Usage:**
```typescript
<MesopField
  type="Ref"
  label="Add Vendor(s)"
  value={selectedVendorId}
  onChange={handleVendorSelect}
  refTarget="vendors"           // Filter: 'vendors' | 'clients' | 'providers' | 'contacts'
  onAddNewRef={handleAddNewVendor}  // Opens contact form to create new
/>
```

**Contact Picker Features:**
- Blue header with title and count
- Search bar BELOW the header (not inside it)
- "Add New" button for creating contacts inline
- Card view showing avatar, name, role, company, category badge
- Category filtering based on `refTarget` prop
- Selection checkbox/radio per card
- Clear/Select footer buttons

### Selection Indicators

| Type | Inline Pattern | Cascading Form Pattern |
|------|----------------|------------------------|
| Single (Enum) | Chip highlight or native dropdown | Radio button (circle with filled dot) |
| Multi (EnumList) | Checkbox or chip toggle | Checkbox (square with checkmark) |

### Anti-Pattern: Modal Popups

**DO NOT** use centered modal overlays for enum selection. Modals:
- Break user focus and workflow context
- Obscure the parent form content
- Require explicit dismissal actions
- Create a jarring context switch

Use inline patterns (chips, dropdowns) or cascading forms instead

---

## Implementation Files

### Primary Component

```
frontend/src/components/FormsWidget.tsx
```

Contains:
- `MesopField` - Individual field renderer for all types
- `MesopLabel` - Floating label component
- `EnumChipSelect` - Inline chip selector for 2-4 options
- `EnumDropdown` - Native dropdown for 5-8 options
- `FormsWidget` - Main wizard form container
- `COMPREHENSIVE_EXAMPLE_SCHEMA` - Component Gallery demo schema

### Cascading Selection Form

```
frontend/src/components/form-stack/EnumSelectionForm.tsx
```

Contains:
- `EnumSelectionForm` - Cascading form for 9+ option enums
- Integrates with FormStack for push/pop navigation
- See CASCADING_FORMS_SPEC.md for FormStack details

### Contact Reference Picker

```
frontend/src/components/contacts/ContactRefPicker.tsx
```

Contains:
- `ContactRefPicker` - Card-based contact selection for Ref fields
- Shows contact database with avatar, name, role, company
- Supports category filtering (vendors, clients, providers)
- "Add New" button integration for inline contact creation
- Search bar below header, not inside it

### Types Definition

```
frontend/src/types.ts
```

Contains:
- `MesopType` - Union type of all field types
- `FieldDef` - Schema definition for fields
- `EnumOption` - Option structure for dropdowns

### Supporting Contexts

```
frontend/src/context/EnumCatalogContext.tsx
frontend/src/context/GlobalFieldContext.tsx
```

---

## Progressive Disclosure

The Form Library fully supports **progressive disclosure** - showing/hiding fields based on user input.

### Field Visibility Controls

| Property | Type | Purpose |
|----------|------|---------|
| `hidden` | boolean | Directly hide a field |
| `showIf` | string | Expression that must evaluate to true to show field |
| `showIfJson` | object | Pre-compiled JSON rule for complex conditions |

### showIf Expression Syntax

```javascript
// Simple equality
"data.fieldName === 'value'"

// Check if not blank
"ISNOTBLANK(data.fieldName)"

// Boolean check
"data.boolField === TRUE"

// Bracket notation for special characters
"data[\"Field Name\"] === 'value'"
```

### Dependent Dropdowns

Fields can have options that depend on other field values:

| Property | Purpose |
|----------|---------|
| `optionsSourceField` | Field whose value determines available options |
| `optionsByValue` | Map of source values to option arrays |
| `optionsCategorySourceField` | Field that selects the enum category |
| `optionsByCategory` | Map of category names to option arrays |

### Implementation

```typescript
// In schema definition
{
  name: 'subCategory',
  type: 'Enum',
  label: 'Sub-Category',
  optionsSourceField: 'mainCategory',
  optionsByValue: {
    'Residential': ['Single Family', 'Condo', 'Townhouse'],
    'Commercial': ['Office', 'Retail', 'Industrial']
  }
}
```

---

## Embedded Help Videos (Video Switch)

The Form Library supports **embedded YouTube help videos** that appear conditionally based on field selections.

### Show Field Type

The `Show` type renders YouTube videos or embedded content:

```typescript
{
  name: 'help_video',
  type: 'Show',
  label: 'Help Video',
  formula: 'data.helpVideoUrl'  // Evaluates to YouTube URL
}
```

### Video Switch Pattern

Video switches are `Show` fields that appear conditionally above their associated fields:

```typescript
{
  name: 'inspectionType_video_switch',
  type: 'Show',
  label: 'Inspection Guide',
  showIf: 'ISNOTBLANK(data.inspectionType)',
  formula: 'LOOKUP(data.inspectionType, HelpVideos, Type, VideoUrl)'
}
```

### Automatic Association

The FormsWidget automatically associates video switches with fields by:

1. Parsing `showIf` expressions for field references
2. Matching field names (e.g., `inspection_video_switch` → `inspection` field)
3. Rendering the video above the associated field when conditions are met

### YouTube Embed Features

- Lazy-loaded thumbnails (click-to-play)
- Privacy-enhanced mode (`youtube-nocookie.com`)
- Quality preset to HD (1080p)
- Minimal branding (`modestbranding=1`)

---

## Spacing Standards

### Vertical Spacing

| Context | Class | Value |
|---------|-------|-------|
| Between fields (forms) | `space-y-4` | 1rem (16px) |
| Grid gap horizontal | `gap-x-6` | 1.5rem (24px) |
| Grid gap vertical | `gap-y-2` | 0.5rem (8px) |
| Section margins | `mt-4 mb-2` | Top 1rem, Bottom 0.5rem |

### Horizontal Spacing

| Context | Class | Value |
|---------|-------|-------|
| Field padding | `px-3 py-3` | 0.75rem horizontal, 0.75rem vertical |
| Form content padding | `p-6` | 1.5rem all sides |
| Header padding | `px-4 py-3` | 1rem horizontal, 0.75rem vertical |

---

## AI-Suggested Field Values

The Form Library supports AI-generated field suggestions with visual indicators and intuitive acceptance/cycling interactions.

### Visual Indicators

| State | Border Color | Description |
|-------|-------------|-------------|
| Normal (no suggestion) | `border-gray-300` | Default field border |
| AI Suggestion Present | `border-[#04cc08]` | Green border indicates AI suggestion available |
| AI Suggestion + Focus | `border-[#04cc08] ring-1 ring-[#04cc08]/30` | Green with glow on focus |
| Error | `border-red-500` | Red border for validation errors (overrides suggestion styling) |

### Suggestion Display

- AI suggestions appear as **gray placeholder text** within the field
- The green border (`#04cc08`) distinguishes AI suggestions from standard placeholders
- Fields with user-entered values do NOT show AI suggestions

### Accepting Suggestions

Users can accept the current AI suggestion through several methods:

| Method | Platform | Behavior |
|--------|----------|----------|
| **Tab** | Desktop | Press Tab to accept and move to next field |
| **Click outside** | Desktop/Touch | Focus out of field accepts the suggestion |
| **Single tap** | Touch | First tap focuses field, tap outside accepts |

### Cycling Through Suggestions

When multiple suggestions are available, users can cycle through them:

| Method | Platform | Behavior |
|--------|----------|----------|
| **Arrow Up/Down** | Desktop | Cycle prev/next suggestion |
| **Arrow Left/Right** | Desktop | Cycle prev/next suggestion |
| **Repeated tap** | Touch | Tap again after focus to get next suggestion |

### Implementation

```typescript
// FormsWidget props for AI suggestions
interface FormsWidgetProps {
  aiSuggestions?: AiSuggestionsMap;  // Map of fieldName -> suggestions[]
  onRequestMoreSuggestions?: (fieldName: string) => void;
}

// Suggestion structure
interface AiFieldSuggestion {
  value: string;           // The suggested value
  confidence?: number;     // Optional confidence score (0-1)
  source?: string;         // Optional source description
}

// Example usage
<FormsWidget
  schema={transactionSchema}
  aiSuggestions={{
    'Property_Street': [
      { value: '123 Main St', confidence: 0.95, source: 'Previous transaction' },
      { value: '456 Oak Ave', confidence: 0.72, source: 'Contact address' }
    ],
    'Property_City': [
      { value: 'Los Angeles', confidence: 0.98 }
    ]
  }}
  onRequestMoreSuggestions={(fieldName) => {
    // Fetch additional suggestions from AI backend
  }}
/>
```

### Behavior Rules

1. **No value overwrite**: Suggestions only appear when field is empty
2. **User input priority**: Typing any character clears the suggestion and uses user input
3. **Cycle wrapping**: Cycling past the last suggestion wraps to the first
4. **More suggestions**: When cycling reaches the end, `onRequestMoreSuggestions` is called if provided
5. **Persistent index**: Each field remembers its current suggestion index during the session

---

## Do's and Don'ts

### DO ✅

- Use `MesopField` for all form field rendering
- Follow the two-column grid layout
- Use inline chips for 2-4 option enums
- Use native dropdowns for 5-8 option enums
- Use cascading forms (FormStack) for 9+ option enums
- Include Cancel/Save buttons when form has `onCancel`/`onSave`
- Use floating labels (above field, never inside)
- Use consistent border color (`border-gray-300` default)
- Follow the stepper navigation pattern for multi-step forms
- Use green border (`#04cc08`) exclusively for AI suggestions

### DON'T ❌

- Create custom field components outside the library
- Use popup modals for enum/list selection (breaks workflow focus)
- Mix different button/navigation styles
- Use placeholder text as labels
- Deviate from the color palette
- Add borders darker than `border-gray-300` on upload fields
- Remove the stepper navigation from wizard forms
- Skip the Cancel button when `onCancel` is provided
- Use green borders for anything other than AI suggestions
- Take the user "out of bounds" with centered modal overlays

---

## Change Log

| Version | Date | Changes |
|---------|------|---------|
| 1.3.0 | 2026-05-09 | **Breaking:** Replaced modal-based enum picker with inline-first patterns (chips 2-4, dropdown 5-8, cascading form 9+). Added `ContactRefPicker` for Ref fields targeting contacts with card view, "Add New" button, and search below header. |
| 1.2.0 | 2026-05-09 | Added AI-Suggested Field Values with green border, acceptance, and cycling |
| 1.1.0 | 2026-05-09 | Added Progressive Disclosure, Embedded Help Videos, Spacing Standards |
| 1.0.0 | 2026-05-09 | Initial locked specification |

---

**This specification is LOCKED. Any proposed changes must be approved by the project lead and documented in the change log.**
