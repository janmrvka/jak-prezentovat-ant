# 06 PLACEHOLDERS (ant)
Placeholder estetika pro stavy, kdy ještě nemáme reálný asset (foto, video, produktový shot, portrét). Pravidlo: **placeholder není absence obsahu — je to definovaný stylový stav.** Nesmí vypadat jako "díra v layoutu", musí vypadat záměrně.

---

## Princip
Placeholder splňuje tři podmínky najednou:
1. **Drží layout** — má přesný aspect ratio, neroztahuje se, nesvírá.
2. **Nese brand** — barva, pattern a typo z brand systému (žádný šedý čtverec).
3. **Je čitelně placeholder** — caption v `[ hranatých závorkách ]` dává jasně najevo, že tam má být reálný obsah.

Závorky `( )` patří brandu, `[ ]` patří placeholderům. Tím se jazykově nepřekrývají a čtenář (i designér) okamžitě pozná stav.

---

## Anatomie

```
┌─────────────────────────────┐
│ ╲ ╲ ╲ ╲ ╲ ╲ ╲ ╲ ╲ ╲ ╲ ╲    │  ← diagonální pruhy (45°, opacity 0.08)
│  ╲ ╲ ╲ ╲ ╲ ╲ ╲ ╲ ╲ ╲ ╲     │
│   ╲ ╲   [ portrét ]  ╲ ╲    │  ← caption: Inter Bold 16, caps, +2% letter-spacing
│    ╲ ╲ ╲ ╲ ╲ ╲ ╲ ╲ ╲ ╲     │
│     ╲ ╲ ╲ ╲ ╲ ╲ ╲ ╲ ╲ ╲    │
└─────────────────────────────┘
   accent fill (jedna z 5 pastelových barev)
```

- **Background:** jeden z accent colors (peach `#FFE4C1`, lavender `#DAD4FF`, yellow `#FFFD92`, pink `#FFE2EB`, sky `#D7EDFF`).
- **Pattern:** diagonální pruhy 45°, černá `#000000` s opacity 0.08 (default) / 0.12 (na světlejším pozadí, kde 0.08 zaniká).
- **Caption:** Inter Bold 16px, uppercase, letter-spacing +2%, barva `#000000`. Vždy v `[ závorkách ]`, mezery uvnitř závorek **jsou součástí stylu**.
- **Border-radius:** 0. Placeholdery jsou ostré — kontrast vůči roundovaným tlačítkům, nezaměnitelný stav.
- **Border:** žádný. Pruhy a caption nesou identitu.

---

## Aspect ratios
Definované poměry — placeholder vždy zná svůj rámec.

| Použití | Ratio | CSS |
|---|---|---|
| Portrét (osoba, profil) | 3 : 4 | `aspect-ratio: 3 / 4;` |
| Landscape (foto, scéna) | 16 : 9 | `aspect-ratio: 16 / 9;` |
| Square (produkt, ikon, social) | 1 : 1 | `aspect-ratio: 1 / 1;` |
| Hero / showcase | 21 : 9 | `aspect-ratio: 21 / 9;` |
| Video (custom) | 16 : 9 | `aspect-ratio: 16 / 9;` |

Jiný ratio než tady = záměrné rozhodnutí, ne improvizace. Buď přidáme do tabulky, nebo nepoužívat.

---

## Caption — slovník
Caption pojmenovává **typ chybějícího obsahu**, ne popis toho obsahu. České, lowercase uvnitř závorek.

- `[ portrét ]` — fotka osoby, profil
- `[ tým ]` — skupinová foto, kolektiv
- `[ produkt ]` — produktový shot
- `[ video ]` — video preview / poster frame
- `[ scéna ]` — atmosférická / kontextová foto
- `[ logo klienta ]` — pro grid social proof
- `[ ilustrace ]` — kustom grafika
- `[ screenshot ]` — produktové UI

Vlastní typ? Přidej do slovníku, ne do zadání ad-hoc. Drží konzistenci napříč projektem.

---

## CSS implementace (web)

