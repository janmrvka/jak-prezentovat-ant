# (ant) — Brand & Design System

Full-service Czech digital agency. **Outsider with a sharp humor.** Mantra: **(WOW) je naše (PROČ).**

This project is the working brand system for `(ant)` — design tokens, component primitives, and ready-to-use templates for the two formats the agency ships most: **landing pages** and **client presentations**.

---

## Index

```
colors_and_type.css     ← single source of truth for tokens (color, type, spacing, motion)
components.css          ← btn, label, placeholder, card, etc.
brand.md                ← brand voice & visual rules in one place (this file expanded)
SKILL.md                ← how to design AS (ant) — for AI / new designers

assets/
  logo/                 ← (ant) marks — green, black, in svg + png
  labels/               ← 28 three-letter SVG chips (WOW, AHA, GO, BUY...)
fonts/                  ← Aktiv Grotesk Ex (display), Inter (body)

preview/                ← Design System cards (Type, Colors, Spacing, Components, Brand)
templates/
  landing-page.html     ← full LP template per `03_FORMAT_WEB_LP.md`
  presentation.html     ← 6-slide client deck per `04_FORMAT_PREZENTACE.md`
  ui-kit.html           ← live component reference
```

---

## CONTENT FUNDAMENTALS

### Who (ant) is
Full-service digital agency that **doesn't read the playbook — writes prožitky** (experiences). Outsider / Challenger archetype. Not a clown — sharp humor is a **tool**, not the identity.

- **Mantra:** (WOW) je naše (PROČ).
- **Tagline (EN):** (ant) crafted for (WOW).
- **Default CTA:** *Pojďme se pobavit.*

### Voice — three pillars
1. **Lidský & srozumitelný** — common sense over academic jargon.
2. **Drive** — push, momentum, no padding.
3. **Argumenty + emoce** — sell results AND emotion. Never just one.

### Posture
**Neomlouváme se, konáme.** No "možná by se dalo zvážit", no "pokud byste byli ochotni". One sentence, clear, no cushion.

### Vykání vs tykání (formal vs informal)
| Channel | Audience | Form |
|---|---|---|
| Web (homepage, services), client decks, sales | Klient | **Vykání** — partner, not corporate |
| Web (kariéra), Instagram, recruitment | Talent | **Tykání** — drsnější, lidštější |

Inside one channel: never mix. Either ven (vy) or dovnitř (ty).

### Length & rhythm
- **Krátké věty.** Period = brake. Short sentence holds attention.
- No long-form without reason. If it must be a paragraph, **rozsekej ho**.
- **Punchy line at end of section** — refrain, claim, question. Not in the middle.

### Vocabulary — the brackets
**`( )` = brand. `[ ]` = placeholder.** Never overlap.

Brand terms in parens are **CAPS** (exception: `(ant)` is lowercase). Diacritics stay (`(PROČ)` not `(PROC)`).

| Token | Meaning |
|---|---|
| `(ant)` | The brand. Always lowercase, always with parens. Never *Ant*, *ANT*, *(Ant)*. |
| `(WOW)` | The effect, the mantra, the goal. |
| `(WTF)` | An idea on the edge. |
| `(AHA)` | Moment of insight. |
| `(YES)` | Affirmation. |
| `(FCK)` | Frustration / emphasis. |
| `(PROČ)` | The "why". |

### Don't say
- Korporát balast: *synergie, leverage, best-in-class, komplexní řešení, rádi bychom Vás informovali*
- Falešná pokora: *možná by se dalo zvážit, pokud byste byli ochotni*
- Buzzwords: *AI-powered* (as goal), *disruptivní* (about ourselves), *revoluční*
- Emoji v B2B (klient): zero. In recruitment: max 1–2.
- `[ ]` in copy: reserved for placeholders.

### Korporát → (ant) — quick rewrites
| Korporát | (ant) |
|---|---|
| Kontaktujte nás. | Pojďme se pobavit. |
| Nabízíme strategické poradenství. | Řekneme vám rovnou, co je špatně. A jak to napravit. |
| Naším cílem je dlouhodobý růst. | Dělat to, co funguje. Tečka. |

Rule: **(ant) version is never longer.**

---

## VISUAL FOUNDATIONS

### Color
| Token | Hex | Use |
|---|---|---|
| `--ant-green` | `#5BFFC4` | Primary signature. CTAs, hover, accent on black, brand parens on dark. |
| `--ant-black` | `#000000` | Default ink, dark surfaces, label boxes, logo. |
| `--ant-white` | `#FFFFFF` | Default canvas. |
| `--ant-gray-light` | `#E7E8E9` | Rules, dividers, UI scaffolding. |
| `--ant-gray-dark` | `#AEB1B7` | Captions, muted text. |
| `--ant-near-black` | `#191A1B` | Deep stage / footer surface. |
| `--ant-peach` | `#FFE4C1` | Accent — placeholders, label rotation. |
| `--ant-lavender` | `#DAD4FF` | Accent. |
| `--ant-yellow` | `#FFFD92` | Accent. |
| `--ant-pink` | `#FFE2EB` | Accent. |
| `--ant-sky` | `#D7EDFF` | Accent. |

**Rules.** Green is signature, not background — never type body copy in green. Grays are UI scaffolding only — **never use as placeholder fill** (placeholder gets a pastel accent). Pastel accents pair with **black ink only**, never with each other as fg/bg.

### Typography
**Aktiv Grotesk Ex** (display) + **Inter** (body). Italics on Aktiv Ex are **forbidden** — it's an extended display font; italics break the brand. Italics live in Inter.

