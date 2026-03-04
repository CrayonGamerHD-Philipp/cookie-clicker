const cookieCountEl = document.getElementById("cookieCount");
const perClickEl = document.getElementById("perClick");
const clickCountEl = document.getElementById("clickCount");
const totalEl = document.getElementById("total");
const rateEl = document.getElementById("rate");
const cookieButton = document.getElementById("cookieButton");
const levelEl = document.getElementById("levelValue");
const levelMultiplierEl = document.getElementById("levelMultiplier");
const levelRequirementEl = document.getElementById("levelRequirement");
const levelProgressWrapEl = document.getElementById("levelProgressWrap");
const levelProgressFillEl = document.getElementById("levelProgressFill");
const levelProgressTextEl = document.getElementById("levelProgressText");
const levelButton = document.getElementById("levelButton");
const cookieSkinEl = document.getElementById("cookieSkin");
const cookieMiscEl = document.getElementById("cookieMisc");
const cookieAccessoryEl = document.getElementById("cookieAccessory");
const upgradeList = document.getElementById("upgradeList");
const cosmeticsModal = document.getElementById("cosmeticsModal");
const cosmeticsOpenButton = document.getElementById("cosmeticsOpen");
const cosmeticsCloseButton = document.getElementById("cosmeticsClose");
const cosmeticsCloseOverlay = document.getElementById("cosmeticsCloseOverlay");
const cosmeticsCatalogList = document.getElementById("cosmeticsCatalogList");
const cosmeticsPreviewCookie = document.getElementById("cosmeticsPreviewCookie");
const cosmeticsPreviewSkin = document.getElementById("cosmeticsPreviewSkin");
const cosmeticsPreviewMisc = document.getElementById("cosmeticsPreviewMisc");
const cosmeticsPreviewAccessory = document.getElementById("cosmeticsPreviewAccessory");
const cosmeticsPreviewName = document.getElementById("cosmeticsPreviewName");
const cosmeticsPreviewMeta = document.getElementById("cosmeticsPreviewMeta");
const cosmeticsCategoryTabs = Array.from(document.querySelectorAll(".cosmetics-tab"));
const upgradeTabs = Array.from(document.querySelectorAll(".upgrade-tab"));
const bonusPanel = document.getElementById("bonus");
const bonusButton = document.getElementById("bonusButton");
const towerModal = document.getElementById("towerModal");
const towerOpenButton = document.getElementById("towerOpen");
const towerBuyButton = document.getElementById("towerBuy");
const towerCloseButton = document.getElementById("towerClose");
const towerCloseOverlay = document.getElementById("towerCloseOverlay");
const towerVisual = document.getElementById("towerVisual");
const towerStack = document.getElementById("towerStack");
const blackjackModal = document.getElementById("blackjackModal");
const blackjackOpenButton = document.getElementById("blackjackOpen");
const blackjackBuyButton = document.getElementById("blackjackBuy");
const blackjackCloseButton = document.getElementById("blackjackClose");
const blackjackCloseOverlay = document.getElementById("blackjackCloseOverlay");
const blackjackBetInput = document.getElementById("blackjackBet");
const blackjackDealButton = document.getElementById("blackjackDeal");
const blackjackHitButton = document.getElementById("blackjackHit");
const blackjackStandButton = document.getElementById("blackjackStand");
const blackjackStatus = document.getElementById("blackjackStatus");
const dealerHandEl = document.getElementById("dealerHand");
const playerHandEl = document.getElementById("playerHand");
const dealerTotalEl = document.getElementById("dealerTotal");
const playerTotalEl = document.getElementById("playerTotal");
const slotsModal = document.getElementById("slotsModal");
const slotsOpenButton = document.getElementById("slotsOpen");
const slotsBuyButton = document.getElementById("slotsBuy");
const slotsCloseButton = document.getElementById("slotsClose");
const slotsCloseOverlay = document.getElementById("slotsCloseOverlay");
const slotsBetInput = document.getElementById("slotsBet");
const slotsSpinButton = document.getElementById("slotsSpin");
const slotsStatus = document.getElementById("slotsStatus");
const slotReels = [
  document.getElementById("slot0"),
  document.getElementById("slot1"),
  document.getElementById("slot2"),
  document.getElementById("slot3"),
  document.getElementById("slot4"),
  document.getElementById("slot5"),
  document.getElementById("slot6"),
  document.getElementById("slot7"),
  document.getElementById("slot8")
];
const statsOverallEl = document.getElementById("statsOverall");
const statsTowerEl = document.getElementById("statsTower");
const statsBlackjackEl = document.getElementById("statsBlackjack");
const statsSlotsEl = document.getElementById("statsSlots");
const statsRouletteEl = document.getElementById("statsRoulette");
const financeModal = document.getElementById("financeModal");
const financeOpenButton = document.getElementById("financeOpen");
const financeCloseButton = document.getElementById("financeClose");
const financeCloseOverlay = document.getElementById("financeCloseOverlay");
const financeCookiesEl = document.getElementById("financeCookies");
const financePerClickEl = document.getElementById("financePerClick");
const financeCpsEl = document.getElementById("financeCps");
const financeTotalEl = document.getElementById("financeTotal");
const financeClicksEl = document.getElementById("financeClicks");
const financeTowerNetEl = document.getElementById("financeTowerNet");
const financeBlackjackNetEl = document.getElementById("financeBlackjackNet");
const financeSlotsNetEl = document.getElementById("financeSlotsNet");
const financeRouletteNetEl = document.getElementById("financeRouletteNet");
const financeWheelNetEl = document.getElementById("financeWheelNet");
const rouletteModal = document.getElementById("rouletteModal");
const rouletteOpenButton = document.getElementById("rouletteOpen");
const rouletteBuyButton = document.getElementById("rouletteBuy");
const rouletteCloseButton = document.getElementById("rouletteClose");
const rouletteCloseOverlay = document.getElementById("rouletteCloseOverlay");
const rouletteBetInput = document.getElementById("rouletteBet");
const rouletteSpinButton = document.getElementById("rouletteSpin");
const rouletteStatus = document.getElementById("rouletteStatus");
const rouletteWheel = document.getElementById("rouletteWheel");
const rouletteChips = Array.from(document.querySelectorAll(".roulette-chip"));
const rouletteBoard = document.getElementById("rouletteBoard");
const rouletteSelection = document.getElementById("rouletteSelection");
const statsWheelEl = document.getElementById("statsWheel");
const gameToast = document.getElementById("gameToast");
const resetModal = document.getElementById("resetModal");
const devModeExitButton = document.getElementById("devModeExit");
const resetOpenButton = document.getElementById("resetOpen");
const devModeToggleButton = document.getElementById("devModeToggle");
const devModeStateEl = document.getElementById("devModeState");
const appVersionEl = document.getElementById("appVersion");
const appVersionLinkEl = document.getElementById("appVersionLink");
const resetCloseButton = document.getElementById("resetClose");
const resetCloseOverlay = document.getElementById("resetCloseOverlay");
const resetConfirmButton = document.getElementById("resetConfirm");
const resetCancelButton = document.getElementById("resetCancel");
const resetCosmeticsToggle = document.getElementById("resetCosmeticsToggle");
const wheelModal = document.getElementById("wheelModal");
const wheelOpenButton = document.getElementById("wheelOpen");
const wheelBuyButton = document.getElementById("wheelBuy");
const wheelCloseButton = document.getElementById("wheelClose");
const wheelCloseOverlay = document.getElementById("wheelCloseOverlay");
const wheelBetInput = document.getElementById("wheelBet");
const wheelSpinButton = document.getElementById("wheelSpin");
const wheelStatus = document.getElementById("wheelStatus");
const fortuneWheel = document.getElementById("fortuneWheel");
const towerBetInput = document.getElementById("towerBet");
const towerStartButton = document.getElementById("towerStart");
const towerClimbButton = document.getElementById("towerClimb");
const towerCashoutButton = document.getElementById("towerCashout");
const towerStatus = document.getElementById("towerStatus");
const towerMultiplierEl = document.getElementById("towerMultiplier");
const towerPayoutEl = document.getElementById("towerPayout");
const STORAGE_KEY = "hethey-cookie-clicker-v1";
const DEV_STORAGE_KEY = "hethey-cookie-clicker-dev-v1";
const DEV_MODE_KEY = "hethey-cookie-clicker-dev-mode";
const LEVEL_UP_BASE_COST = 250_000_000;
const LEVEL_UP_SCALE = 2;
const LEVEL_GAIN_STEP = 0.5;
const UPGRADE_LEVEL_COST_SCALE = 1.35;
const RELEASES_BASE_URL = "https://github.com/CrayonGamerHD-Philipp/cookie-clicker/releases";

const upgrades = [
  { name: "Sprinkles", type: "click", power: 1, baseCost: 20, desc: "+1 pro Klick" },
  { name: "Ofen", type: "cps", power: 1, baseCost: 12, desc: "+1 pro Sek" },
  { name: "Double Scoop", type: "click", power: 5, baseCost: 90, desc: "+5 pro Klick" },
  { name: "Mixer", type: "cps", power: 5, baseCost: 60, desc: "+5 pro Sek" },
  { name: "Rolling Pin", type: "click", power: 10, baseCost: 220, desc: "+10 pro Klick" },
  { name: "Cafe", type: "cps", power: 15, baseCost: 160, desc: "+15 pro Sek" },
  { name: "Factory", type: "cps", power: 50, baseCost: 650, desc: "+50 pro Sek" },
  { name: "Festival Dance", type: "click", power: 200, baseCost: 1800, desc: "+200 pro Klick" },
  { name: "Festival", type: "cps", power: 200, baseCost: 1800, desc: "+200 pro Sek" },
  { name: "Chease Cake", type: "cps", power: 500, baseCost: 9000, desc: "+500 pro Sek" }
].map((upgrade) => ({
  ...upgrade,
  count: 0
}));

const colorCosmetics = [
  {
    key: "classic",
    name: "Classic Bake",
    cost: 0,
    desc: "Der originale HETHEY-Keks.",
    owned: true,
    theme: {
      "--cookie-top": "#f1b07d",
      "--cookie-bottom": "#b5531d",
      "--cookie-spot": "rgba(60, 20, 10, 0.32)",
      "--cookie-text": "#fff7ee"
    }
  },
  {
    key: "strawberry",
    name: "Berry Glaze",
    cost: 250_000_000,
    desc: "Pinkes Frosting mit beerigen Kruemeln.",
    owned: false,
    theme: {
      "--cookie-top": "#f7b0c8",
      "--cookie-bottom": "#c24b72",
      "--cookie-spot": "rgba(112, 20, 56, 0.28)",
      "--cookie-text": "#fff7ee"
    }
  },
  {
    key: "mint",
    name: "Mint Crunch",
    cost: 750_000_000,
    desc: "Kuehle Minze mit dunklen Choco-Chunks.",
    owned: false,
    theme: {
      "--cookie-top": "#b8f1d7",
      "--cookie-bottom": "#2f8f6b",
      "--cookie-spot": "rgba(20, 56, 42, 0.3)",
      "--cookie-text": "#163326"
    }
  },
  {
    key: "midnight",
    name: "Midnight Cocoa",
    cost: 2_500_000_000,
    desc: "Dunkler Kakao mit goldenen Highlights.",
    owned: false,
    theme: {
      "--cookie-top": "#7f5a4d",
      "--cookie-bottom": "#2d1b16",
      "--cookie-spot": "rgba(236, 191, 125, 0.24)",
      "--cookie-text": "#f8e7cf"
    }
  },
  {
    key: "royal-velvet",
    name: "Royal Velvet",
    cost: 7_500_000_000,
    desc: "Samtiger Keks mit violettem Schimmer.",
    owned: false,
    theme: {
      "--cookie-top": "#d7b2ff",
      "--cookie-bottom": "#6e3aa8",
      "--cookie-spot": "rgba(48, 20, 72, 0.28)",
      "--cookie-text": "#fff7ee"
    }
  },
  {
    key: "captain-crunch",
    name: "Captain Blue",
    cost: 12_500_000_000,
    desc: "Maritime Glasur mit tiefblauem Finish.",
    owned: false,
    theme: {
      "--cookie-top": "#8ec5ff",
      "--cookie-bottom": "#2356a8",
      "--cookie-spot": "rgba(14, 34, 74, 0.28)",
      "--cookie-text": "#fff7ee"
    }
  }
];

