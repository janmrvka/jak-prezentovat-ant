# 01 BRAND VISUALS (ant)
## Logo & Signifikant
- **Primární logo:** (ant) v závorkách. Závorky jsou pevnou součástí identity.
- **Ochranná zóna:** Minimálně šířka písmene "a" kolem loga.
- **Zakázané:** Deformace, změna barev mimo povolené, odstranění závorek.

## Barevnost (HEX)
- **Primary Green:** #5BFFC4 (Fresh, Digital)
- **Primary Black:** #000000 (Základ)
- **Grays:** #E7E8E9 (Light), #AEB1B7 (Dark)
- **Accents:** Brown (#FFE4C1), Purple (#DAD4FF), Yellow (#FFFD92), Pink (#FFE2EB), Blue (#D7EDFF).

## Typografie
Zdroj pravdy: oficiální brand manuál — https://brand.antstudio.cz/pisma

### Aktiv Grotesk Ex (hlavní písmo)
- **Použití:** Nadpisy. Signifikant značky.
- **Primární řezy podle manuálu:** Regular 400, Medium 500, SemiBold 600, Bold 700.
- **Dostupné navíc (rezerva pro výjimky):** Hair, Thin, Light, Black.
- **Italics:** dostupné pro všechny řezy, ale **nepoužívat** — Aktiv Ex je extended display font, italics narušují brand. Italics drž v Inter.
- **Zdroje:**
  - *Web:* Adobe Fonts (Typekit) — `<link rel="stylesheet" href="https://use.typekit.net/zch7ids.css">`. Detail v `03_FORMAT_WEB_LP.md`.
  - *Desktop / Figma / prezentace:* lokální `.otf` v `./Aktiv Grotesk Ex/`.
- **Doporučené nasazení:**
  - *Bold 700* — H1, claimy, hero, punchy lines.
  - *SemiBold 600* — H2, sekční nadpisy, label nadpisy.
  - *Medium 500* — H3, podtitulky, navigace, eyebrow.
  - *Regular 400* — H4–H5, drobné nadpisy, kde má být typo nadpis bez váhy.

### Inter (doplňkové písmo)
- **Použití:** Odstavcový text, UI, body copy, drobnosti.
- **Řezy:** Light, Regular, Bold (podle brand manuálu).
- **Cesta:** `./Inter/` — variable fonty (`Inter-VariableFont_opsz,wght.ttf`) + `./Inter/static/` se všemi řezy a optickými velikostmi (18pt, 24pt, 28pt).
- **Konkrétní soubory podle brand manuálu (web):**
  - Body: `./Inter/static/Inter_18pt-Light.ttf`
  - Bold/strong: `./Inter/static/Inter_28pt-Bold.ttf`
  - Pravidlo optické velikosti: malé texty → 18pt, střední → 24pt, velké/display → 28pt.
- **Doporučené nasazení:**
  - *Light* — body text na webu (default podle manuálu), lead odstavce, vzdušné bloky.
  - *Regular* — UI, drobné texty, kde Light ztrácí čitelnost.
  - *Bold* — zvýraznění uvnitř textu (`<strong>`), důrazy.
- **Tip pro web:** Pokud nepotřebuješ optické velikosti řešit ručně, použij variable font — jeden soubor, plná škála vah.

## Typografická hierarchie
Abstraktní škála pro celý brand — platí napříč formáty (web, prezentace, print). Konkrétní velikosti řeší daný formát (web: viz `03_FORMAT_WEB_LP.md`).

- **H1 hero** — dominantní claim, hero sekce. Aktiv Grotesk Ex Bold 700.
- **H2 section** — sekční nadpis. Aktiv Grotesk Ex SemiBold 600.
- **H3 value** — podtitulek, value blok, eyebrow nadpis. Aktiv Grotesk Ex Medium 500.
- **H4–H5** — drobné nadpisy, kde má být typo nadpis bez váhy. Aktiv Grotesk Ex Regular 400.
- **Body** — odstavcový text. Inter Light (default) / Regular (UI, drobnosti).
- **Strong** — zvýraznění uvnitř textu. Inter Bold.
- **Caption** — drobnosti, popisky, meta. Inter Regular, menší stupeň.

## Labels (Štítky)
- **Cesta:** `./Labels/SVG/` — 28 SVG souborů, 3 znaky, černý box / bílý text, závorky integrované.
- **Slovník:**
  - *Emoce/reakce:* WOW, AHA, OMG, WTF, LOL, FCK, JOY, HOT, FUN, POP
  - *Akce/CTA:* GO, RUN, BUY, WIN, NEW
  - *Funkční/kategorie:* WEB, ADS, SOC, TXT, BOX, TIP, HOW, WHY, 404
  - *Meta/postoj:* CEO, EGO, THX, YES
- **Pravidlo:** Maximálně 1 label per layout block (sekce, slide, card). Více = inflace, label ztrácí impact.

### Doporučení z praxe (ne z oficiálního manuálu)
Tohle není brand zákon, je to opěrný bod z (ant) projektů — dokud nebude pravidlo definované v oficiálním manuálu antstudio.cz, drž se toho jako vodítka.

- **Rotace:** Štítky fungují líp pod úhlem než narovnané. Osvědčené hodnoty: cca **-10°, 20°, 25°**. Sousední labely střídat, ne dva ve stejné rotaci vedle sebe.
- **Inverze:** Originál = černý box / bílý text. Na tmavém pozadí inverze. Na světlém nebo accent pozadí ponechat originál.