| Role | Family | Weight | Size token |
|---|---|---|---|
| H1 hero claim | Aktiv Grotesk Ex | 700 Bold | `--fs-h1` (clamp 48 → 136px) |
| H2 section head | Aktiv Grotesk Ex | 600 SemiBold | `--fs-h2` (clamp 36 → 80px) |
| H3 value / eyebrow head | Aktiv Grotesk Ex | 500 Medium | `--fs-h3` (clamp 32 → 52px) |
| H4–H5 small head | Aktiv Grotesk Ex | 400 Regular | `--fs-h4` (clamp 24 → 32px) |
| Body | Inter | 300 Light (default) | `--fs-body` (clamp 17 → 22px) |
| UI / form / nav | Inter | 400 Regular | `--fs-small` |
| Strong, emphasis | Inter | 700 Bold | inherits |
| Eyebrow / caps label | Inter Bold + `letter-spacing: 0.08em` | 700 | `--fs-label` |

All headings via `clamp()` — fluid across breakpoints, no steps at boundaries. UI bits stay fixed (rhythm of the interface).

**Web font loading.** On production, Aktiv Ex loads via Adobe Fonts:
```html
<link rel="stylesheet" href="https://use.typekit.net/zch7ids.css">
```
For PDF / email / artifacts the local `.otf`s in `fonts/` are wired up in `colors_and_type.css`.

### Layout (web)
| Breakpoint | Width |
|---|---|
| mobile | ≤ 520px |
| tablet | ≤ 720px |
| small desktop | ≤ 960px |
| medium desktop | ≤ 1200px |
| full | ≥ 1920px |

Two containers — `--container-default: 1280px` (reading) and `--container-wide: 1680px` (grid / hero / showcase). Section padding is fluid: `padding-block: clamp(5rem, 10vw, 8rem);`. Headline and grid inside a section share the **same left edge** — pad the container, not the grid separately.

Alignment: **left or centered**, never justified.

### Whitespace
Generous. (ant) breathes. White space is content.

### Placeholders (`[ ]`)
A defined design state, not a missing asset. Three rules at once: **holds layout, carries brand, reads as placeholder.**

- Background: pastel accent (peach / lavender / yellow / pink / sky) — **never gray**.
- Pattern: 45° diagonal black stripes at 0.08 opacity (or 0.12 on lighter ground).
- Caption: `[ noun ]` — Inter Bold 16px, uppercase, `+2%` letter-spacing, on `rgba(255,255,255,0.85)` chip.
- Border-radius: **0**. Sharp. Contrasts with rounded buttons.
- Aspect ratios: 3:4 (portrait), 16:9 (landscape), 1:1 (square), 21:9 (hero). Anything else is a deliberate decision.
- Caption vocabulary (Czech, lowercase inside brackets): `[ portrét ] [ tým ] [ produkt ] [ video ] [ scéna ] [ logo klienta ] [ ilustrace ] [ screenshot ]`.
- Max 3 per section. Two next to each other = two **different** accents. Never two peach in a row.

### Surfaces
- `surface-dark` — black canvas, white ink, green accents. Use for hero sections, stage moments, footer.
- `surface-green` — full neon-mint surface, black ink. High-impact CTA panels, punchy lines. Use sparingly — green is loud.
- Default white canvas with black ink elsewhere.

---

## ICONOGRAPHY

(ant) doesn't ship a generic icon set. Iconic visual language = **3-letter Labels** + **brand parens** + **placeholder pattern**. Icons (when needed inside UI — arrows, close, search) stay minimal, monoline, currentColor — line-icon set, never filled-color libraries.

### Labels (Štítky) — the signature element
28 SVG chips in `assets/labels/`. Black box, white 3-letter mark, parens **integrated** into the artwork.

**Slovník (vocabulary)**
| Group | Codes |
|---|---|
| Emotion / reaction | WOW, AHA, OMG, WTF, LOL, FCK, JOY, HOT, FUN, POP |
| Action / CTA | GO, RUN, BUY, WIN, NEW |
| Function / category | WEB, ADS, SOC, TXT, BOX, TIP, HOW, WHY, 404 |
| Meta / posture | CEO, EGO, THX, YES |

**Rules**
- **Max 1 label per layout block** (section / slide / card). More = inflation, label loses impact.
- **Rotation is the move.** Labels look better at an angle than straight. Tested values: **−10°, 20°, 25°**. Adjacent labels alternate direction; never two at the same angle next to each other.
- **Inversion.** Original = black box / white text. On dark backgrounds, invert (`filter: invert(1)`). On pastel or light surfaces, keep original.
- Labels and placeholders **never overlap on the same element**. Place the label *over the edge* of a placeholder, not inside its frame — `( )` and `[ ]` together = visual confusion.
- Embed inline (`<img src="assets/labels/WOW.svg">`) so they stay crisp and inheritable; rotate via wrapper.

### The (ant) logo
Primary logotype is `(ant)` itself — **the parens are part of the mark**, never strip them.
- Clear space: at least the width of the letter "a" around the logo.
- Forbidden: deformation, color outside the palette (green / black / white only), removed parens.
- Black on light, white on dark, green for signature moments.

---

## How to design AS (ant) — quick

1. Start by deciding the surface — black, white, or a single accent block. Not all three on one screen.
2. Set type with the display family on heads, Inter on body. No italics on Aktiv Ex.
3. Choose **one** label for the block (or none). Rotate it. Pick a code that fits the moment.
4. If imagery is missing, draw a placeholder — pastel accent + diagonals + `[ caption ]`.
5. CTA wording: usually "Pojďme se pobavit." Otherwise short, action-led.
6. Punchy line at the end of the section, not the middle. Period = brake.

Full guide: `SKILL.md`.

---

## Source

This system is distilled from the official `(ant)` brand modules: brand visuals, brand voice, format guides for web LP and prezentace, placeholders, and audience definition (klient vs talent).