const accessoryCosmetics = [
  { key: "none", name: "Ohne", cost: 0, desc: "Nur der Keks, ganz clean.", owned: true },
  { key: "party", name: "Partyhut", cost: 300_000_000, desc: "Bunter Partyhut fuer Feiermodus.", owned: false },
  { key: "crown", name: "Krone", cost: 5_000_000_000, desc: "Goldene Krone fuer den Kekskoenig.", owned: false },
  { key: "witch", name: "Hexenhut", cost: 3_500_000_000, desc: "Spitzer Hexenhut mit dunklem Band.", owned: false },
  { key: "cowboy", name: "Cowboyhut", cost: 4_500_000_000, desc: "Breiter Westernhut mit warmem Lederlook.", owned: false },
  { key: "chef", name: "Kochmuetze", cost: 375_000, desc: "Legacy", owned: false, hidden: true },
  { key: "captain", name: "Kapitaenshut", cost: 10_000_000, desc: "Legacy", owned: false, hidden: true }
];

const skinCosmetics = [
  {
    key: "none",
    name: "Ohne Skin",
    cost: 0,
    desc: "Der normale Keks ohne Spezial-Look.",
    owned: true,
    theme: null
  },
  {
    key: "kurbee",
    name: "Kurbee",
    cost: 1_500_000_000,
    desc: "Runder rosa Star-Skin mit grossen Augen und kleinen Fueessen.",
    owned: false,
    theme: {
      "--cookie-top": "#ffb6d5",
      "--cookie-bottom": "#e667a3",
      "--cookie-spot": "rgba(255, 255, 255, 0)",
      "--cookie-text": "#fff7ee"
    }
  }
];

const miscCosmetics = [
  {
    key: "none",
    name: "Ohne",
    cost: 0,
    desc: "Keine zusaetzliche Sonderfigur.",
    owned: true,
    svg: ""
  },
  {
    key: "kirby",
    name: "Kirby",
    cost: 2_000_000_000,
    desc: "Rosa Kirby als eigenes Sonstiges-Cosmetic.",
    owned: false,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500" version="1.1"><path d="M 304.343 28.548 C 301.276 36.540, 313.435 56.434, 320.997 55.796 C 324.279 55.519, 324.520 55.257, 324.817 51.646 C 325.639 41.637, 307.272 20.915, 304.343 28.548 M 251.063 41.424 C 247.469 45.754, 261.419 72, 267.315 72 C 276.073 72, 274.557 58.377, 264.664 48.173 C 257.386 40.666, 253.353 38.664, 251.063 41.424" stroke="none" fill="#ffffff" fill-rule="evenodd"/><path d="M 391 77.703 C 370.433 81.243, 364.475 98.607, 382.299 103.063 C 387.796 104.437, 406.830 101.050, 410.352 98.071 C 422.111 88.127, 409.226 74.565, 391 77.703 M 228.346 113.520 C 201.949 119.442, 187.564 133.198, 196.573 143.904 C 202.958 151.492, 222.077 148.689, 239.364 137.630 C 256.774 126.493, 248.754 108.942, 228.346 113.520" stroke="none" fill="#eb6796" fill-rule="evenodd"/><path d="M 115.773 76.250 C 32.335 167.897, 39.305 318.220, 130.429 392.339 C 138.939 399.260, 138.713 399.550, 135.079 386.377 C 124.601 348.400, 121.677 300.001, 129.271 290.250 C 129.885 289.462, 129.890 289, 129.286 289 C 124.644 289, 113.089 253.025, 107.285 220.500 C 100.142 180.478, 107.418 102.466, 120.848 75.066 C 123.023 70.630, 124.665 67, 124.498 67 C 124.331 67, 120.405 71.162, 115.773 76.250 M 344 217.688 C 332.005 234.181, 311.268 251.828, 292.114 261.840 C 279.237 268.572, 265.942 274.192, 264.344 273.579 C 263.630 273.305, 264.285 274.791, 265.800 276.882 C 267.314 278.973, 269.398 282.555, 270.429 284.842 C 272.642 289.751, 271.822 289.622, 280.978 286.507 C 315.742 274.684, 347.249 242.691, 349.658 216.770 C 350.425 208.514, 350.705 208.468, 344 217.688" stroke="none" fill="#eb6b8e" fill-rule="evenodd"/><path d="M 184 230.428 C 175.635 232.749, 166.549 238.361, 158.159 246.389 C 90.403 311.217, 166.311 517.016, 244.250 479.799 C 253.659 475.307, 253.839 476.488, 242.626 469.185 C 175.200 425.274, 143.713 281.820, 190.511 231.750 L 193.081 229 190.790 229.089 C 189.531 229.139, 186.475 229.741, 184 230.428" stroke="none" fill="#8b0039" fill-rule="evenodd"/><path d="M 206 241 C 201.955 245.045, 204.491 252.679, 210.981 255.990 C 222.155 261.691, 225.934 251.594, 215.990 242.610 C 211.465 238.522, 208.893 238.107, 206 241" stroke="none" fill="#f386af" fill-rule="evenodd"/><path d="M 190.602 231.651 C 144.129 281.387, 174.946 424.642, 241.553 468.506 C 252.764 475.889, 251.811 475.855, 258.476 469.108 C 273.047 454.357, 282.975 426.558, 283.514 399 C 284.880 329.105, 269.782 281.965, 235.386 248.734 C 218.695 232.609, 197.324 224.457, 190.602 231.651 M 207.375 239.049 C 204.842 239.996, 203.017 244.636, 203.723 248.334 C 204.938 254.686, 214.983 260.551, 219.538 257.567 C 226.861 252.769, 215.786 235.907, 207.375 239.049" stroke="none" fill="#e0005b" fill-rule="evenodd"/><path d="M 343.723 66.611 C 343.325 67.008, 343 68.547, 343 70.030 C 343 73.210, 338.696 77.936, 335.614 78.140 C 334.451 78.217, 331.700 78.200, 329.500 78.103 L 325.500 77.926 331.870 84.051 C 348.212 99.763, 356.023 96.588, 349.466 76.898 C 346.765 68.788, 344.895 65.438, 343.723 66.611 M 287.153 83.454 C 284.692 90.260, 277.162 92.870, 269.634 89.526 C 266.543 88.153, 269.383 92.560, 276.384 99.999 C 294.008 118.727, 301.279 116.149, 293.980 93.762 C 289.583 80.272, 288.755 79.023, 287.153 83.454" stroke="none" fill="#0077c0" fill-rule="evenodd"/><path d="M 237.203 8.063 C 150.938 17.837, 76.940 84.871, 56.958 171.345 C 35.539 264.034, 63.963 348.079, 136.449 406.389 C 140.309 409.495, 143.325 412.986, 145.041 416.337 C 171.257 467.537, 189.933 485.546, 221.345 489.915 C 278.563 497.873, 307.889 406.255, 279.542 308.103 C 277.572 301.284, 276.082 295.607, 276.231 295.488 C 276.379 295.368, 278.966 294.463, 281.980 293.478 C 357.934 268.646, 380.962 200.020, 324.500 166.766 C 320.650 164.498, 315.348 161.288, 312.717 159.632 L 307.934 156.620 314.217 150.229 C 339.506 124.505, 383.748 106.785, 428.750 104.356 C 435.488 103.993, 440.990 103.426, 440.978 103.098 C 440.695 95.271, 396.918 52.724, 373.222 37.245 C 338.580 14.616, 283.558 2.811, 237.203 8.063 M 240.948 14.042 C 63.018 29.915, -9.633 273.704, 128.402 391.709 C 141.214 402.661, 140.654 402.669, 137.439 391.580 C 114.145 311.229, 128.293 249.809, 175.107 228.059 C 206.088 213.664, 242.481 234.896, 267.998 282.250 C 270.295 286.512, 272.506 290, 272.912 290 C 290.061 290, 335.343 255.973, 345.920 235.138 C 365.511 196.549, 319.916 154.382, 257 152.906 C 249.549 152.731, 246.566 151.534, 251.500 150.699 C 261.400 149.024, 279.334 150.272, 293.279 153.608 L 300.058 155.230 308.779 146.846 C 330.179 126.274, 348.856 115.914, 381.512 106.500 C 394.668 102.707, 400.951 101.458, 423.273 98.197 L 428.046 97.500 421.191 89 C 376.404 33.467, 314.021 7.523, 240.948 14.042 M 302.330 22.136 C 291.389 35.654, 329.589 99, 348.681 99 C 371.599 99, 332.618 24.229, 308.192 21.336 C 304.820 20.937, 303.112 21.170, 302.330 22.136 M 304.605 27.537 C 298.852 33.291, 312.583 57.643, 321.117 56.822 C 329.010 56.063, 326.687 44.084, 316.597 33.508 C 309.879 26.467, 307.073 25.070, 304.605 27.537 M 247.615 37.465 C 240.717 47.993, 257.260 87.691, 276.250 106.182 C 298.953 128.286, 307.706 110.737, 291.056 76.500 C 277.116 47.836, 254.270 27.307, 247.615 37.465 M 251.250 39.663 C 245.259 42.079, 260.695 73, 267.893 73 C 270.019 73, 274 68.165, 274 65.583 C 274 58.235, 261.202 40, 256.045 40 C 255.560 40, 254.564 39.811, 253.832 39.579 C 253.099 39.348, 251.938 39.385, 251.250 39.663 M 343.723 66.611 C 343.325 67.008, 343 68.547, 343 70.030 C 343 73.210, 338.696 77.936, 335.614 78.140 C 334.451 78.217, 331.700 78.200, 329.500 78.103 L 325.500 77.926 331.870 84.051 C 348.212 99.763, 356.023 96.588, 349.466 76.898 C 346.765 68.788, 344.895 65.438, 343.723 66.611 M 287.153 83.454 C 284.692 90.260, 277.162 92.870, 269.634 89.526 C 266.543 88.153, 269.383 92.560, 276.384 99.999 C 294.008 118.727, 301.279 116.149, 293.980 93.762 C 289.583 80.272, 288.755 79.023, 287.153 83.454 M 184 230.428 C 128.894 245.721, 114.504 340.873, 155.146 421.228 C 220.669 550.776, 315.455 465.445, 274.810 313.500 C 260.768 261.003, 217.256 221.198, 184 230.428" stroke="none" fill="#0a0e13" fill-rule="evenodd"/><path d="M 238 14.642 C 203.444 18.865, 163.367 35.984, 133.440 59.304 C 99.555 85.710, 94.518 220.744, 125.127 282.177 C 128.917 289.785, 129.485 289.886, 130.968 283.215 C 138.403 249.767, 166.343 223.510, 194.500 223.510 C 220.473 223.509, 235.923 234.399, 262.520 271.451 L 264.541 274.266 276.563 269.106 C 304.634 257.058, 329.897 237.417, 345.565 215.461 C 362.233 192.103, 313.199 157.406, 257.881 153.415 C 236.684 151.885, 246.966 149.422, 270.906 150.295 C 281.926 150.697, 288.407 151.425, 293 152.777 L 299.500 154.690 309.223 145.525 C 329.547 126.368, 346.874 116.472, 376 107.388 C 381.775 105.586, 385.497 104.087, 384.270 104.056 C 370.743 103.715, 366.463 89.703, 377.563 82.098 C 395.970 69.484, 426.531 82.097, 412.849 96.661 L 410.533 99.126 418.517 98.428 C 422.907 98.045, 426.626 97.628, 426.780 97.502 C 430.115 94.779, 388.366 54.959, 369.127 42.514 C 336.606 21.476, 280.195 9.486, 238 14.642 M 302 21.499 C 290.674 35.147, 328.532 99, 347.949 99 C 358.975 99, 359.519 86.695, 349.411 65.926 C 335.223 36.775, 309.403 12.580, 302 21.499 M 249.895 34.673 C 235.551 38.408, 258.181 93.946, 281.047 111.127 C 301.664 126.619, 307.075 106.993, 291.012 74.987 C 281.962 56.953, 265.227 37.018, 257.895 35.537 C 256.028 35.159, 253.825 34.717, 253 34.553 C 252.175 34.389, 250.778 34.443, 249.895 34.673 M 222.217 114.555 C 197.115 121.977, 186.305 135.253, 197.011 145.511 C 206.931 155.015, 244.932 141.770, 248.892 127.428 C 252.429 114.618, 240.871 109.040, 222.217 114.555" stroke="none" fill="#f095a3" fill-rule="evenodd"/></svg>`
  }
];

