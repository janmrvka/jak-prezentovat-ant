# SKILL — How to design AS (ant)

This file is the operator manual: a checklist for any human or AI shipping work in the `(ant)` brand. **Read all of it before designing.** Pair with `colors_and_type.css` (tokens) and `components.css` (primitives).

---

## 1. Bootstrap a new file

Every HTML artifact for `(ant)` starts with:

```html
<link rel="stylesheet" href="colors_and_type.css">
<link rel="stylesheet" href="components.css">
```

Adjust the relative path. Don't redefine tokens locally — extend.

For a production website use Adobe Fonts for Aktiv Ex and Google Fonts for Inter:
```html
<link rel="stylesheet" href="https://use.typekit.net/zch7ids.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap" rel="stylesheet">
```

---

## 2. Decisions before pixels

In order:

1. **Audience** → klient or talent? Decides vy/ty, density of humor, emoji budget.
2. **Surface** → white, black, or one accent block? **Not three.** One main surface per screen / slide.
3. **One label, or none.** Pick the code from the vocabulary table that *names the moment*.
4. **Punchy line** — what one sentence ends this section?
5. **CTA** — default "Pojďme se pobavit."

Only then start arranging.

---

## 3. Voice — on every line of copy

- Short sentences. Period is a brake.
- One idea per sentence.
- No corporate balast (`synergie`, `komplexní`, `lídr trhu`).
- No fake humility (`možná by se dalo`, `pokud byste byli ochotni`).
- No `[ ]` in copy — those are placeholders.
- `(ant)` is always lowercase + parens. Other brand tokens (`(WOW)`, `(WTF)`, `(PROČ)`) are CAPS + parens. Diacritics stay.
- One label maximum per section / slide / card. More dilutes.
- Punchy line lives **at the end** of a block. Not in the middle.

If a sentence is longer than the corporate version it replaces, **rewrite it**.

---

## 4. Type — what to reach for

| Want to write | Use |
|---|---|
| Hero claim, single line | `<h1>` — Aktiv Ex Bold 700, fluid clamp 48–136px |
| Section header | `<h2>` — Aktiv Ex SemiBold 600 |
| Sub / value head | `<h3>` — Aktiv Ex Medium 500 |
| Small head | `<h4>` — Aktiv Ex Regular 400 |
| Body copy | `<p>` — Inter **Light 300** (yes, light is the default) |
| UI / form / nav | Inter Regular 400 |
| Bold inside text | `<strong>` — Inter Bold 700 |
| Eyebrow caps | `.eyebrow` — Inter Bold + 8% tracking + uppercase |
| Caption | `.caption` — Inter Regular small, gray-dark |

**Never** italicize Aktiv Ex. Italics live in Inter.

Heads use `text-wrap: balance`, body uses `text-wrap: pretty`. Both are already on the base classes.

---

## 5. Color — what goes where

- **Black ink on white** is the default reading surface.
- **Green is signature, not background.** CTAs, hover, accent on black, the parens that emphasise a brand token. Never run body copy in green.
- **Pastel accents** (`peach, lavender, yellow, pink, sky`) are for: placeholders, accent blocks, single-color section panels. Always paired with **black ink only**, never with each other as fg/bg.
- **Grays are scaffolding** — dividers, captions, muted UI. **Never** as a placeholder fill.
- Two pastel placeholders next to each other = **two different** accents. Never two peach in a row.

Surfaces (utility classes):
- `.surface-dark` — black canvas, white ink, green accents.
- `.surface-green` — neon-mint canvas, black ink. Sparingly.
- `.surface-near-black` — `#191A1B`, slightly softer than pure black for stage moments.

---

## 6. Labels — the signature move

A 3-letter chip in parens. Black box, white text. Sits on the page rotated.

```html
<span class="label-svg label-rot-l">
  <img src="assets/labels/WOW.svg" alt="(WOW)">
</span>
```

**Vocabulary**
- Emotion: WOW AHA OMG WTF LOL FCK JOY HOT FUN POP
- Action: GO RUN BUY WIN NEW
- Function: WEB ADS SOC TXT BOX TIP HOW WHY 404
- Meta: CEO EGO THX YES

**Rotation values** that work: `-10°`, `20°`, `25°`. Alternate direction between adjacent labels.

