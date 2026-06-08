// === JAK PREZENTOVAT ANT — konfigurace slidů ===

export const SLIDES = [
  {
    "id": "title",
    "template": "HeroSlide",
    "content": {
      "title": "Jak prezentovat?",
      "subtitle": ""
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "accentColor": "text-ant-green",
      "backgroundVariant": "none"
    },
    "notes": "Úvodní slide"
  },
  {
    "id": "co-nedelejte",
    "template": "CheckerSlide",
    "content": {
      "title": "Co nedělejte.",
      "subtitle": "Praktická varování před nejčastějšími chybami.",
      "items": [
        "❌ Nesdílejte více tabulek/grafů na jednom slajdu",
        "❌ Nemějte více lidí s kamerou zapnutou",
        "❌ Nepoužívejte brand klienta v prezentaci",
        "❌ Nepřipravujte se poslední den",
        "❌ Nelaďte prezentaci všichni dohromady",
        "❌ Neprezentujte něco, co jste nedělali (bez detailní znalosti)",
        "❌ Nemluvte o technických detailech, když management chce čísla"
      ]
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "accentColor": "text-ant-green",
      "accentLine": true,
      "itemLayout": "list"
    },
    "notes": ""
  },
  {
    "id": "stalo-se",
    "template": "ManifestoSlide",
    "content": {
      "statement": "Stalo se.",
      "sticker": {
        "name": "WTF",
        "position": "top-right",
        "rotation": 10
      }
    },
    "config": {
      "backgroundColor": "bg-ant-brown",
      "textColor": "text-black",
      "backgroundVariant": "none"
    },
    "notes": "Přechodový slide — uvození příkladu / situace, která se stala"
  },
  {
    "id": "prezentace-ktere-prodavaji",
    "template": "ManifestoSlide",
    "content": {
      "statement": "Prezentace,\nkteré prodávají.",
      "sticker": {
        "name": "WOW",
        "position": "top-right",
        "rotation": 12
      }
    },
    "config": {
      "backgroundColor": "bg-ant-yellow",
      "textColor": "text-black",
      "backgroundVariant": "none"
    },
    "notes": ""
  },
  {
    "id": "priprava-divider",
    "template": "HeroSlide",
    "content": {
      "title": "Příprava.",
      "subtitle": ""
    },
    "config": {
      "backgroundColor": "bg-ant-yellow",
      "textColor": "text-black",
      "accentColor": "text-black",
      "backgroundVariant": "none"
    },
    "notes": "Sekce: Příprava"
  },
  {
    "id": "jednodusse-a-jasne",
    "template": "ManifestoSlide",
    "content": {
      "statement": "Jednoduše\na jasně.",
      "sticker": {
        "name": "YES",
        "position": "top-right",
        "rotation": -8
      }
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "backgroundVariant": "none"
    },
    "notes": ""
  },
  {
    "id": "hodnota-divider",
    "template": "HeroSlide",
    "content": {
      "title": "Hodnota.",
      "subtitle": "Výsledky"
    },
    "config": {
      "backgroundColor": "bg-ant-yellow",
      "textColor": "text-black",
      "accentColor": "text-black",
      "backgroundVariant": "none"
    },
    "notes": "Sekce: Hodnota / Výsledky"
  },
  {
    "id": "pridana-hodnota",
    "template": "ManifestoSlide",
    "content": {
      "statement": "Přidaná\nhodnota.",
      "sticker": {
        "name": "WIN",
        "position": "top-right",
        "rotation": 8
      }
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "backgroundVariant": "none"
    },
    "notes": ""
  },
  {
    "id": "citelnost",
    "template": "ManifestoSlide",
    "content": {
      "statement": "Čitelnost.",
      "sticker": {
        "name": "HOW",
        "position": "top-right",
        "rotation": 12
      }
    },
    "config": {
      "backgroundColor": "bg-ant-brown",
      "textColor": "text-black",
      "backgroundVariant": "none"
    },
    "notes": ""
  },
  {
    "id": "odkaz-divider",
    "template": "HeroSlide",
    "content": {
      "title": "Odkaz.",
      "subtitle": ""
    },
    "config": {
      "backgroundColor": "bg-ant-yellow",
      "textColor": "text-black",
      "accentColor": "text-black",
      "backgroundVariant": "none"
    },
    "notes": "Sekce: Odkaz"
  },
  {
    "id": "nove-lepsi-hned",
    "template": "ContactWowSlide",
    "content": {
      "title": "Nové, lepší, hned.",
      "subtitle": "Tým (ant)",
      "sticker": {
        "name": "GO",
        "position": "top-right",
        "rotation": 8,
        "size": "lg"
      }
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "accentColor": "text-ant-green"
    },
    "notes": "Závěrečný slide"
  }
];

console.log(`✓ Prezentace načtena: ${SLIDES.length} slidů`);