const state = {
  cookies: 0,
  total: 0,
  clicks: 0,
  level: 1,
  basePerClick: 1,
  baseCps: 0,
  perClick: 1,
  cps: 0,
  activeColor: "classic",
  activeSkin: "none",
  activeMisc: "none",
  activeAccessory: "none",
  bonusReady: false,
  lastBonusAt: 0,
  devMode: false,
  towerActive: false,
  towerBet: 0,
  towerStep: 0,
  towerMultiplier: 0
};

const towerSteps = [0, 0.5, 1, 1.5, 2, 2.5, 3, 4];
const towerChances = [0.78, 0.74, 0.7, 0.66, 0.62, 0.58, 0.55, 0.52];
const slotSymbols = [
  { key: "CHERRY", icon: "\u{1F352}", weight: 30, multiplier: 2 },
  { key: "LEMON", icon: "\u{1F34B}", weight: 26, multiplier: 1.5 },
  { key: "COOKIE", icon: "\u{1F36A}", weight: 16, multiplier: 6 },
  { key: "STAR", icon: "\u{2B50}", weight: 14, multiplier: 4 },
  { key: "BELL", icon: "\u{1F514}", weight: 14, multiplier: 3 }
];
const rouletteOrder = [
  0, 32, 15, 19, 4, 21, 2, 25, 17, 34,
  6, 27, 13, 36, 11, 30, 8, 23, 10, 5,
  24, 16, 33, 1, 20, 14, 31, 9, 22, 18,
  29, 7, 28, 12, 35, 3, 26
];
const rouletteRedNumbers = new Set([1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]);
const rouletteTableRows = Array.from({ length: 12 }, (_, index) => {
  const high = (index + 1) * 3;
  return [high, high - 1, high - 2];
});
const wheelSegments = [
  { label: "x2", multiplier: 2, weight: 36 },
  { label: "x50", multiplier: 50, weight: 6 },
  { label: "x100", multiplier: 100, weight: 3 },
  { label: "x0.5", multiplier: 0.5, weight: 28 },
  { label: "Niete", multiplier: 0, weight: 27 }
];

const gameUnlocks = {
  tower: { price: 1_000_000, requiredLevel: 1, unlocked: false },
  blackjack: { price: 5_000_000, requiredLevel: 2, unlocked: false },
  slots: { price: 25_000_000, requiredLevel: 3, unlocked: false },
  roulette: { price: 50_000_000, requiredLevel: 4, unlocked: false },
  wheel: { price: 150_000_000, requiredLevel: 5, unlocked: false }
};

let blackjackDeck = [];
let blackjackActive = false;
let blackjackBet = 0;
let dealerHand = [];
let playerHand = [];
let slotsSpinning = false;
let slotSpinTimer = null;
let rouletteSpinning = false;
let rouletteBetChoice = "red";
let rouletteBetNumber = 7;
let rouletteRotation = 0;
let wheelSpinning = false;
let wheelRotation = 0;
let activeUpgradeTab = "click";
let activeCosmeticsCategory = "colors";

const gameStats = {
  tower: { wins: 0, losses: 0, net: 0 },
  blackjack: { wins: 0, losses: 0, net: 0 },
  slots: { wins: 0, losses: 0, net: 0 },
  roulette: { wins: 0, losses: 0, net: 0 },
  wheel: { wins: 0, losses: 0, net: 0 }
};

let toastTimer = null;

function applyUpgradeCounts(counts) {
  upgrades.forEach((upgrade, index) => {
    const count = Number(counts[index]) || 0;
    upgrade.count = count;
  });
  recalculateProduction();
}

function roundValue(value) {
  return Math.round(value * 100) / 100;
}

function levelGainMultiplier() {
  return 1 + Math.max(0, state.level - 1) * LEVEL_GAIN_STEP;
}

function currentLevelRequirement() {
  return LEVEL_UP_BASE_COST * Math.pow(LEVEL_UP_SCALE, Math.max(0, state.level - 1));
}

function upgradeLevelCostMultiplier() {
  return Math.pow(UPGRADE_LEVEL_COST_SCALE, Math.max(0, state.level - 1));
}

function calculateBaseProduction() {
  let perClick = 1;
  let cps = 0;
  upgrades.forEach((upgrade) => {
    if (upgrade.type === "click") {
      perClick += upgrade.power * upgrade.count;
    } else {
      cps += upgrade.power * upgrade.count;
    }
  });
  return { perClick, cps };
}

function recalculateProduction() {
  const baseProduction = calculateBaseProduction();
  const multiplier = levelGainMultiplier();
  state.basePerClick = baseProduction.perClick;
  state.baseCps = baseProduction.cps;
  state.perClick = roundValue(baseProduction.perClick * multiplier);
  state.cps = roundValue(baseProduction.cps * multiplier);
}

function scaleGain(amount) {
  if (amount <= 0) {
    return 0;
  }
  return roundValue(amount * levelGainMultiplier());
}

function scalePayout(basePayout, invested = 0) {
  if (basePayout <= 0) {
    return 0;
  }
  const profit = Math.max(0, basePayout - invested);
  return roundValue(invested + (profit * levelGainMultiplier()));
}

function currentSaveKey() {
  return state.devMode ? DEV_STORAGE_KEY : STORAGE_KEY;
}

function canAfford(amount) {
  return state.devMode || state.cookies >= amount;
}

function spendCookies(amount) {
  if (state.devMode) {
    return;
  }
  state.cookies -= amount;
}

function formatMultiplier(value) {
  return value.toLocaleString("de-DE", {
    minimumFractionDigits: Number.isInteger(value) ? 0 : 1,
    maximumFractionDigits: 1
  });
}

function activeColorCosmetic() {
  return colorCosmetics.find((cosmetic) => cosmetic.key === state.activeColor) || colorCosmetics[0];
}

function activeAccessoryCosmetic() {
  return accessoryCosmetics.find((cosmetic) => cosmetic.key === state.activeAccessory && !cosmetic.hidden) || accessoryCosmetics[0];
}

function activeSkinCosmetic() {
  return skinCosmetics.find((cosmetic) => cosmetic.key === state.activeSkin) || skinCosmetics[0];
}

function activeMiscCosmetic() {
  return miscCosmetics.find((cosmetic) => cosmetic.key === state.activeMisc) || miscCosmetics[0];
}

function resetCosmeticsState() {
  colorCosmetics.forEach((cosmetic) => {
    cosmetic.owned = cosmetic.key === "classic";
  });
  accessoryCosmetics.forEach((cosmetic) => {
    cosmetic.owned = cosmetic.key === "none";
  });
  skinCosmetics.forEach((cosmetic) => {
    cosmetic.owned = cosmetic.key === "none";
  });
  miscCosmetics.forEach((cosmetic) => {
    cosmetic.owned = cosmetic.key === "none";
  });
  state.activeColor = "classic";
  state.activeSkin = "none";
  state.activeMisc = "none";
  state.activeAccessory = "none";
}

function applyCosmeticTheme() {
  const color = activeColorCosmetic();
  const skin = activeSkinCosmetic();
  const misc = activeMiscCosmetic();
  const accessory = activeAccessoryCosmetic();
  state.activeColor = color.key;
  state.activeSkin = skin.key;
  state.activeMisc = misc.key;
  state.activeAccessory = accessory.key;
  Object.entries(color.theme).forEach(([key, value]) => {
    cookieButton.style.setProperty(key, value);
  });
  if (skin.theme) {
    Object.entries(skin.theme).forEach(([key, value]) => {
      cookieButton.style.setProperty(key, value);
    });
  }
  cookieButton.dataset.skin = skin.key || "none";
  cookieButton.dataset.misc = misc.key || "none";
  if (cookieSkinEl) {
    cookieSkinEl.className = `cookie-skin skin-${skin.key || "none"}`;
  }
  if (cookieMiscEl) {
    cookieMiscEl.className = `cookie-misc misc-${misc.key || "none"}`;
    cookieMiscEl.innerHTML = misc.svg || "";
  }
  if (cookieAccessoryEl) {
    cookieAccessoryEl.className = `cookie-accessory accessory-${accessory.key || "none"}`;
  }
}

function migrateLegacyCosmetics(savedCosmetics) {
  const legacyMap = {
    classic: { color: "classic", accessory: "none" },
    strawberry: { color: "strawberry", accessory: "party" },
    mint: { color: "mint", accessory: "none" },
    midnight: { color: "midnight", accessory: "crown" },
    "royal-velvet": { color: "royal-velvet", accessory: "crown" },
    "captain-crunch": { color: "captain-crunch", accessory: "cowboy" }
  };

  const ownedKeys = Array.isArray(savedCosmetics.owned) ? savedCosmetics.owned : [];
  ownedKeys.forEach((key) => {
    const mapped = legacyMap[key];
    if (!mapped) return;
    const color = colorCosmetics.find((entry) => entry.key === mapped.color);
    const accessory = accessoryCosmetics.find((entry) => entry.key === mapped.accessory);
    if (color) color.owned = true;
    if (accessory) accessory.owned = true;
  });

  if (typeof savedCosmetics.active === "string") {
    const mapped = legacyMap[savedCosmetics.active];
    if (!mapped) return;
    if (colorCosmetics.some((entry) => entry.key === mapped.color && entry.owned)) {
      state.activeColor = mapped.color;
    }
    if (accessoryCosmetics.some((entry) => entry.key === mapped.accessory && entry.owned)) {
      state.activeAccessory = mapped.accessory;
    }
  }
}

function resetProgressState() {
  state.cookies = 0;
  state.total = 0;
  state.clicks = 0;
  state.level = 1;
  state.basePerClick = 1;
  state.baseCps = 0;
  state.perClick = 1;
  state.cps = 0;
  state.bonusReady = false;
  state.lastBonusAt = 0;
  state.towerActive = false;
  state.towerBet = 0;
  state.towerStep = 0;
  state.towerMultiplier = 0;
  upgrades.forEach((upgrade) => {
    upgrade.count = 0;
  });
  resetCosmeticsState();
  Object.keys(gameStats).forEach((key) => {
    gameStats[key].wins = 0;
    gameStats[key].losses = 0;
    gameStats[key].net = 0;
  });
  Object.keys(gameUnlocks).forEach((key) => {
    gameUnlocks[key].unlocked = false;
  });
  blackjackDeck = [];
  blackjackActive = false;
  blackjackBet = 0;
  dealerHand = [];
  playerHand = [];
  if (slotSpinTimer) {
    clearInterval(slotSpinTimer);
    slotSpinTimer = null;
  }
  slotsSpinning = false;
  rouletteSpinning = false;
  wheelSpinning = false;
  rouletteRotation = 0;
  wheelRotation = 0;
  rouletteBetChoice = "red";
  rouletteBetNumber = 7;
  recalculateProduction();
  applyCosmeticTheme();
}

