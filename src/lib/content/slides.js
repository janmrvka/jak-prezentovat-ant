// === JAK PREZENTOVAT ANT — konfigurace slidů ===

export const SLIDES = [
  {
    "id": "title",
    "template": "HeroSlide",
    "content": {
      "title": "",
      "subtitle": "",
      "image": "/images/old-logo.png"
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
      "title": "Co nedělejte. Tady je kompletní seznam všeho, co se nesmí dělat při prezentaci klientovi, abyste předešli problémům a zbytečným chybám které se stávají.",
      "subtitle": "Praktická varování před nejčastějšími chybami, které by mohly vést k neúspěchu. Soubor doporučení, čeho se vyvarovat.",
      "items": [
        "❌ Nemluvte o technických detailech, když management chce čísla",
        "❌ Nemějte více lidí s kamerou zapnutou",
        "❌ Nepoužívejte komplet brand klienta jako základ prezentace",
        "❌ Nesdílejte více tabulek/grafů na jednom slajdu",
        "❌ Nepřipravujte se poslední den",
        "❌ Nelaďte prezentaci všichni dohromady",
        "❌ Neprezentujte něco, co jste nedělali (bez detailní znalosti)",
        "❌ Nečtěte text ze slajdu slovo od slova",
        "❌ Nemějte na slajdu víc než 3 různé fonty",
        "❌ Nepoužívejte animace na každém prvku",
        "❌ Nezapomeňte zkontrolovat pravopis a gramatiku",
        "❌ Neprezentujte bez záložního plánu při technickém výpadku",
        "❌ Nemluvte příliš rychle nebo příliš pomalu",
        "❌ Neignorujte otázky publika"
      ]
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "accentColor": "text-ant-green",
      "accentLine": true,
      "itemLayout": "grid",
      "smallItems": true
    },
    "notes": "Záměrně přeplněný slide — ukázka jak prezentace nemá vypadat"
  },
  {
    "id": "stalo-se",
    "template": "ManifestoSlide",
    "content": {
      "statement": "Stalo se."
    },
    "config": {
      "backgroundColor": "bg-ant-brown",
      "textColor": "text-black",
      "backgroundVariant": "none"
    },
    "notes": "Přechodový slide — uvození příkladu"
  },
  {
    "id": "title-copy",
    "template": "HeroSlide",
    "content": {
      "title": "Jak prezentovat?",
      "subtitle": "",
      "sticker": {
        "image": "/styly/assets/labels/HOW.svg",
        "position": "bottom-right",
        "rotation": -10
      }
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "accentColor": "text-ant-green",
      "backgroundVariant": "none"
    },
    "notes": ""
  },
  {
    "id": "prezentace-ktere-prodavaji",
    "template": "ManifestoSlide",
    "content": {
      "statement": "Prezentace,\nkteré prodávají.",
      "sticker": {
        "image": "/styly/assets/labels/WOW.svg",
        "position": "bottom-right",
        "rotation": 20
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
    "id": "video-prezentace",
    "template": "VideoSlide",
    "content": {
      "videoId": "VQKMoT-6XSg",
      "startAt": 80
    },
    "config": {
      "backgroundColor": "bg-black",
      "layout": "contain",
      "muted": false
    },
    "notes": "Video — spustí/zastaví se na klik"
  },
  {
    "id": "priprava-divider",
    "template": "HeroSlide",
    "content": {
      "title": "Příprava.",
      "subtitle": "",
      "sticker": {
        "image": "/styly/assets/labels/GO.svg",
        "position": "bottom-right",
        "rotation": 25
      }
    },
    "config": {
      "backgroundColor": "bg-white",
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
      "statement": "1 slide\n=\n1 myšlenka.",
      "accentDot": true,
      "sticker": {
        "image": "/styly/assets/labels/YES.svg",
        "position": "bottom-right",
        "rotation": -10
      }
    },
    "config": {
      "backgroundColor": "bg-white",
      "textColor": "text-black",
      "backgroundVariant": "none"
    },
    "notes": ""
  },
  {
    "id": "hodnota-divider",
    "template": "HeroSlide",
    "content": {
      "title": "Přidaná hodnota.",
      "subtitle": "",
      "sticker": {
        "image": "/styly/assets/labels/WIN.svg",
        "position": "bottom-right",
        "rotation": 20
      }
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
    "id": "citelnost",
    "template": "ManifestoSlide",
    "content": {
      "statement": "Čitelnost.",
      "subtitle": "Je důležitá.",
      "accentDot": true,
      "sticker": {
        "image": "/styly/assets/labels/HOW.svg",
        "position": "bottom-right",
        "rotation": -10
      }
    },
    "config": {
      "backgroundColor": "bg-ant-lavender",
      "textColor": "text-black",
      "backgroundVariant": "none",
      "clickShrink": true
    },
    "notes": ""
  },
  {
    "id": "odkaz-divider",
    "template": "HeroSlide",
    "content": {
      "title": "",
      "subtitle": "",
      "rotatingTexts": [
        "Začněte\ns \"Proč\".",
        "Příprava.",
        "1 myšlenka\n= 1 slide.",
        "Přidaná hodnota.",
        "Čitelnost."
      ],
      "ctas": [
        {
          "text": "Přečti desatero →",
          "link": "https://docs.google.com/document/d/1-mgwF2uXtyXZ1Pgy5FhccQ30bdDbze9XxuO6T7FvAvw/edit?tab=t.0"
        },
        {
          "text": "9 lekcí Steva Jobse →",
          "link": "https://www.gong.io/blog/steve-jobs-iphone-keynote"
        }
      ],
      "sticker": {
        "image": "/styly/assets/labels/NEW.svg",
        "position": "bottom-right",
        "rotation": 20
      }
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "accentColor": "text-ant-green",
      "backgroundVariant": "none"
    },
    "notes": "Sekce: Odkaz"
  },
  {
    "id": "nove-lepsi-hned",
    "template": "ContactWowSlide",
    "content": {
      "title": "Nové, lepší, hned.",
      "subtitle": "",
      "sticker": {
        "image": "/styly/assets/labels/GO.svg",
        "position": "bottom-right",
        "rotation": 20,
        "size": "lg"
      }
    },
    "config": {
      "backgroundColor": "bg-ant-green",
      "textColor": "text-black",
      "accentColor": "text-black"
    },
    "notes": "Závěrečný slide"
  }
];

console.log(`✓ Prezentace načtena: ${SLIDES.length} slidů`);
