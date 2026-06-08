# 03 WEB & LANDING PAGE (ant)
## Struktura LP (Blueprint)
1. **Hero Sekce:** Jasný claim, (WOW) vizuál, primární CTA.
2. **Problém/Pain Point:** Co klienta pálí?
3. **Řešení (ant) cestou:** Jak to vyřešíme jinak?
4. **Social Proof:** Loga klientů, metriky, výsledky.
5. **Proces:** Jak probíhá spolupráce.
6. **Závěrečné CTA:** "Pojďme se pobavit".

## Vizuální pravidla pro web
- Práce s prostorem (white space).
- Čistá typografie, zarovnání na střed nebo vlevo (nikdy do bloku).
- Interaktivní prvky v Primary Green.

## Layout systém (responsive)
Pravidla, aby obsah nebyl roztažený na 4K a nesvíral se na malých displejích. Std napříč breakpointy.

### Breakpointy
- mobil ≤ 520px
- tablet ≤ 720px
- malý desktop ≤ 960px
- střední desktop ≤ 1200px
- full ≥ 1920px

### Container (max-width)
Dva containery — jeden pro čtený obsah, druhý pro showcase / grid / hero. Centrované přes `margin-inline: auto`.

```css
:root {
  --gap-x: clamp(1.5rem, 4vw, 4rem);
  --container-default: min(100% - 2 * var(--gap-x), 1280px); /* text, body sekce */
  --container-wide:    min(100% - 2 * var(--gap-x), 1680px); /* grid, hero, showcase */
}
```

- **1280px default** — řádek textu zůstává čitelný (60–80 znaků), nepůsobí korporátně.
- **1680px wide** — gridy a hero mají prostor, na 4K to nevypadá jako Bootstrap.

### Section padding (Y)
Vertikální padding sekcí — fluid, žádné fixní `px`.

```css
section { padding-block: clamp(5rem, 10vw, 8rem); }
```

### Edge alignment
Headline a grid uvnitř sekce musí mít stejný **levý edge**. Padding aplikuj na celou sekci (přes container), ne separátně na grid — jinak nadpis a grid "tečou" o pár pixelů jinam.

## Typografie pro web
- **Aktiv Grotesk Ex** se na webu načítá přes Adobe Fonts (Typekit), ne z lokálních `.otf`.
- **Embed kód do `<head>`:**
  ```html
  <link rel="stylesheet" href="https://use.typekit.net/zch7ids.css">
  ```
- **Inter** se načítá z Google Fonts (nebo si hostuj `./Inter/static/Inter_18pt-Light.ttf` a `Inter_28pt-Bold.ttf` lokálně, pokud potřebuješ kontrolu nad optickými velikostmi).
- **Font stack v CSS:**
  ```css
  --font-display: "aktiv-grotesk-extended", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  ```
- **Pravidlo PDF/email:** Pokud generuješ PDF nebo HTML email z webové šablony, font musí být embedded nebo nahrazený fallbackem — Typekit v Outlooku a v izolovaných PDF rendererech nefunguje.

## Typografická scale (web)
Hierarchie viz `01_BRAND_VISUALS.md`. Tady je webová implementace přes `clamp()` — fluid napříč breakpointy, žádné schody na hranicích.

```css
--h1-hero:   clamp(3rem,    9vw,   8.5rem);   /* hero claim */
--h2-section: clamp(2.25rem, 6vw,   5rem);     /* sekční nadpis */
--h3-value:  clamp(2.5rem,  5.5vw, 4.75rem);  /* podtitulek, value blok */
--body:      clamp(1.05rem, 1.4vw, 1.35rem);  /* odstavec */
```

Pravidlo: všechny nadpisy přes `clamp()`, ne fixní `px`. Jediná výjimka — UI drobnosti (label, caption), kde fluid škálování ruší rytmus rozhraní.