function loadState(forceDevMode = null) {
  let savedMode = false;
  try {
    savedMode = localStorage.getItem(DEV_MODE_KEY) === "true";
  } catch (error) {
    savedMode = false;
  }
  state.devMode = typeof forceDevMode === "boolean" ? forceDevMode : savedMode;
  resetProgressState();
  try {
    const raw = localStorage.getItem(currentSaveKey());
    if (!raw) {
      applyCosmeticTheme();
      return;
    }
    const saved = JSON.parse(raw);
    state.cookies = Number(saved.cookies) || 0;
    state.total = Number(saved.total) || 0;
    state.clicks = Number(saved.clicks) || 0;
    state.level = Math.max(1, Number(saved.level) || 1);
    state.lastBonusAt = Number(saved.lastBonusAt) || 0;
    state.bonusReady = false;
    applyUpgradeCounts(saved.upgrades || []);
    if (saved.stats) {
      ["tower", "blackjack", "slots", "roulette", "wheel"].forEach((key) => {
        const entry = saved.stats[key] || {};
        gameStats[key].wins = Number(entry.wins) || 0;
        gameStats[key].losses = Number(entry.losses) || 0;
        gameStats[key].net = Number(entry.net) || 0;
      });
    }
    if (saved.unlocks) {
      Object.keys(gameUnlocks).forEach((key) => {
        if (typeof saved.unlocks[key] === "boolean") {
          gameUnlocks[key].unlocked = saved.unlocks[key];
        }
      });
    }
    if (saved.cosmetics) {
      if (saved.cosmetics.colors || saved.cosmetics.accessories) {
        const ownedColors = Array.isArray(saved.cosmetics.colors?.owned) ? saved.cosmetics.colors.owned : [];
        const ownedAccessories = Array.isArray(saved.cosmetics.accessories?.owned) ? saved.cosmetics.accessories.owned : [];
        const ownedSkins = Array.isArray(saved.cosmetics.skins?.owned) ? saved.cosmetics.skins.owned : [];
        const ownedMiscs = Array.isArray(saved.cosmetics.miscs?.owned) ? saved.cosmetics.miscs.owned : [];
        colorCosmetics.forEach((cosmetic) => {
          cosmetic.owned = cosmetic.key === "classic" || ownedColors.includes(cosmetic.key);
        });
        accessoryCosmetics.forEach((cosmetic) => {
          cosmetic.owned = cosmetic.key === "none" || ownedAccessories.includes(cosmetic.key);
        });
        skinCosmetics.forEach((cosmetic) => {
          cosmetic.owned = cosmetic.key === "none" || ownedSkins.includes(cosmetic.key);
        });
        miscCosmetics.forEach((cosmetic) => {
          cosmetic.owned = cosmetic.key === "none" || ownedMiscs.includes(cosmetic.key);
        });
        if (typeof saved.cosmetics.colors?.active === "string") {
          const selectedColor = colorCosmetics.find((cosmetic) => cosmetic.key === saved.cosmetics.colors.active && cosmetic.owned);
          if (selectedColor) {
            state.activeColor = selectedColor.key;
          }
        }
        if (typeof saved.cosmetics.accessories?.active === "string") {
          const selectedAccessory = accessoryCosmetics.find(
            (cosmetic) => cosmetic.key === saved.cosmetics.accessories.active && cosmetic.owned && !cosmetic.hidden
          );
          if (selectedAccessory) {
            state.activeAccessory = selectedAccessory.key;
          }
        }
        if (typeof saved.cosmetics.skins?.active === "string") {
          const selectedSkin = skinCosmetics.find((cosmetic) => cosmetic.key === saved.cosmetics.skins.active && cosmetic.owned);
          if (selectedSkin) {
            state.activeSkin = selectedSkin.key;
          }
        }
        if (typeof saved.cosmetics.miscs?.active === "string") {
          const selectedMisc = miscCosmetics.find((cosmetic) => cosmetic.key === saved.cosmetics.miscs.active && cosmetic.owned);
          if (selectedMisc) {
            state.activeMisc = selectedMisc.key;
          }
        }
      } else {
        migrateLegacyCosmetics(saved.cosmetics);
      }
    }
  } catch (error) {
    resetProgressState();
  }
  applyCosmeticTheme();
}

function saveState() {
  const payload = {
    cookies: state.cookies,
    total: state.total,
    clicks: state.clicks,
    level: state.level,
    lastBonusAt: state.lastBonusAt,
    upgrades: upgrades.map((upgrade) => upgrade.count),
    cosmetics: {
      colors: {
        active: activeColorCosmetic().key,
        owned: colorCosmetics.filter((cosmetic) => cosmetic.owned).map((cosmetic) => cosmetic.key)
      },
      accessories: {
        active: activeAccessoryCosmetic().key,
        owned: accessoryCosmetics.filter((cosmetic) => cosmetic.owned && !cosmetic.hidden).map((cosmetic) => cosmetic.key)
      },
      skins: {
        active: activeSkinCosmetic().key,
        owned: skinCosmetics.filter((cosmetic) => cosmetic.owned).map((cosmetic) => cosmetic.key)
      },
      miscs: {
        active: activeMiscCosmetic().key,
        owned: miscCosmetics.filter((cosmetic) => cosmetic.owned).map((cosmetic) => cosmetic.key)
      }
    },
    stats: gameStats,
    unlocks: Object.fromEntries(
      Object.entries(gameUnlocks).map(([key, entry]) => [key, entry.unlocked])
    )
  };
  try {
    localStorage.setItem(currentSaveKey(), JSON.stringify(payload));
    localStorage.setItem(DEV_MODE_KEY, String(state.devMode));
  } catch (error) {
    // Ignore storage failures (private mode, quota).
  }
}

function format(num) {
  const value = Number.isInteger(num) ? num : roundValue(num);
  const abs = Math.abs(value);
  const trim = (text) => text.replace(/(?:\.0|,0)$/, "");
  if (abs >= 1e12) {
    return `${trim((value / 1e12).toLocaleString("de-DE", { maximumFractionDigits: abs < 1e13 ? 1 : 0 }))}T`;
  }
  return value.toLocaleString("de-DE", {
    minimumFractionDigits: 0,
    maximumFractionDigits: Number.isInteger(value) ? 0 : 2
  });
}

function formatFull(num) {
  const value = Number.isInteger(num) ? num : roundValue(num);
  return value.toLocaleString("de-DE", {
    minimumFractionDigits: 0,
    maximumFractionDigits: Number.isInteger(value) ? 0 : 2
  });
}

function formatClicks(num) {
  const value = Math.floor(num);
  const abs = Math.abs(value);
  const trim = (text) => text.replace(/,0$/, "");
  const formatUnit = (divider, label) =>
    `${trim((value / divider).toLocaleString("de-DE", { maximumFractionDigits: 1 }))} ${label}`;
  if (abs >= 1e12) return formatUnit(1e12, "Bio");
  if (abs >= 1e9) return formatUnit(1e9, "Mrd");
  if (abs >= 1e6) return formatUnit(1e6, "Mio");
  return value.toLocaleString("de-DE");
}

function renderDevMode() {
  if (devModeToggleButton) {
    devModeToggleButton.textContent = `Dev-Modus: ${state.devMode ? "An" : "Aus"}`;
    devModeToggleButton.classList.toggle("active", state.devMode);
  }
  if (devModeExitButton) {
    devModeExitButton.classList.toggle("hidden", !state.devMode);
  }
  if (devModeStateEl) {
    devModeStateEl.classList.toggle("hidden", !state.devMode);
    devModeStateEl.textContent = state.devMode
      ? "Dev-Modus aktiv: eigener Local-Storage-Spielstand, Gratis-Kaeufe und keine Level-Sperren."
      : "Dev-Modus inaktiv.";
  }
}

function updateVersionLink() {
  if (!appVersionEl || !appVersionLinkEl) {
    return;
  }
  const version = appVersionEl.textContent?.trim() || "";
  if (version.startsWith("v")) {
    appVersionLinkEl.href = `${RELEASES_BASE_URL}/tag/${version}`;
    appVersionLinkEl.removeAttribute("aria-disabled");
    return;
  }
  appVersionLinkEl.href = RELEASES_BASE_URL;
  appVersionLinkEl.setAttribute("aria-disabled", "true");
}

function toggleDevMode() {
  const nextMode = !state.devMode;
  saveState();
  state.devMode = nextMode;
  try {
    localStorage.setItem(DEV_MODE_KEY, String(state.devMode));
  } catch (error) {
    // Ignore storage failures (private mode, quota).
  }
  loadState(nextMode);
  updateStats();
}

function setDisplayValue(el, value, suffix = "", shortFormatter = format, fullFormatter = formatFull) {
  if (!el) return;
  const shortValue = `${shortFormatter(value)}${suffix}`;
  const fullValue = `${fullFormatter(value)}${suffix}`;
  el.dataset.short = shortValue;
  el.dataset.full = fullValue;
  if (!el.dataset.showFull) {
    el.dataset.showFull = "false";
  }
  el.textContent = el.dataset.showFull === "true" ? fullValue : shortValue;
  if (!el.dataset.toggleBound) {
    el.dataset.toggleBound = "true";
    el.addEventListener("click", () => {
      el.dataset.showFull = el.dataset.showFull === "true" ? "false" : "true";
      el.textContent = el.dataset.showFull === "true" ? el.dataset.full : el.dataset.short;
    });
  }
}

function costFor(upgrade) {
  return Math.floor(upgrade.baseCost * upgradeLevelCostMultiplier() * Math.pow(1.15, upgrade.count));
}

function renderLevelProgress() {
  const requirement = currentLevelRequirement();
  const gameBusy = state.towerActive || blackjackActive || slotsSpinning || rouletteSpinning || wheelSpinning;
  const progress = state.devMode
    ? 1
    : Math.max(0, Math.min(1, requirement > 0 ? state.cookies / requirement : 0));
  const canLevelUp = !gameBusy && canAfford(requirement);
  if (levelEl) {
    levelEl.textContent = String(state.level);
  }
  if (levelMultiplierEl) {
    levelMultiplierEl.textContent = `Gewinn-Multiplikator x${formatMultiplier(levelGainMultiplier())}`;
  }
  if (levelRequirementEl) {
    levelRequirementEl.textContent = `Naechstes Level: ${formatClicks(requirement)}`;
  }
  if (levelProgressFillEl) {
    levelProgressFillEl.style.width = `${Math.round(progress * 100)}%`;
  }
  if (levelProgressTextEl) {
    levelProgressTextEl.textContent = state.devMode
      ? `Dev frei / ${formatClicks(requirement)}`
      : `${formatClicks(Math.min(state.cookies, requirement))} / ${formatClicks(requirement)}`;
  }
  if (levelProgressWrapEl) {
    levelProgressWrapEl.classList.toggle("hidden", canLevelUp);
  }
  if (levelButton) {
    levelButton.textContent = `Auf Level ${state.level + 1}`;
    levelButton.disabled = !canLevelUp;
    levelButton.classList.toggle("hidden", !canLevelUp);
  }
}