**Inversion.** On dark surfaces add `class="label-invert"` (it's a CSS filter). On pastel and light surfaces, keep the original black/white.

**Don't overlap** a label with a placeholder on the same element. The label sits *over the edge* — outside the placeholder frame, dipping into the surrounding whitespace. `( )` and `[ ]` together inside one frame = visual chaos.

---

## 7. Placeholders — the absence design

When you don't have the asset, you build a deliberate placeholder. Never gray, never `picsum`, never a broken-image icon.

```html
<figure class="placeholder placeholder--portrait placeholder--lavender">
  <span class="placeholder__caption">[ portrét ]</span>
</figure>
```

- Aspect ratios: `--portrait` 3:4, `--landscape` 16:9, `--square` 1:1, `--hero` 21:9.
- Pastel fill via modifier (`--peach --lavender --yellow --pink --sky`).
- Caption vocabulary: `[ portrét ] [ tým ] [ produkt ] [ video ] [ scéna ] [ logo klienta ] [ ilustrace ] [ screenshot ]`. Lowercase inside brackets, with the spaces.
- Max 3 per section. Above that you're shipping a wireframe.

---

## 8. Buttons & links

```html
<a class="btn btn--primary" href="#">Pojďme se pobavit <span class="arrow">→</span></a>
<a class="btn btn--ghost"   href="#">Více o nás</a>
```

- Primary = neon green pill, black text. Hover swaps to black/green.
- Ghost = transparent, black border. Hover fills black/white.
- Pill radius (`--radius-pill`) only on buttons. Cards stay slightly squared (`--radius-md`). Placeholders stay sharp (`0`).
- Default CTA copy: **"Pojďme se pobavit."**

Inline links keep the underline; on hover they invert into a green highlight.

---

## 9. Layout & rhythm

- Two containers. `--container-default` (1280) for reading; `--container-wide` (1680) for showcase.
- Section padding fluid: `padding-block: clamp(5rem, 10vw, 8rem);`.
- Headline left-edge = grid left-edge. Pad the container, not the grid separately.
- Whitespace is content. (ant) breathes.

---

## 10. Two formats — the ones we ship most

### Web landing page (`templates/landing-page.html`)
1. Hero — claim + (WOW) visual + primary CTA
2. Pain point — what hurts the client
3. Řešení (ant) cestou — how we solve it differently
4. Social proof — client logos, metrics, results
5. Proces — how the work runs
6. Závěrečné CTA — *Pojďme se pobavit.*

### Client deck (`templates/presentation.html`)
6 slides. 1920×1080. **Minimum text** per slide.
1. Intro — (ant) logo, project name, subtitle
2. Mise — (WOW) je naše (PROČ)
3. Metriky — headline + 4 numbers
4. Punchy line — one giant thought
5. Showcase — image grid
6. Závěr — recap + next step

Each slide carries `(ant)` as a footer signifikant. Each slide has a heading in parens or above it.

---

## 11. Don't checklist

- Don't italicize Aktiv Grotesk Ex.
- Don't body-copy in green.
- Don't use gray as a placeholder fill.
- Don't put `[ ]` inside marketing copy.
- Don't write `Ant`, `ANT`, or `(Ant)`. It's `(ant)`.
- Don't strip the parens from the logo.
- Don't put two labels in the same block.
- Don't put a label *inside* a placeholder.
- Don't rotate adjacent labels in the same direction.
- Don't run two pastel placeholders of the same color side by side.
- Don't justify text. Don't center long body copy.
- Don't use emoji in B2B / klient communication. (Recruitment: 1–2 max.)
- Don't pad copy. If it's longer than the corporate version, it's wrong.

---

## 12. Source files

- `01_BRAND_VISUALS.md` — logo, color, typography, labels.
- `02_BRAND_VOICE.md` — voice, vocabulary, rewrites.
- `03_FORMAT_WEB_LP.md` — LP blueprint and web layout.
- `04_FORMAT_PREZENTACE.md` — slide framework.
- `06_PLACEHOLDERS.md` — placeholder anatomy.
- `08_CILOVKA.md` — audiences, channel × tone map.
- `07_KULTURA.md` — internal culture (do **not** mirror in external comms).
