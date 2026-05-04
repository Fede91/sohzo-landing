---
name: Sohzo
description: A daily ritual of curiosity — one piece, every morning, across twelve worlds.
colors:
  paper: "oklch(97.5% 0.005 80)"
  paper-soft: "oklch(95% 0.006 80)"
  ink: "oklch(15% 0.008 80)"
  ink-soft: "oklch(28% 0.006 80)"
  ink-muted: "oklch(50% 0.005 80)"
  ink-faint: "oklch(72% 0.004 80)"
  rule: "oklch(88% 0.005 80)"
typography:
  display:
    fontFamily: "'Satoshi', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.5rem, 11vw, 11rem)"
    fontWeight: 900
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  display-2:
    fontFamily: "'Satoshi', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6.5vw, 5.5rem)"
    fontWeight: 900
    lineHeight: 0.96
    letterSpacing: "-0.035em"
  display-3:
    fontFamily: "'Satoshi', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 3.5vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.02em"
  body:
    fontFamily: "'Satoshi', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.375
    letterSpacing: "normal"
  label:
    fontFamily: "ui-monospace, 'SF Mono', 'JetBrains Mono', Menlo, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    letterSpacing: "0.18em"
rounded:
  full: "9999px"
  card: "36px"
spacing:
  page-x: "2.5rem"
  section-y: "12rem"
  card-inner: "2.5rem"
components:
  cta-primary:
    textColor: "{colors.ink}"
    typography: "{typography.display-3}"
  article-card:
    backgroundColor: "{colors.paper-soft}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-inner}"
  feedback-button:
    backgroundColor: "transparent"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.full}"
    size: "2.25rem"
  plans-cell:
    backgroundColor: "{colors.paper}"
    padding: "3rem"
  plans-cell-plus:
    backgroundColor: "{colors.paper-soft}"
    padding: "3rem"
---

# Design System: Sohzo

## 1. Overview

**Creative North Star: "The Curated Correspondent"**

Sohzo's visual system is built around one idea: a trusted editor who sends you one perfect letter every morning. Not a feed. Not a recommendation engine. A single, considered act of curation. The interface feels like opening a well-designed envelope — warm paper, unhurried typography, no competing signals. It is calm at the moment of peak attention.

The system uses Satoshi (geometric black, optically tight) paired with a monospaced label utility. The palette is a single warm-tinted neutral scale — never pure white or black — punctuated by twelve category accents that appear only in domain-specific contexts. Those accents are not UI colors; they are content identifiers. They communicate which world you're in, not which button to press. The layout is structured by 12-column grids and hairline rules, not by cards or shadows. Sections announce themselves with numbered mono labels (№ 01, № 02); structure comes from typographic hierarchy, not containers.

This system explicitly rejects: the gamified learning platform (streaks, badges, dopamine loops), the recommendation-engine feed (infinite scroll, recency-biased, noise), and the social comparison interface (likes, shares, public tallies). Sohzo is a closed container, not a portal. Every design decision should communicate: "we chose this for you, and we're done."