function renderUpgradeTabs() {
  upgradeTabs.forEach((tab) => {
    const isActive = tab.dataset.upgradeTab === activeUpgradeTab;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
}

function renderUpgrades() {
  upgradeList.innerHTML = "";
  renderUpgradeTabs();
  upgrades.forEach((upgrade, index) => {
    if (upgrade.type !== activeUpgradeTab) {
      return;
    }

    const item = document.createElement("div");
    item.className = "upgrade";

    const info = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = `${upgrade.name} (${upgrade.count})`;

    const currentCost = costFor(upgrade);
    const desc = document.createElement("p");
    desc.textContent = state.devMode
      ? `${upgrade.desc} - Kosten: Dev gratis (${format(currentCost)})`
      : `${upgrade.desc} - Kosten: ${format(currentCost)}`;

    info.appendChild(title);
    info.appendChild(desc);

    const button = document.createElement("button");
    button.textContent = "Kaufen";
    button.disabled = !canAfford(currentCost);

    button.addEventListener("click", () => buyUpgrade(index));

    item.appendChild(info);
    item.appendChild(button);

    if (!button.disabled) {
      item.classList.add("affordable");
    }

    upgradeList.appendChild(item);
  });
}

function selectColorCosmetic(key) {
  const cosmetic = colorCosmetics.find((entry) => entry.key === key && entry.owned);
  if (!cosmetic) {
    return;
  }
  state.activeColor = cosmetic.key;
  applyCosmeticTheme();
  updateStats();
}

function buyColorCosmetic(key) {
  const cosmetic = colorCosmetics.find((entry) => entry.key === key);
  if (!cosmetic || cosmetic.owned || !canAfford(cosmetic.cost)) {
    return;
  }
  spendCookies(cosmetic.cost);
  cosmetic.owned = true;
  state.activeColor = cosmetic.key;
  applyCosmeticTheme();
  showGameToast(state.devMode ? 0 : -cosmetic.cost, `${cosmetic.name} Farbe`);
  updateStats();
}

function selectAccessoryCosmetic(key) {
  const cosmetic = accessoryCosmetics.find((entry) => entry.key === key && entry.owned);
  if (!cosmetic) {
    return;
  }
  state.activeAccessory = cosmetic.key;
  applyCosmeticTheme();
  updateStats();
}

function buyAccessoryCosmetic(key) {
  const cosmetic = accessoryCosmetics.find((entry) => entry.key === key);
  if (!cosmetic || cosmetic.owned || !canAfford(cosmetic.cost)) {
    return;
  }
  spendCookies(cosmetic.cost);
  cosmetic.owned = true;
  state.activeAccessory = cosmetic.key;
  applyCosmeticTheme();
  showGameToast(state.devMode ? 0 : -cosmetic.cost, `${cosmetic.name} Accessoire`);
  updateStats();
}

function selectSkinCosmetic(key) {
  const cosmetic = skinCosmetics.find((entry) => entry.key === key && entry.owned);
  if (!cosmetic) {
    return;
  }
  state.activeSkin = cosmetic.key;
  applyCosmeticTheme();
  updateStats();
}

function selectMiscCosmetic(key) {
  const cosmetic = miscCosmetics.find((entry) => entry.key === key && entry.owned);
  if (!cosmetic) {
    return;
  }
  state.activeMisc = cosmetic.key;
  applyCosmeticTheme();
  updateStats();
}

function buySkinCosmetic(key) {
  const cosmetic = skinCosmetics.find((entry) => entry.key === key);
  if (!cosmetic || cosmetic.owned || !canAfford(cosmetic.cost)) {
    return;
  }
  spendCookies(cosmetic.cost);
  cosmetic.owned = true;
  state.activeSkin = cosmetic.key;
  applyCosmeticTheme();
  showGameToast(state.devMode ? 0 : -cosmetic.cost, `${cosmetic.name} Skin`);
  updateStats();
}

function buyMiscCosmetic(key) {
  const cosmetic = miscCosmetics.find((entry) => entry.key === key);
  if (!cosmetic || cosmetic.owned || !canAfford(cosmetic.cost)) {
    return;
  }
  spendCookies(cosmetic.cost);
  cosmetic.owned = true;
  state.activeMisc = cosmetic.key;
  applyCosmeticTheme();
  showGameToast(state.devMode ? 0 : -cosmetic.cost, `${cosmetic.name} Sonstiges`);
  updateStats();
}

function renderCosmeticCards(listEl, entries, activeKey, onSelect, onBuy, previewFactory) {
  if (!listEl) {
    return;
  }
  listEl.innerHTML = "";
  entries.filter((cosmetic) => !cosmetic.hidden).forEach((cosmetic) => {
    const item = document.createElement("div");
    const isActive = cosmetic.key === activeKey;
    item.className = "cosmetic-card";
    if (cosmetic.owned) {
      item.classList.add("owned");
    }
    if (isActive) {
      item.classList.add("selected");
    }

    const preview = previewFactory(cosmetic);

    const info = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = cosmetic.name;

    const desc = document.createElement("p");
    desc.textContent = cosmetic.owned
      ? cosmetic.desc
      : (state.devMode
        ? `${cosmetic.desc} - Kosten: Dev gratis (${format(cosmetic.cost)})`
        : `${cosmetic.desc} - Kosten: ${format(cosmetic.cost)}`);

    info.appendChild(title);
    info.appendChild(desc);

    const button = document.createElement("button");
    if (isActive) {
      button.textContent = "Aktiv";
      button.disabled = true;
    } else if (cosmetic.owned) {
      button.textContent = "Auswaehlen";
      button.addEventListener("click", () => onSelect(cosmetic.key));
    } else {
      button.textContent = "Kaufen";
      button.disabled = !canAfford(cosmetic.cost);
      button.addEventListener("click", () => onBuy(cosmetic.key));
    }

    item.appendChild(preview);
    item.appendChild(info);
    item.appendChild(button);

    if (!cosmetic.owned && !button.disabled) {
      item.classList.add("affordable");
    }

    listEl.appendChild(item);
  });
}

function createColorPreview(cosmetic) {
  const preview = document.createElement("div");
  preview.className = "cosmetic-preview";
  Object.entries(cosmetic.theme).forEach(([key, value]) => {
    preview.style.setProperty(key, value);
  });
  if (activeSkinCosmetic().theme) {
    Object.entries(activeSkinCosmetic().theme).forEach(([key, value]) => {
      preview.style.setProperty(key, value);
    });
  }
  preview.dataset.skin = activeSkinCosmetic().key || "none";
  preview.dataset.misc = activeMiscCosmetic().key || "none";
  const previewSkin = document.createElement("span");
  previewSkin.className = `cookie-skin skin-${state.activeSkin || "none"}`;
  preview.appendChild(previewSkin);
  preview.appendChild(createMiscLayer(activeMiscCosmetic()));
  const previewAccessory = document.createElement("span");
  previewAccessory.className = `cookie-accessory accessory-${state.activeAccessory || "none"}`;
  preview.appendChild(previewAccessory);
  return preview;
}

function createSkinPreview(cosmetic) {
  const preview = document.createElement("div");
  preview.className = "cosmetic-preview";
  Object.entries(activeColorCosmetic().theme).forEach(([key, value]) => {
    preview.style.setProperty(key, value);
  });
  if (cosmetic.theme) {
    Object.entries(cosmetic.theme).forEach(([key, value]) => {
      preview.style.setProperty(key, value);
    });
  }
  preview.dataset.skin = cosmetic.key || "none";
  preview.dataset.misc = activeMiscCosmetic().key || "none";
  const previewSkin = document.createElement("span");
  previewSkin.className = `cookie-skin skin-${cosmetic.key || "none"}`;
  preview.appendChild(previewSkin);
  preview.appendChild(createMiscLayer(activeMiscCosmetic()));
  const previewAccessory = document.createElement("span");
  previewAccessory.className = `cookie-accessory accessory-${state.activeAccessory || "none"}`;
  preview.appendChild(previewAccessory);
  return preview;
}

function createMiscLayer(cosmetic) {
  const layer = document.createElement("span");
  layer.className = `cookie-misc misc-${cosmetic.key || "none"}`;
  layer.innerHTML = cosmetic.svg || "";
  return layer;
}

function createMiscPreview(cosmetic) {
  const preview = document.createElement("div");
  preview.className = "cosmetic-preview";
  Object.entries(activeColorCosmetic().theme).forEach(([key, value]) => {
    preview.style.setProperty(key, value);
  });
  if (activeSkinCosmetic().theme) {
    Object.entries(activeSkinCosmetic().theme).forEach(([key, value]) => {
      preview.style.setProperty(key, value);
    });
  }
  preview.dataset.skin = activeSkinCosmetic().key || "none";
  preview.dataset.misc = cosmetic.key || "none";
  const previewSkin = document.createElement("span");
  previewSkin.className = `cookie-skin skin-${state.activeSkin || "none"}`;
  preview.appendChild(previewSkin);
  preview.appendChild(createMiscLayer(cosmetic));
  const previewAccessory = document.createElement("span");
  previewAccessory.className = `cookie-accessory accessory-${state.activeAccessory || "none"}`;
  preview.appendChild(previewAccessory);
  return preview;
}

function createAccessoryPreview(cosmetic) {
  const preview = document.createElement("div");
  preview.className = "cosmetic-preview";
  Object.entries(activeColorCosmetic().theme).forEach(([key, value]) => {
    preview.style.setProperty(key, value);
  });
  if (activeSkinCosmetic().theme) {
    Object.entries(activeSkinCosmetic().theme).forEach(([key, value]) => {
      preview.style.setProperty(key, value);
    });
  }
  preview.dataset.skin = activeSkinCosmetic().key || "none";
  preview.dataset.misc = activeMiscCosmetic().key || "none";
  const previewSkin = document.createElement("span");
  previewSkin.className = `cookie-skin skin-${state.activeSkin || "none"}`;
  preview.appendChild(previewSkin);
  preview.appendChild(createMiscLayer(activeMiscCosmetic()));
  const previewAccessory = document.createElement("span");
  previewAccessory.className = `cookie-accessory accessory-${cosmetic.key || "none"}`;
  preview.appendChild(previewAccessory);
  return preview;
}

function openCosmeticsModal() {
  if (!cosmeticsModal) return;
  cosmeticsModal.classList.remove("hidden");
  cosmeticsModal.setAttribute("aria-hidden", "false");
  renderCosmetics();
}

function closeCosmeticsModal() {
  if (!cosmeticsModal) return;
  cosmeticsModal.classList.add("hidden");
  cosmeticsModal.setAttribute("aria-hidden", "true");
}

function renderCosmeticsTabs() {
  cosmeticsCategoryTabs.forEach((tab) => {
    const isActive = tab.dataset.cosmeticsCategory === activeCosmeticsCategory;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
}

function renderCosmeticsStage() {
  if (!cosmeticsPreviewCookie || !cosmeticsPreviewAccessory || !cosmeticsPreviewSkin || !cosmeticsPreviewMisc) {
    return;
  }
  const activeColor = activeColorCosmetic();
  const activeSkin = activeSkinCosmetic();
  const activeMisc = activeMiscCosmetic();
  const activeAccessory = activeAccessoryCosmetic();

  Object.entries(activeColor.theme).forEach(([key, value]) => {
    cosmeticsPreviewCookie.style.setProperty(key, value);
  });
  if (activeSkin.theme) {
    Object.entries(activeSkin.theme).forEach(([key, value]) => {
      cosmeticsPreviewCookie.style.setProperty(key, value);
    });
  }
  cosmeticsPreviewCookie.dataset.skin = activeSkin.key || "none";
  cosmeticsPreviewCookie.dataset.misc = activeMisc.key || "none";
  cosmeticsPreviewSkin.className = `cookie-skin skin-${activeSkin.key || "none"}`;
  cosmeticsPreviewMisc.className = `cookie-misc misc-${activeMisc.key || "none"}`;
  cosmeticsPreviewMisc.innerHTML = activeMisc.svg || "";
  cosmeticsPreviewAccessory.className = `cookie-accessory accessory-${activeAccessory.key || "none"}`;

  if (cosmeticsPreviewName) {
    cosmeticsPreviewName.textContent = `${activeColor.name} + ${activeSkin.name} + ${activeMisc.name} + ${activeAccessory.name}`;
  }
  if (cosmeticsPreviewMeta) {
    cosmeticsPreviewMeta.textContent = `Farbe: ${activeColor.name} | Skin: ${activeSkin.name} | Sonstiges: ${activeMisc.name} | Hut: ${activeAccessory.name}`;
  }
}

function renderCosmetics() {
  renderCosmeticsTabs();
  renderCosmeticsStage();
  if (activeCosmeticsCategory === "colors") {
    renderCosmeticCards(
      cosmeticsCatalogList,
      colorCosmetics,
      state.activeColor,
      selectColorCosmetic,
      buyColorCosmetic,
      createColorPreview
    );
    return;
  }

  if (activeCosmeticsCategory === "skins") {
    renderCosmeticCards(
      cosmeticsCatalogList,
      skinCosmetics,
      state.activeSkin,
      selectSkinCosmetic,
      buySkinCosmetic,
      createSkinPreview
    );
    return;
  }

  if (activeCosmeticsCategory === "misc") {
    renderCosmeticCards(
      cosmeticsCatalogList,
      miscCosmetics,
      state.activeMisc,
      selectMiscCosmetic,
      buyMiscCosmetic,
      createMiscPreview
    );
    return;
  }

  renderCosmeticCards(
    cosmeticsCatalogList,
    accessoryCosmetics,
    state.activeAccessory,
    selectAccessoryCosmetic,
    buyAccessoryCosmetic,
    createAccessoryPreview
  );
}

function updateStats() {
  renderDevMode();
  updateVersionLink();
  setDisplayValue(cookieCountEl, state.cookies);
  setDisplayValue(perClickEl, state.perClick);
  setDisplayValue(totalEl, state.total);
  setDisplayValue(clickCountEl, state.clicks);
  setDisplayValue(rateEl, state.cps, " / sek");
  renderLevelProgress();
  renderUpgrades();
  renderCosmetics();
  renderUnlocks();
  renderTower();
  renderBlackjack();
  renderSlots();
  renderWheel();
  renderRoulette();
  renderGameStats();
  updateFinanceOverview();
  saveState();
}

function renderUnlocks() {
  const entries = [
    { key: "tower", open: towerOpenButton, buy: towerBuyButton },
    { key: "blackjack", open: blackjackOpenButton, buy: blackjackBuyButton },
    { key: "slots", open: slotsOpenButton, buy: slotsBuyButton },
    { key: "roulette", open: rouletteOpenButton, buy: rouletteBuyButton },
    { key: "wheel", open: wheelOpenButton, buy: wheelBuyButton }
  ];
  entries.forEach(({ key, open, buy }) => {
    const unlocked = gameUnlocks[key].unlocked;
    const meetsLevelRequirement = state.devMode || state.level >= gameUnlocks[key].requiredLevel;
    if (open) open.disabled = !(unlocked || state.devMode);
    if (buy) {
      buy.disabled = unlocked || !meetsLevelRequirement || !canAfford(gameUnlocks[key].price);
      buy.textContent = unlocked
        ? "Freigeschaltet"
        : (meetsLevelRequirement
          ? (state.devMode
            ? `Freischalten (Dev gratis)`
            : `Freischalten (${format(gameUnlocks[key].price)})`)
          : `Ab Level ${gameUnlocks[key].requiredLevel}`);
    }
  });
}

function buyGame(key, label) {
  const entry = gameUnlocks[key];
  if (entry.unlocked) return;
  if (!state.devMode && state.level < entry.requiredLevel) {
    showGameToast(0, `${label} ab Level ${entry.requiredLevel}`);
    return;
  }
  if (!canAfford(entry.price)) {
    showGameToast(state.devMode ? 0 : -entry.price, label);
    return;
  }
  spendCookies(entry.price);
  entry.unlocked = true;
  showGameToast(state.devMode ? 0 : -entry.price, `${label} freigeschaltet`);
  updateStats();
}

function formatNet(value) {
  const sign = value > 0 ? "+" : "";
  return `${sign}${format(value)}`;
}

function formatFullNet(value) {
  const sign = value > 0 ? "+" : "";
  return `${sign}${formatFull(value)}`;
}

function renderGameStats() {
  const overall = {
    wins: gameStats.tower.wins + gameStats.blackjack.wins + gameStats.slots.wins + gameStats.roulette.wins + gameStats.wheel.wins,
    losses: gameStats.tower.losses + gameStats.blackjack.losses + gameStats.slots.losses + gameStats.roulette.losses + gameStats.wheel.losses,
    net: gameStats.tower.net + gameStats.blackjack.net + gameStats.slots.net + gameStats.roulette.net + gameStats.wheel.net
  };
  statsOverallEl.textContent = `${overall.wins}W / ${overall.losses}L (${formatNet(overall.net)})`;
  statsTowerEl.textContent = `${gameStats.tower.wins}W / ${gameStats.tower.losses}L (${formatNet(gameStats.tower.net)})`;
  statsBlackjackEl.textContent = `${gameStats.blackjack.wins}W / ${gameStats.blackjack.losses}L (${formatNet(gameStats.blackjack.net)})`;
  statsSlotsEl.textContent = `${gameStats.slots.wins}W / ${gameStats.slots.losses}L (${formatNet(gameStats.slots.net)})`;
  statsRouletteEl.textContent = `${gameStats.roulette.wins}W / ${gameStats.roulette.losses}L (${formatNet(gameStats.roulette.net)})`;
  statsWheelEl.textContent = `${gameStats.wheel.wins}W / ${gameStats.wheel.losses}L (${formatNet(gameStats.wheel.net)})`;
}

function updateFinanceOverview() {
  if (!financeModal) return;
  financeCookiesEl.textContent = formatFull(state.cookies);
  financePerClickEl.textContent = formatFull(state.perClick);
  financeCpsEl.textContent = formatFull(state.cps);
  financeTotalEl.textContent = formatFull(state.total);
  financeClicksEl.textContent = formatFull(state.clicks);
  financeTowerNetEl.textContent = formatFullNet(gameStats.tower.net);
  financeBlackjackNetEl.textContent = formatFullNet(gameStats.blackjack.net);
  financeSlotsNetEl.textContent = formatFullNet(gameStats.slots.net);
  financeRouletteNetEl.textContent = formatFullNet(gameStats.roulette.net);
  financeWheelNetEl.textContent = formatFullNet(gameStats.wheel.net);
}

function recordGameResult(key, bet, payout) {
  const net = payout - bet;
  if (net > 0) {
    gameStats[key].wins += 1;
  } else if (net < 0) {
    gameStats[key].losses += 1;
  }
  gameStats[key].net += net;
}

function showGameToast(net, label) {
  if (!gameToast) return;
  if (toastTimer) {
    clearTimeout(toastTimer);
    toastTimer = null;
  }
  gameToast.classList.remove("hidden", "win", "loss", "neutral");
  if (net > 0) {
    gameToast.classList.add("win");
    gameToast.textContent = `${label} Gewinn: +${format(net)}`;
  } else if (net < 0) {
    gameToast.classList.add("loss");
    gameToast.textContent = `${label} Verlust: ${format(net)}`;
  } else {
    gameToast.classList.add("neutral");
    gameToast.textContent = `${label} Unentschieden.`;
  }
  toastTimer = setTimeout(() => {
    gameToast.classList.add("hidden");
  }, 2200);
}

function openResetModal() {
  if (resetCosmeticsToggle) {
    resetCosmeticsToggle.checked = true;
  }
  resetModal.classList.remove("hidden");
  resetModal.setAttribute("aria-hidden", "false");
}

function closeResetModal() {
  resetModal.classList.add("hidden");
  resetModal.setAttribute("aria-hidden", "true");
}

function resetAccount() {
  const shouldResetCosmetics = resetCosmeticsToggle ? resetCosmeticsToggle.checked : true;

  state.cookies = 0;
  state.total = 0;
  state.clicks = 0;
  state.level = 1;
  state.basePerClick = 1;
  state.baseCps = 0;
  state.perClick = 1;
  state.cps = 0;
  if (shouldResetCosmetics) {
    state.activeColor = "classic";
    state.activeSkin = "none";
    state.activeMisc = "none";
    state.activeAccessory = "none";
  }
  state.bonusReady = false;
  bonusPanel.classList.add("hidden");
  state.lastBonusAt = 0;
  state.towerActive = false;
  state.towerBet = 0;
  state.towerStep = 0;
  state.towerMultiplier = 0;

  upgrades.forEach((upgrade) => {
    upgrade.count = 0;
  });
  recalculateProduction();
  if (shouldResetCosmetics) {
    resetCosmeticsState();
  }
  applyCosmeticTheme();

  Object.keys(gameStats).forEach((key) => {
    gameStats[key].wins = 0;
    gameStats[key].losses = 0;
    gameStats[key].net = 0;
  });

  Object.keys(gameUnlocks).forEach((key) => {
    gameUnlocks[key].unlocked = false;
  });

  blackjackDeck = [];
  blackjackActive = false;
  blackjackBet = 0;
  dealerHand = [];
  playerHand = [];
  slotsSpinning = false;
  rouletteSpinning = false;
  wheelSpinning = false;

  closeResetModal();
  updateStats();
}

function currentTowerChance() {
  return towerChances[Math.min(state.towerStep, towerChances.length - 1)];
}

function renderTowerVisual() {
  towerStack.innerHTML = "";
  for (let i = 0; i < state.towerStep; i += 1) {
    const block = document.createElement("div");
    block.className = "tower-block";
    const offset = i % 2 === 0 ? -6 : 6;
    block.style.setProperty("--tower-offset", `${offset}px`);
    towerStack.appendChild(block);
  }
}

function openTowerModal() {
  if (!gameUnlocks.tower.unlocked && !state.devMode) {
    return;
  }
  towerModal.classList.remove("hidden");
  towerModal.setAttribute("aria-hidden", "false");
  renderTower();
}

function closeTowerModal() {
  towerModal.classList.add("hidden");
  towerModal.setAttribute("aria-hidden", "true");
}

function openBlackjackModal() {
  if (!gameUnlocks.blackjack.unlocked && !state.devMode) {
    return;
  }
  blackjackModal.classList.remove("hidden");
  blackjackModal.setAttribute("aria-hidden", "false");
  renderBlackjack();
}

function closeBlackjackModal() {
  blackjackModal.classList.add("hidden");
  blackjackModal.setAttribute("aria-hidden", "true");
}

function openSlotsModal() {
  if (!gameUnlocks.slots.unlocked && !state.devMode) {
    return;
  }
  slotsModal.classList.remove("hidden");
  slotsModal.setAttribute("aria-hidden", "false");
  renderSlots();
}

function closeSlotsModal() {
  slotsModal.classList.add("hidden");
  slotsModal.setAttribute("aria-hidden", "true");
}

function openRouletteModal() {
  if (!gameUnlocks.roulette.unlocked && !state.devMode) {
    return;
  }
  rouletteModal.classList.remove("hidden");
  rouletteModal.setAttribute("aria-hidden", "false");
  renderRoulette();
}

function closeRouletteModal() {
  rouletteModal.classList.add("hidden");
  rouletteModal.setAttribute("aria-hidden", "true");
}

function openWheelModal() {
  if (!gameUnlocks.wheel.unlocked && !state.devMode) {
    return;
  }
  wheelModal.classList.remove("hidden");
  wheelModal.setAttribute("aria-hidden", "false");
  renderWheel();
}

function closeWheelModal() {
  wheelModal.classList.add("hidden");
  wheelModal.setAttribute("aria-hidden", "true");
}

function openFinanceModal() {
  if (!financeModal) return;
  financeModal.classList.remove("hidden");
  financeModal.setAttribute("aria-hidden", "false");
  updateFinanceOverview();
}

function closeFinanceModal() {
  if (!financeModal) return;
  financeModal.classList.add("hidden");
  financeModal.setAttribute("aria-hidden", "true");
}

function clickCookie() {
  state.cookies += state.perClick;
  state.total += state.perClick;
  state.clicks += 1;
  maybeTriggerBonus();
  updateStats();
}

function buyUpgrade(index) {
  const upgrade = upgrades[index];
  const cost = costFor(upgrade);
  if (!canAfford(cost)) {
    return;
  }

  spendCookies(cost);
  upgrade.count += 1;
  recalculateProduction();
  updateStats();
}

function tick() {
  if (state.cps > 0) {
    state.cookies += state.cps;
    state.total += state.cps;
    updateStats();
  }
}

function maybeTriggerBonus() {
  const now = Date.now();
  if (state.bonusReady || now - state.lastBonusAt < 12000) {
    return;
  }
  if (Math.random() < 0.18) {
    state.bonusReady = true;
    state.lastBonusAt = now;
    bonusPanel.classList.remove("hidden");
  }
}

function collectBonus() {
  if (!state.bonusReady) {
    return;
  }
  const bonusAmount = scaleGain(50 + (state.basePerClick * 2));
  state.cookies += bonusAmount;
  state.total += bonusAmount;
  state.bonusReady = false;
  bonusPanel.classList.add("hidden");
  updateStats();
}

function levelUp() {
  const requirement = currentLevelRequirement();
  if (!canAfford(requirement)) {
    return;
  }

  state.level += 1;
  if (state.devMode) {
    state.cookies = Math.max(0, state.cookies);
  } else {
    state.cookies = 0;
  }
  upgrades.forEach((upgrade) => {
    upgrade.count = 0;
  });
  state.bonusReady = false;
  bonusPanel.classList.add("hidden");
  state.towerActive = false;
  state.towerBet = 0;
  state.towerStep = 0;
  state.towerMultiplier = 0;
  blackjackDeck = [];
  blackjackActive = false;
  blackjackBet = 0;
  dealerHand = [];
  playerHand = [];
  if (slotSpinTimer) {
    clearInterval(slotSpinTimer);
    slotSpinTimer = null;
  }
  slotsSpinning = false;
  rouletteSpinning = false;
  wheelSpinning = false;
  recalculateProduction();
  updateStats();
}

function createDeck() {
  const suits = ["S", "H", "D", "C"];
  const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const deck = [];
  suits.forEach((suit) => {
    ranks.forEach((rank) => {
      deck.push({ rank, suit });
    });
  });
  return deck;
}

function shuffle(deck) {
  for (let i = deck.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

function cardValue(card) {
  if (card.rank === "A") return 11;
  if (["K", "Q", "J"].includes(card.rank)) return 10;
  return Number(card.rank);
}

function handValue(hand) {
  let total = hand.reduce((sum, card) => sum + cardValue(card), 0);
  let aces = hand.filter((card) => card.rank === "A").length;
  while (total > 21 && aces > 0) {
    total -= 10;
    aces -= 1;
  }
  return total;
}

function renderHand(container, hand, hideFirst) {
  container.innerHTML = "";
  hand.forEach((card, index) => {
    const cardEl = document.createElement("div");
    cardEl.className = "card";
    cardEl.textContent = hideFirst && index === 0 ? "??" : `${card.rank}${card.suit}`;
    container.appendChild(cardEl);
  });
}

function renderBlackjack() {
  const dealerTotal = handValue(dealerHand);
  const playerTotal = handValue(playerHand);
  const hideDealer = blackjackActive;
  renderHand(dealerHandEl, dealerHand, hideDealer);
  renderHand(playerHandEl, playerHand, false);
  dealerTotalEl.textContent = dealerHand.length ? (hideDealer ? "Total: ?" : `Total: ${dealerTotal}`) : "";
  playerTotalEl.textContent = playerHand.length ? `Total: ${playerTotal}` : "";
  blackjackDealButton.disabled = blackjackActive || !canAfford(Number(blackjackBetInput.value) || 0) || (Number(blackjackBetInput.value) || 0) <= 0;
  blackjackHitButton.disabled = !blackjackActive;
  blackjackStandButton.disabled = !blackjackActive;
}

function endBlackjack(result) {
  blackjackActive = false;
  const payout = scalePayout(Math.floor(blackjackBet * result), blackjackBet);
  if (payout > 0) {
    state.cookies += payout;
    state.total += payout;
  }
  recordGameResult("blackjack", blackjackBet, payout);
  showGameToast(payout - blackjackBet, "Blackjack");
  blackjackBet = 0;
  updateStats();
}

function resolveDealer() {
  const playerTotal = handValue(playerHand);
  while (handValue(dealerHand) < 17) {
    dealerHand.push(blackjackDeck.pop());
  }
  const dealerTotal = handValue(dealerHand);
  if (playerTotal > 21) {
    blackjackStatus.textContent = "Bust! Einsatz verloren.";
    endBlackjack(0);
    return;
  }
  if (dealerTotal > 21 || playerTotal > dealerTotal) {
    blackjackStatus.textContent = "Gewonnen! Auszahlung x2.";
    endBlackjack(2);
    return;
  }
  if (dealerTotal === playerTotal) {
    blackjackStatus.textContent = "Push. Einsatz zurueck.";
    endBlackjack(1);
    return;
  }
  blackjackStatus.textContent = "Dealer gewinnt.";
  endBlackjack(0);
}

function dealBlackjack() {
  const bet = Math.floor(Number(blackjackBetInput.value) || 0);
  if (bet <= 0 || !canAfford(bet)) {
    blackjackStatus.textContent = "Nicht genug Kekse fuer diesen Einsatz.";
    return;
  }
  spendCookies(bet);
  blackjackBet = bet;
  blackjackDeck = shuffle(createDeck());
  dealerHand = [blackjackDeck.pop(), blackjackDeck.pop()];
  playerHand = [blackjackDeck.pop(), blackjackDeck.pop()];
  blackjackActive = true;
  const playerTotal = handValue(playerHand);
  if (playerTotal === 21) {
    blackjackStatus.textContent = "Blackjack! Dealer deckt auf.";
    resolveDealer();
    return;
  }
  blackjackStatus.textContent = "Hit oder Stand?";
  updateStats();
}

function hitBlackjack() {
  if (!blackjackActive) return;
  playerHand.push(blackjackDeck.pop());
  const total = handValue(playerHand);
  if (total > 21) {
    blackjackStatus.textContent = "Bust! Einsatz verloren.";
    endBlackjack(0);
    return;
  }
  blackjackStatus.textContent = "Hit oder Stand?";
  updateStats();
}

function standBlackjack() {
  if (!blackjackActive) return;
  resolveDealer();
}

function pickSlotSymbol() {
  const total = slotSymbols.reduce((sum, symbol) => sum + symbol.weight, 0);
  let roll = Math.random() * total;
  for (const symbol of slotSymbols) {
    roll -= symbol.weight;
    if (roll <= 0) {
      return symbol;
    }
  }
  return slotSymbols[0];
}

function renderSlots() {
  const betValue = Number(slotsBetInput.value) || 0;
  slotsSpinButton.disabled = slotsSpinning || betValue <= 0 || !canAfford(betValue);
}

function spinSlots() {
  if (slotsSpinning) return;
  const bet = Math.floor(Number(slotsBetInput.value) || 0);
  if (bet <= 0 || !canAfford(bet)) {
    slotsStatus.textContent = "Nicht genug Kekse fuer diesen Einsatz.";
    return;
  }
  spendCookies(bet);
  slotsSpinning = true;
  slotsStatus.textContent = "Walzen drehen...";
  slotReels.forEach((reel) => reel.classList.add("spinning"));
  const spinTime = 1200;
  slotSpinTimer = setInterval(() => {
    slotReels.forEach((reel) => {
      const symbol = pickSlotSymbol();
      reel.textContent = symbol.icon;
    });
  }, 120);
  setTimeout(() => {
    clearInterval(slotSpinTimer);
    const finalSymbols = slotReels.map((reel) => {
      const symbol = pickSlotSymbol();
      reel.textContent = symbol.icon;
      return symbol;
    });
    slotReels.forEach((reel) => reel.classList.remove("spinning"));
    slotsSpinning = false;
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    let totalMultiplier = 0;
    lines.forEach((line) => {
      const [a, b, c] = line.map((index) => finalSymbols[index]);
      if (a.key === b.key && b.key === c.key) {
        totalMultiplier += a.multiplier;
        return;
      }
      const cookieCount = [a, b, c].filter((symbol) => symbol.key === "COOKIE").length;
      if (cookieCount === 2) {
        totalMultiplier += 1.5;
      }
    });
    const payout = scalePayout(Math.floor(bet * totalMultiplier), bet);
    if (payout > 0) {
      state.cookies += payout;
      state.total += payout;
      slotsStatus.textContent = `Gewonnen! Gesamt x${totalMultiplier}.`;
    } else {
      slotsStatus.textContent = "Leider leer ausgegangen.";
    }
    recordGameResult("slots", bet, payout);
    showGameToast(payout - bet, "Slots");
    updateStats();
  }, spinTime);
  updateStats();
}

function rouletteColor(number) {
  if (number === 0) return "green";
  return rouletteRedNumbers.has(number) ? "red" : "black";
}

function rouletteColorLabel(color) {
  if (color === "green") return "Gruen";
  if (color === "red") return "Rot";
  return "Schwarz";
}

function roulettePayoutMultiplier(choice) {
  if (choice === "number") return 36;
  if (choice.startsWith("dozen")) return 3;
  return 2;
}

function rouletteBetLabel(choice) {
  switch (choice) {
    case "red":
      return "Rot";
    case "black":
      return "Schwarz";
    case "even":
      return "Gerade";
    case "odd":
      return "Ungerade";
    case "low":
      return "1-18";
    case "high":
      return "19-36";
    case "dozen1":
      return "1st 12";
    case "dozen2":
      return "2nd 12";
    case "dozen3":
      return "3rd 12";
    case "number":
      return `Zahl ${rouletteBetNumber}`;
    default:
      return "Unbekannt";
  }
}

function isWinningRouletteBet(choice, number) {
  switch (choice) {
    case "number":
      return number === rouletteBetNumber;
    case "red":
    case "black":
      return rouletteColor(number) === choice;
    case "even":
      return number !== 0 && number % 2 === 0;
    case "odd":
      return number % 2 === 1;
    case "low":
      return number >= 1 && number <= 18;
    case "high":
      return number >= 19 && number <= 36;
    case "dozen1":
      return number >= 1 && number <= 12;
    case "dozen2":
      return number >= 13 && number <= 24;
    case "dozen3":
      return number >= 25 && number <= 36;
    default:
      return false;
  }
}

function buildRouletteWheel() {
  const anglePer = 360 / rouletteOrder.length;
  const segments = rouletteOrder.map((number, index) => {
    const start = index * anglePer;
    const end = start + anglePer;
    const fill = number === 0
      ? "#1f8f4a"
      : (rouletteRedNumbers.has(number) ? "#b82b2b" : "#111");
    return `${fill} ${start}deg ${end}deg`;
  });
  rouletteWheel.style.background = `conic-gradient(${segments.join(", ")})`;

  const labels = document.createDocumentFragment();
  rouletteOrder.forEach((number, index) => {
    const angle = index * anglePer + anglePer / 2;
    const wrapper = document.createElement("div");
    wrapper.className = "roulette-pocket-label";
    wrapper.style.transform = `rotate(${angle}deg)`;

    const label = document.createElement("span");
    label.textContent = number;
    label.dataset.angle = String(angle);
    if (number === 0) label.classList.add("is-zero");

    wrapper.appendChild(label);
    labels.appendChild(wrapper);
  });

  rouletteWheel.replaceChildren(labels);
  updateRouletteWheelLabels(rouletteRotation, false);
}

function updateRouletteWheelLabels(rotation, animate) {
  const labels = rouletteWheel.querySelectorAll(".roulette-pocket-label span");
  labels.forEach((label) => {
    const angle = Number(label.dataset.angle || 0);
    label.style.transition = animate ? "transform 2.4s cubic-bezier(0.2, 0.8, 0.2, 1)" : "none";
    label.style.transform = `translateY(16px) rotate(${-angle - rotation}deg)`;
  });
}

function createRouletteNumberButton(number) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `roulette-cell ${rouletteColor(number)}`;
  button.textContent = number;
  if (rouletteBetChoice === "number" && rouletteBetNumber === number) {
    button.classList.add("active");
  }
  if (number === 0) {
    button.classList.add("roulette-zero");
  }
  button.addEventListener("click", () => {
    rouletteBetChoice = "number";
    rouletteBetNumber = number;
    renderRoulette();
  });
  return button;
}

function renderRouletteBoard() {
  const board = document.createDocumentFragment();
  board.appendChild(createRouletteNumberButton(0));
  rouletteTableRows.forEach((row) => {
    row.forEach((number) => {
      board.appendChild(createRouletteNumberButton(number));
    });
  });
  rouletteBoard.replaceChildren(board);
}

function renderRoulette() {
  const betValue = Number(rouletteBetInput.value) || 0;
  rouletteSpinButton.disabled = rouletteSpinning || betValue <= 0 || !canAfford(betValue);
  rouletteChips.forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.bet === rouletteBetChoice);
  });
  renderRouletteBoard();
  rouletteSelection.textContent = `Aktiver Tipp: ${rouletteBetLabel(rouletteBetChoice)} (x${roulettePayoutMultiplier(rouletteBetChoice)})`;
}

function spinRoulette() {
  if (rouletteSpinning) return;
  const bet = Math.floor(Number(rouletteBetInput.value) || 0);
  if (bet <= 0 || !canAfford(bet)) {
    rouletteStatus.textContent = "Nicht genug Kekse fuer diesen Einsatz.";
    return;
  }
  spendCookies(bet);
  rouletteSpinning = true;
  rouletteStatus.textContent = "Rad dreht...";

  const index = Math.floor(Math.random() * rouletteOrder.length);
  const number = rouletteOrder[index];
  const color = rouletteColor(number);
  const anglePer = 360 / rouletteOrder.length;
  const targetAngle = index * anglePer + anglePer / 2;
  rouletteRotation += 360 * 6 + (360 - targetAngle);
  updateRouletteWheelLabels(rouletteRotation, true);
  rouletteWheel.style.transform = `rotate(${rouletteRotation}deg)`;

  setTimeout(() => {
    rouletteSpinning = false;
    let payout = 0;
    if (isWinningRouletteBet(rouletteBetChoice, number)) {
      payout = scalePayout(bet * roulettePayoutMultiplier(rouletteBetChoice), bet);
    }
    if (payout > 0) {
      state.cookies += payout;
      state.total += payout;
      rouletteStatus.textContent = `Gewonnen! Ergebnis: ${number} (${rouletteColorLabel(color)}). ${rouletteBetLabel(rouletteBetChoice)} trifft, Auszahlung x${roulettePayoutMultiplier(rouletteBetChoice)}.`;
    } else {
      rouletteStatus.textContent = `Verloren. Ergebnis: ${number} (${rouletteColorLabel(color)}).`;
    }
    recordGameResult("roulette", bet, payout);
    showGameToast(payout - bet, "Roulette");
    updateStats();
  }, 2400);
  updateStats();
}

function renderWheel() {
  const betValue = Number(wheelBetInput.value) || 0;
  wheelSpinButton.disabled = wheelSpinning || betValue <= 0 || !canAfford(betValue);
}

function pickWheelIndex() {
  const total = wheelSegments.reduce((sum, segment) => sum + segment.weight, 0);
  let roll = Math.random() * total;
  for (let i = 0; i < wheelSegments.length; i += 1) {
    roll -= wheelSegments[i].weight;
    if (roll <= 0) {
      return i;
    }
  }
  return 0;
}

function normalizeRotation(angle) {
  return ((angle % 360) + 360) % 360;
}

function spinWheel() {
  if (wheelSpinning) return;
  const bet = Math.floor(Number(wheelBetInput.value) || 0);
  if (bet <= 0 || !canAfford(bet)) {
    wheelStatus.textContent = "Nicht genug Kekse fuer diesen Einsatz.";
    return;
  }
  spendCookies(bet);
  wheelSpinning = true;
  wheelStatus.textContent = "Rad dreht...";

  const index = pickWheelIndex();
  const segment = wheelSegments[index];
  const anglePer = 360 / wheelSegments.length;
  const targetAngle = index * anglePer + anglePer / 2;
  const currentRotation = normalizeRotation(wheelRotation);
  const desiredRotation = (360 - targetAngle) % 360;
  const extraRotation = (desiredRotation - currentRotation + 360) % 360;
  wheelRotation += 360 * 6 + extraRotation;
  fortuneWheel.style.transform = `rotate(${wheelRotation}deg)`;

  setTimeout(() => {
    wheelSpinning = false;
    const payout = scalePayout(Math.floor(bet * segment.multiplier), bet);
    if (payout > 0) {
      state.cookies += payout;
      state.total += payout;
      wheelStatus.textContent = `Gewonnen: ${segment.label}. Auszahlung x${segment.multiplier}.`;
    } else if (segment.multiplier === 0) {
      wheelStatus.textContent = "Niete. Kein Gewinn.";
    } else {
      wheelStatus.textContent = `Ergebnis: ${segment.label}.`;
    }
    recordGameResult("wheel", bet, payout);
    showGameToast(payout - bet, "Gluecksrad");
    updateStats();
  }, 2600);
  updateStats();
}

function renderTower() {
  const payout = scalePayout(Math.floor(state.towerBet * state.towerMultiplier), state.towerBet);
  towerMultiplierEl.textContent = `x${state.towerMultiplier}`;
  setDisplayValue(towerPayoutEl, payout);

  const towerBetValue = Number(towerBetInput.value) || 0;
  const canStart = !state.towerActive && towerBetValue > 0 && canAfford(towerBetValue);
  towerStartButton.disabled = !canStart;
  towerClimbButton.disabled = !state.towerActive;
  towerCashoutButton.disabled = !state.towerActive;
  renderTowerVisual();

  if (!state.towerActive) {
    towerStatus.textContent = "Setze einen Einsatz und starte. Ab x1.5 machst du Gewinn.";
  }
}

function startTower() {
  const bet = Math.floor(Number(towerBetInput.value) || 0);
  if (bet <= 0 || !canAfford(bet)) {
    towerStatus.textContent = "Nicht genug Kekse fuer diesen Einsatz.";
    return;
  }
  towerVisual.classList.remove("tower-crash");
  spendCookies(bet);
  state.towerActive = true;
  state.towerBet = bet;
  state.towerStep = 0;
  state.towerMultiplier = towerSteps[state.towerStep];
  towerStatus.textContent = `Erste Stufe: ${Math.round(currentTowerChance() * 100)}% Chance.`;
  updateStats();
}

function climbTower() {
  if (!state.towerActive) {
    return;
  }
  const success = Math.random() < currentTowerChance();
  if (!success) {
    const lostBet = state.towerBet;
    state.towerActive = false;
    state.towerBet = 0;
    state.towerStep = 0;
    state.towerMultiplier = 0;
    towerVisual.classList.add("tower-crash");
    towerStatus.textContent = "Crash! Der Tower stuerzt ein.";
    setTimeout(() => {
      towerVisual.classList.remove("tower-crash");
      renderTowerVisual();
    }, 420);
    recordGameResult("tower", lostBet, 0);
    showGameToast(-lostBet, "Tower");
    updateStats();
    return;
  }
  state.towerStep = Math.min(state.towerStep + 1, towerSteps.length - 1);
  state.towerMultiplier = towerSteps[state.towerStep];
  towerStatus.textContent = `Geschafft! Aktuell x${state.towerMultiplier}. Naechste Chance: ${Math.round(currentTowerChance() * 100)}%.`;
  updateStats();
}

function cashoutTower() {
  if (!state.towerActive) {
    return;
  }
  const payout = scalePayout(Math.floor(state.towerBet * state.towerMultiplier), state.towerBet);
  const bet = state.towerBet;
  state.cookies += payout;
  state.total += payout;
  state.towerActive = false;
  state.towerBet = 0;
  state.towerStep = 0;
  state.towerMultiplier = 0;
  towerStatus.textContent = "Ausgezahlt. Tower zuruecksetzen oder erneut riskieren?";
  recordGameResult("tower", bet, payout);
  showGameToast(payout - bet, "Tower");
  updateStats();
}

cookieButton.addEventListener("click", clickCookie);
bonusButton.addEventListener("click", collectBonus);
if (cosmeticsOpenButton) cosmeticsOpenButton.addEventListener("click", openCosmeticsModal);
if (cosmeticsCloseButton) cosmeticsCloseButton.addEventListener("click", closeCosmeticsModal);
if (cosmeticsCloseOverlay) cosmeticsCloseOverlay.addEventListener("click", closeCosmeticsModal);
cosmeticsCategoryTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activeCosmeticsCategory = tab.dataset.cosmeticsCategory || "colors";
    renderCosmetics();
  });
});
if (financeOpenButton) financeOpenButton.addEventListener("click", openFinanceModal);
if (financeCloseButton) financeCloseButton.addEventListener("click", closeFinanceModal);
if (financeCloseOverlay) financeCloseOverlay.addEventListener("click", closeFinanceModal);
towerOpenButton.addEventListener("click", openTowerModal);
towerCloseButton.addEventListener("click", closeTowerModal);
towerCloseOverlay.addEventListener("click", closeTowerModal);
towerBetInput.addEventListener("input", renderTower);
towerStartButton.addEventListener("click", startTower);
towerClimbButton.addEventListener("click", climbTower);
towerCashoutButton.addEventListener("click", cashoutTower);
towerBuyButton.addEventListener("click", () => buyGame("tower", "Tower"));
blackjackOpenButton.addEventListener("click", openBlackjackModal);
blackjackCloseButton.addEventListener("click", closeBlackjackModal);
blackjackCloseOverlay.addEventListener("click", closeBlackjackModal);
blackjackDealButton.addEventListener("click", dealBlackjack);
blackjackHitButton.addEventListener("click", hitBlackjack);
blackjackStandButton.addEventListener("click", standBlackjack);
blackjackBuyButton.addEventListener("click", () => buyGame("blackjack", "Blackjack"));
slotsOpenButton.addEventListener("click", openSlotsModal);
slotsCloseButton.addEventListener("click", closeSlotsModal);
slotsCloseOverlay.addEventListener("click", closeSlotsModal);
slotsSpinButton.addEventListener("click", spinSlots);
slotsBetInput.addEventListener("input", renderSlots);
slotsBuyButton.addEventListener("click", () => buyGame("slots", "Slots"));
rouletteOpenButton.addEventListener("click", openRouletteModal);
rouletteCloseButton.addEventListener("click", closeRouletteModal);
rouletteCloseOverlay.addEventListener("click", closeRouletteModal);
rouletteSpinButton.addEventListener("click", spinRoulette);
rouletteBetInput.addEventListener("input", renderRoulette);
rouletteChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    rouletteBetChoice = chip.dataset.bet;
    renderRoulette();
  });
});
rouletteBuyButton.addEventListener("click", () => buyGame("roulette", "Roulette"));
wheelOpenButton.addEventListener("click", openWheelModal);
wheelCloseButton.addEventListener("click", closeWheelModal);
wheelCloseOverlay.addEventListener("click", closeWheelModal);
wheelSpinButton.addEventListener("click", spinWheel);
if (levelButton) levelButton.addEventListener("click", levelUp);
wheelBetInput.addEventListener("input", renderWheel);
wheelBuyButton.addEventListener("click", () => buyGame("wheel", "Gluecksrad"));
upgradeTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activeUpgradeTab = tab.dataset.upgradeTab || "click";
    renderUpgrades();
  });
});
resetOpenButton.addEventListener("click", openResetModal);
if (devModeExitButton) devModeExitButton.addEventListener("click", toggleDevMode);
if (devModeToggleButton) devModeToggleButton.addEventListener("click", toggleDevMode);
resetCloseButton.addEventListener("click", closeResetModal);
resetCloseOverlay.addEventListener("click", closeResetModal);
resetCancelButton.addEventListener("click", closeResetModal);
resetConfirmButton.addEventListener("click", resetAccount);

buildRouletteWheel();
setInterval(tick, 1000);
loadState();
updateStats();