```css
/* Placeholder — base */
.placeholder {
  position: relative;
  display: grid;
  place-items: center;
  background: var(--ph-color, #FFE4C1); /* default peach */
  background-image:
    repeating-linear-gradient(
      45deg,
      transparent 0,
      transparent 14px,
      rgba(0, 0, 0, 0.08) 14px,
      rgba(0, 0, 0, 0.08) 15px
    );
  overflow: hidden;
  isolation: isolate;
}

/* Caption */
.placeholder__caption {
  font-family: var(--font-body); /* Inter */
  font-weight: 700;
  font-size: 1rem; /* 16px */
  letter-spacing: 0.02em; /* +2% */
  text-transform: uppercase;
  color: #000;
  background: rgba(255, 255, 255, 0.85); /* lehký ochranný podklad pod caption — drží čitelnost přes pruhy */
  padding: 0.5rem 1rem;
  white-space: nowrap;
}

/* Aspect ratio variants */
.placeholder--portrait  { aspect-ratio: 3 / 4; }
.placeholder--landscape { aspect-ratio: 16 / 9; }
.placeholder--square    { aspect-ratio: 1 / 1; }
.placeholder--hero      { aspect-ratio: 21 / 9; }

/* Color variants */
.placeholder--peach    { --ph-color: #FFE4C1; }
.placeholder--lavender { --ph-color: #DAD4FF; }
.placeholder--yellow   { --ph-color: #FFFD92; }
.placeholder--pink     { --ph-color: #FFE2EB; }
.placeholder--sky      { --ph-color: #D7EDFF; }

/* Tmavší varianta pruhů — pro pozadí, kde 0.08 zaniká */
.placeholder--strong-pattern {
  background-image:
    repeating-linear-gradient(
      45deg,
      transparent 0,
      transparent 14px,
      rgba(0, 0, 0, 0.12) 14px,
      rgba(0, 0, 0, 0.12) 15px
    );
}
```

```html
<figure class="placeholder placeholder--portrait placeholder--lavender">
  <span class="placeholder__caption">[ portrét ]</span>
</figure>
```

---

## Pravidla použití

### DO
- **Rotace barev v sekci:** dva placeholdery vedle sebe = dvě různé accent barvy. Nikdy dva peach v řadě.
- **Konzistence pattern density:** v rámci jedné stránky drž buď 0.08 nebo 0.12, ne kombinaci.
- **Caption uprostřed:** vertikálně i horizontálně. Žádné off-center experimenty (to už je kompoziční rozhodnutí pro reálný asset, ne pro placeholder).
- **Min size:** 120 × 120px. Pod tím caption nečitelný, použij solid accent box bez patternu a bez caption.

### DON'T
- **Žádný šedý placeholder.** `#E7E8E9` ani `#AEB1B7` — to je UI gray, ne placeholder. Placeholder má brand barvu.
- **Žádné `image-broken` ikony.** `[ portrét ]` v textu je explicitnější a brandovější než ikona z lucide.
- **Žádné loading skeletons jako placeholdery v designu.** Skeleton je runtime stav (data se načítají), placeholder je design stav (asset chybí). Nezaměňovat.
- **Žádný "Lorem Image" / `picsum.photos` / náhodná stocková fotka.** Placeholder = vědomá absence, ne falešná přítomnost.
- **Max 3 v jedné sekci.** Nad 3 už to není sekce s placeholdery, ale wireframe — a wireframe se klientovi neposílá jako finál.

---

## Vztah k labelům (z 01)
Placeholder caption a label (WOW, AHA, BOX…) **se nikdy nepřekrývají na stejném placeholderu**. Pokud chceš nad placeholderem label, posaď ho **mimo rámec** placeholderu (přesah do okolí), ne dovnitř. Důvod: label v závorkách `( )` a caption v `[ ]` na jednom prvku = vizuální zmatek.

---

## Dark mode / inverze
Pokud je sekce na dark pozadí (`#000` / `#191A1B`):
- Pastel accent zůstává — kontrast vůči dark pozadí stačí.
- Pruhy přepnout na **bílou** s opacity 0.08, ne černou.
- Caption: **#000 zůstává** (čitelnost přes pastel + bílý ochranný podklad pod captionem).

```css
.section--dark .placeholder {
  background-image:
    repeating-linear-gradient(
      45deg,
      transparent 0,
      transparent 14px,
      rgba(255, 255, 255, 0.08) 14px,
      rgba(255, 255, 255, 0.08) 15px
    );
}
```

---

## Když placeholder zmizí
Při výměně placeholderu za reálný asset:
- **Aspect ratio zůstává** — asset musí ratio respektovat (cropping v CMS / Figmě, ne roztahování).
- **Pozice v gridu se nemění** — placeholder = přesný stand-in, ne přibližný.
- **Caption zmizí kompletně** — nepřevádět na alt text 1:1, alt text píš zvlášť pro screen readery (popis reálného obsahu, ne `portrét`).