**Key Characteristics:**
- Warm-tinted neutrals only: no pure white (#fff) or black (#000) anywhere
- Typography does the structural work — no cards, no shadows on UI elements
- Category accents appear in content contexts only, never as UI affordances
- Numbered section labels (mono, uppercase, tracked) create editorial rhythm
- One CTA pattern: text link at display-3 scale + arrow `→`, never a `<button>`
- Motion is orchestrated on entrance, then completely still; no idle animation

## 2. Colors: The Morning Page Palette

A single warm-tinted neutral scale anchored to hue 80° (amber-adjacent), with zero chroma at the extremes and trace chroma through the mid-range. The twelve category accents live outside this scale; they are a spectrum system, not a secondary palette.

### Neutral

- **Morning Cream** (`oklch(97.5% 0.005 80)`): the page surface. Used as `body` background. Never `#ffffff`.
- **Soft Vellum** (`oklch(95% 0.006 80)`): slightly recessed surface. Used on card backgrounds and the Plus plan panel.
- **Rich Charcoal** (`oklch(15% 0.008 80)`): primary ink. Headlines, wordmark, active links, the CTA arrow. Never `#000000`.
- **Warm Dark** (`oklch(28% 0.006 80)`): body text and secondary copy. Slightly warmer than charcoal; softer on long reads.
- **Considered Grey** (`oklch(50% 0.005 80)`): muted text — section labels, captions, metadata, nav links at rest.
- **Whisper** (`oklch(72% 0.004 80)`): faint labels — numbered list markers, decorative spans, secondary meta.
- **Faint Rule** (`oklch(88% 0.005 80)`): hairline dividers. All borders and rules throughout the page use this single value.

### Category Spectrum

Twelve domain-specific accents spanning the visible spectrum. Each maps to one knowledge world. They appear on: the Spectrum bar, category index numbers on hover, the category-tinted card gradient overlay, vertex dots on the constellation diagram, and hover underlines in the worlds list.

**The Domain Colour Rule.** Category accents are content-level identifiers, not UI affordances. They never appear on buttons, form controls, or navigational elements. A category colour signals "this piece is from world X" — it does not signal "click here." Using a category accent as an interactive affordance breaks the semantic contract.

**The One World Rule.** Never mix two category accents on the same surface. The correct maximum is one accent per visible context. The Spectrum bar is the one deliberate exception: its whole meaning is the full range together.

## 3. Typography

**Display Font:** Satoshi (Satoshi-Black for display-1/display-2, Satoshi-Bold for display-3, Light italic for emphasis)
**Body Font:** Satoshi Regular / Medium
**Label Font:** System monospace stack (ui-monospace, SF Mono, JetBrains Mono, Menlo)

**Character:** Satoshi's geometric construction holds at extreme weights without going rigid. At black weight (900), tight tracking (-0.04em) and sub-1 leading (0.92) create editorial compression that reads as authoritative without aggression. The monospace label utility is the counterpoint: tracked wide (+0.18em), set small (11px), always uppercase. Together they create a system that feels like a considered magazine — one face doing two very different jobs.

### Hierarchy

- **Display** (900, clamp(3.5rem→11rem), lh 0.92, -0.04em): Hero headline only. One element per page. Used with `text-balance`. Italic `font-light` (300) for the final word as emphasis.
- **Display-2** (900, clamp(2.5rem→5.5rem), lh 0.96, -0.035em): Section headlines. One per section. Always `text-balance`.
- **Display-3** (700, clamp(1.75rem→3rem), lh 1.04, -0.02em): CTAs (the download link) and card-level titles. The CTA pattern: this size + `→` arrow at 1.5rem.
- **Body** (400, 18–20px / 1.125–1.25rem, lh ~1.375): Primary prose. Max width 65–75ch enforced via `max-w-md` or `max-w-xl`. Use `text-pretty` for orphan control.
- **Label** (mono 500, 0.6875rem / 11px, +0.18em, uppercase): Section indexes (№ 01 — Section name), navigation, metadata, timestamps. Never used for primary meaning; always muted or faint color.

**The Tight Crown Rule.** Display headlines use leading below 1.0 (0.92 for display-1, 0.96 for display-2). This is intentional — the compressed stack reads as editorial confidence, not a production error. Never add extra line-height to fix perceived tightness; it dissolves the voice.

**The Light Italic Rule.** Emphasis in headlines is set in Satoshi Light Italic (font-light + italic), not bold. It creates a drop in visual weight that reads as a gentle aside, not a shout. The opposite of what bold would do — which is the point.

## 4. Elevation

This system is flat by default. No UI element carries a shadow at rest: no nav shadow, no button shadow, no card shadow. Depth is conveyed by tonal layering — Morning Cream vs. Soft Vellum — and by hairline rules (1px, Faint Rule color).

One deliberate exception exists: the app article card (the animated daily-piece mockup) carries a two-layer shadow to lift it off the page as a physical object, distinct from the page structure around it:

### Shadow Vocabulary

- **Article card lift** (`0 1px 0 rgba(26,24,20,0.04), 0 24px 60px -28px rgba(26,24,20,0.18)`): Used on the article card mockup only. The first layer is a hair of top-edge definition; the second is a wide, diffuse lift shadow with negative spread. It reads as physical, not digital.

**The Flat-By-Default Rule.** Shadows appear on exactly one component — the article card — and nowhere else. Any new component that reaches for `box-shadow` as a first instinct is wrong. Reach for tonal surface difference or a hairline rule instead. If neither works, reconsider the component's structure.

## 5. Components

### CTA / Download Link

The primary CTA is never a `<button>` element. It is a text link set at display-3 scale with an `→` arrow beside it. This is the only call-to-action pattern on the page; it should never be replaced with a conventional button.

- **Label:** display-3 (700, clamp 1.75–3rem, -0.02em tracking), color `--color-ink`
- **Arrow:** `→` glyph at 1.5rem, `translateY(2px)` for optical baseline alignment
- **Hover:** arrow translates 4px rightward, `transition: 500ms cubic-bezier(0.22, 1, 0.36, 1)`
- **No background, no border, no padding.** The text IS the button.

### Article Card (App Mockup)

The rotating daily-piece preview that anchors the DailyRitual section.

- **Corner style:** Generously curved (36px radius) — the only element on the page with this treatment
- **Background:** `linear-gradient(155deg, paper-soft 0%, paper-soft 45%, <category-hex>26 100%)` — a nearly invisible category tint at the bottom-right corner
- **Shadow:** Article card lift (see Elevation)
- **Internal padding:** 2–2.5rem
- **Category accent:** Applied to the category label text only (full hex), and the bottom-right gradient overlay (hex + `26` opacity in hex, ~15%)
- **Feedback buttons:** 36px circles, `border: 1px solid rule`, no background, `↑` `↓` glyphs

### Plans Grid

Two-column comparison panel (Free vs Plus).

- **Structure:** `display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: <rule-color>` — the gap is the divider; there are no explicit borders
- **Free cell:** Morning Cream background, 3rem padding
- **Plus cell:** Soft Vellum background + `linear-gradient(155deg, paper-soft, paper-soft 50%, oklch(92% 0.03 80))` — a warmer gradient at the corner suggesting premium
- **List items:** numbered with mono index (01, 02…), no bullets, `space-y-3`

### Worlds List

Twelve-row table of knowledge domains.

- **Structure:** border-top + border-bottom wrapper, each row has border-bottom; last child: no bottom border
- **Hover:** very faint category-hex tint on background (`<hex>0c` — ~5% opacity)
- **Active index:** category hex applied to the mono index number only
- **Hover underline:** a 2px strip that animates from 12px to 56px wide, in the category hex
- **No cards, no rounded corners, no shadows.** This is a list, not a grid of tiles.

### Navigation

- **Style:** Label utility (mono, 11px, +0.18em, uppercase) in `--color-ink-muted`
- **Hover:** color shifts to `--color-ink`, `transition: colors 150ms`
- **Links:** anchor links (`#section-id`), no active indicator needed on a one-page landing
- **Mobile:** Worlds and Modes links hidden below `sm` breakpoint; only the wordmark remains visible at smallest width

### Spectrum Bar

The signature graphic element — twelve equal-width strips of category colors forming a single horizontal band.

- **Height:** 2–4px (varies by context)
- **Animation on mount:** each strip scaleY from 0.4 to 1, staggered by 40ms, `cubic-bezier(0.22, 1, 0.36, 1)`
- **Use:** Hero separator (after the headline), footer top accent. Never inside content sections.

### Numbered Section Labels

Not a component per se — an editorial convention. Every section opens with a mono label in the format `№ [nn] — [Section name]`. Color: `--color-ink-muted`. This is the typographic equivalent of a chapter marker; it signals position in a linear reading flow.

## 6. Do's and Don'ts

### Do:
- **Do** use `oklch()` for every color value. The palette is OKLCH-native; never introduce hex-only values that weren't converted from an OKLCH token.
- **Do** keep body text between 65–75 characters per line (`max-w-md` or `max-w-xl` with `text-pretty`).
- **Do** use `cubic-bezier(0.22, 1, 0.36, 1)` as the easing function for all transitions and animations. It is the house motion signature.
- **Do** tint every neutral toward hue 80° with chroma between 0.004 and 0.010. Morning Cream and Rich Charcoal are never pure white or black.
- **Do** structure sections with the numbered label convention (№ nn — Section name) in mono uppercase before every headline.
- **Do** use hairline rules (`height: 1px; background: var(--color-rule)`) as the primary structural divider. Gap-as-divider (`gap: 1px; background: rule-color`) is the correct pattern for multi-column grids.
- **Do** set italic emphasis in headlines as `font-weight: 300; font-style: italic` (Satoshi Light Italic) — never as bold.
- **Do** let category accents appear only where they carry semantic domain meaning (category labels, constellation dots, spectrum bar). Nowhere else.

### Don't:
- **Don't** use a `<button>` element for the primary CTA. The download link is always a text-link at display-3 scale. Adding a conventional button shape (background, border, padding) breaks the editorial voice.
- **Don't** introduce cards with border-left / border-right accent stripes. The page has no side-stripe decoration anywhere. Use full borders or nothing.
- **Don't** add gradient text (`background-clip: text`) to any element. The display type is solid `--color-ink`. Gradient text is prohibited.
- **Don't** use glassmorphism (backdrop-filter blur + translucent panels) anywhere. The system is warm paper and flat surfaces.
- **Don't** add UI shadows to buttons, nav, inputs, or panels. The article card is the single exception; everything else is flat.
- **Don't** use a category accent as a button color, link color, or focus ring. Category colors are content identifiers, not UI affordances. (The Domain Colour Rule.)
- **Don't** add streaks, badges, progress bars, or any gamification UI pattern. Sohzo is explicitly not Duolingo. No reward loops, no streak counters, no trophy states.
- **Don't** add infinite-scroll patterns, "More articles" feeds, recommendation carousels, or any interface that suggests "there is always more." Sohzo is a closed container; one piece, one morning. (Anti-Medium / anti-Instagram / anti-X.)
- **Don't** show engagement metrics, share counts, view counts, or any social comparison signal. Sohzo has no public tallies. (Anti-Facebook / anti-Threads.)
- **Don't** use `#000000` or `#ffffff` directly. Always use the warmly-tinted token equivalents.
- **Don't** add leading below 0.9 on any non-display element, or above 1.5 on any element. Tight is purposeful; loose is lazy.
