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
const activeBoostTotalEl = document.getElementById("activeBoostTotal");
const activeBoostListEl = document.getElementById("activeBoostList");
const boostInventoryListEl = document.getElementById("boostInventoryList");
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
const blackjackAllInButton = document.getElementById("blackjackAllIn");
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
const slotsAllInButton = document.getElementById("slotsAllIn");
const slotsSpinButton = document.getElementById("slotsSpin");
const slotsStatus = document.getElementById("slotsStatus");
const lootboxModal = document.getElementById("lootboxModal");
const lootboxOpenButton = document.getElementById("lootboxOpen");
const lootboxBuyButton = document.getElementById("lootboxBuy");
const lootboxCloseButton = document.getElementById("lootboxClose");
const lootboxCloseOverlay = document.getElementById("lootboxCloseOverlay");
const lootboxRollButton = document.getElementById("lootboxRoll");
const lootboxStatus = document.getElementById("lootboxStatus");
const lootboxResult = document.getElementById("lootboxResult");
const lootboxCrate = document.getElementById("lootboxCrate");
const lootboxParticles = document.getElementById("lootboxParticles");
const lootboxPreviewTrack = document.getElementById("lootboxPreviewTrack");
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
const statsLootboxEl = document.getElementById("statsLootbox");
const achievementSummaryEl = document.getElementById("achievementSummary");
const achievementListEl = document.getElementById("achievementList");
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
const financeLootboxNetEl = document.getElementById("financeLootboxNet");
const rouletteModal = document.getElementById("rouletteModal");
const rouletteOpenButton = document.getElementById("rouletteOpen");
const rouletteBuyButton = document.getElementById("rouletteBuy");
const rouletteCloseButton = document.getElementById("rouletteClose");
const rouletteCloseOverlay = document.getElementById("rouletteCloseOverlay");
const rouletteBetInput = document.getElementById("rouletteBet");
const rouletteAllInButton = document.getElementById("rouletteAllIn");
const rouletteSpinButton = document.getElementById("rouletteSpin");
const rouletteStatus = document.getElementById("rouletteStatus");
const rouletteWheel = document.getElementById("rouletteWheel");
const rouletteChips = Array.from(document.querySelectorAll(".roulette-chip"));
const rouletteBoard = document.getElementById("rouletteBoard");
const rouletteSelection = document.getElementById("rouletteSelection");
const statsWheelEl = document.getElementById("statsWheel");
const gameToast = document.getElementById("gameToast");
const achievementModal = document.getElementById("achievementModal");
const achievementOpenButton = document.getElementById("achievementOpen");
const achievementCloseButton = document.getElementById("achievementClose");
const achievementCloseOverlay = document.getElementById("achievementCloseOverlay");
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
const accountAuthOpenButton = document.getElementById("accountAuthOpen");
const accountLogoutButton = document.getElementById("accountLogout");
const accountStateEl = document.getElementById("accountState");
const wheelModal = document.getElementById("wheelModal");
const wheelOpenButton = document.getElementById("wheelOpen");
const wheelBuyButton = document.getElementById("wheelBuy");
const wheelCloseButton = document.getElementById("wheelClose");
const wheelCloseOverlay = document.getElementById("wheelCloseOverlay");
const wheelBetInput = document.getElementById("wheelBet");
const wheelAllInButton = document.getElementById("wheelAllIn");
const wheelSpinButton = document.getElementById("wheelSpin");
const wheelStatus = document.getElementById("wheelStatus");
const fortuneWheel = document.getElementById("fortuneWheel");
const towerBetInput = document.getElementById("towerBet");
const towerAllInButton = document.getElementById("towerAllIn");
const towerStartButton = document.getElementById("towerStart");
const towerClimbButton = document.getElementById("towerClimb");
const towerCashoutButton = document.getElementById("towerCashout");
const towerStatus = document.getElementById("towerStatus");
const towerMultiplierEl = document.getElementById("towerMultiplier");
const towerPayoutEl = document.getElementById("towerPayout");
const STORAGE_KEY = "hethey-cookie-clicker-v1";
const DEV_STORAGE_KEY = "hethey-cookie-clicker-dev-v1";
const DEV_MODE_KEY = "hethey-cookie-clicker-dev-mode";
const PLAYER_NAME_KEY = "hethey-player-name";
const GUEST_NAME_KEY = "hethey-guest-player-name";
const GUEST_MODE_KEY = "hethey-guest-mode";
const ACCOUNT_TOKEN_KEY = "hethey-account-token";
const ACCOUNT_NAME_KEY = "hethey-account-name";
const LEVEL_UP_BASE_COST = 250_000_000;
const LEVEL_UP_SCALE = 2;
const LEVEL_GAIN_STEP = 0.5;
const UPGRADE_LEVEL_COST_SCALE = 1.35;
const RELEASES_BASE_URL = "https://github.com/CrayonGamerHD-Philipp/cookie-clicker/releases";
const LOOTBOX_COST = 10_000_000;
const SERVER_SYNC_INTERVAL_MS = 30_000;

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
  boostInventory: {},
  boosts: [],
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
const boostRarities = [
  { key: "common", label: "Gewoehnlich", icon: "B", multiplier: 1.25, durationMs: 5 * 60_000, durationLabel: "5 Min", weight: 50 },
  { key: "rare", label: "Selten", icon: "S", multiplier: 1.5, durationMs: 10 * 60_000, durationLabel: "10 Min", weight: 28 },
  { key: "epic", label: "Episch", icon: "E", multiplier: 2, durationMs: 20 * 60_000, durationLabel: "20 Min", weight: 16 },
  { key: "legendary", label: "Legendaer", icon: "L", multiplier: 5, durationMs: 30 * 60_000, durationLabel: "30 Min", weight: 6 }
];

const gameUnlocks = {
  tower: { price: 1_000_000, requiredLevel: 1, unlocked: false },
  blackjack: { price: 5_000_000, requiredLevel: 2, unlocked: false },
  slots: { price: 25_000_000, requiredLevel: 3, unlocked: false },
  lootbox: { price: 40_000_000, requiredLevel: 4, unlocked: false },
  roulette: { price: 50_000_000, requiredLevel: 5, unlocked: false },
  wheel: { price: 150_000_000, requiredLevel: 6, unlocked: false }
};

let blackjackDeck = [];
let blackjackActive = false;
let blackjackBet = 0;
let dealerHand = [];
let playerHand = [];
let slotsSpinning = false;
let slotSpinTimer = null;
let lootboxOpening = false;
let lootboxTimer = null;
let lootboxPreviewTimer = null;
let rouletteSpinning = false;
let rouletteBetChoice = "red";
let rouletteBetNumber = 7;
let rouletteRotation = 0;
let wheelSpinning = false;
let wheelRotation = 0;
let activeUpgradeTab = "click";
let activeCosmeticsCategory = "colors";
let playerName = "";
let accountToken = "";
let accountName = "";
let isGuestMode = false;
let serverSyncTimer = null;
let syncCountdownTimer = null;
let nextServerSyncAt = 0;
let leaderboardSnapshot = [];
let syncStatusCountdownEl = null;
let syncStatusRankEl = null;
let chaseBannerEl = null;
let statsSyncCursor = null;
let accountSaveUpdatedAt = null;

const gameStats = {
  tower: { wins: 0, losses: 0, net: 0 },
  blackjack: { wins: 0, losses: 0, net: 0 },
  slots: { wins: 0, losses: 0, net: 0 },
  roulette: { wins: 0, losses: 0, net: 0 },
  wheel: { wins: 0, losses: 0, net: 0 },
  lootbox: { opens: 0, net: 0 }
};

const achievementMetricKeys = [
  "manualClicks",
  "totalLootboxesOpened",
  "upgradesPurchased",
  "gamesStarted",
  "gameWins",
  "gameLosses",
  "towerGames",
  "blackjackGames",
  "slotsGames",
  "rouletteGames",
  "wheelGames",
  "totalBetPlaced",
  "totalPayoutReceived",
  "biggestSingleWin",
  "levelUps",
  "bonusesCollected",
  "boostsActivated",
  "gamesUnlocked",
  "cosmeticsOwned",
  "highestLevel",
  "highestCookies",
  "highestPerClick",
  "highestCps",
  "totalCookiesGenerated",
  "secondsPlayed"
];

function createAchievementProgress() {
  return {
    manualClicks: 0,
    totalLootboxesOpened: 0,
    upgradesPurchased: 0,
    gamesStarted: 0,
    gameWins: 0,
    gameLosses: 0,
    towerGames: 0,
    blackjackGames: 0,
    slotsGames: 0,
    rouletteGames: 0,
    wheelGames: 0,
    totalBetPlaced: 0,
    totalPayoutReceived: 0,
    biggestSingleWin: 0,
    levelUps: 0,
    bonusesCollected: 0,
    boostsActivated: 0,
    gamesUnlocked: 0,
    cosmeticsOwned: 0,
    highestLevel: 1,
    highestCookies: 0,
    highestPerClick: 1,
    highestCps: 0,
    totalCookiesGenerated: 0,
    secondsPlayed: 0,
    unlocked: {}
  };
}

const achievementProgress = createAchievementProgress();

function formatAchievementTarget(value) {
  return new Intl.NumberFormat("de-DE", { maximumFractionDigits: 0 }).format(Math.floor(Math.max(0, Number(value) || 0)));
}

const achievementGroups = [
  { category: "Core", group: "clicker", title: "Click Titan", metric: "manualClicks", icon: "bi-hand-index-thumb", tiers: [250, 1_000, 10_000, 100_000, 1_000_000, 10_000_000], unit: "Klicks" },
  { category: "Core", group: "upgrades", title: "Ausbauer", metric: "upgradesPurchased", icon: "bi-hammer", tiers: [25, 100, 250, 500, 1_000, 2_500], unit: "Upgrades" },
  { category: "Core", group: "level", title: "Ofenmeister", metric: "highestLevel", icon: "bi-fire", tiers: [5, 10, 25, 50, 75, 100], unit: "Level" },
  { category: "Core", group: "levelups", title: "Reborn Baker", metric: "levelUps", icon: "bi-arrow-repeat", tiers: [1, 3, 10, 25, 50], unit: "Level-Ups" },
  { category: "Core", group: "playtime", title: "Schichtleiter", metric: "secondsPlayed", icon: "bi-clock-history", tiers: [600, 3_600, 21_600, 86_400, 604_800], unit: "Sekunden Spielzeit" },
  { category: "Economy", group: "cps", title: "Fliessband", metric: "highestCps", icon: "bi-speedometer2", tiers: [100, 1_000, 10_000, 100_000, 1_000_000, 10_000_000], unit: "Cookies/Sek" },
  { category: "Economy", group: "per-click", title: "Super Click", metric: "highestPerClick", icon: "bi-lightning-charge", tiers: [10, 100, 1_000, 10_000, 100_000], unit: "Cookies/Klick" },
  { category: "Economy", group: "cookies-generated", title: "Backstuben-Tycoon", metric: "totalCookiesGenerated", icon: "bi-graph-up-arrow", tiers: [1_000_000, 100_000_000, 10_000_000_000, 1_000_000_000_000, 100_000_000_000_000], unit: "erzeugte Cookies" },
  { category: "Economy", group: "bank", title: "Safe voll", metric: "highestCookies", icon: "bi-piggy-bank", tiers: [100_000, 10_000_000, 1_000_000_000, 100_000_000_000], unit: "Cookies auf der Hand" },
  { category: "Economy", group: "bonus", title: "Kruemel-Collector", metric: "bonusesCollected", icon: "bi-sun", tiers: [5, 25, 100, 500, 2_000], unit: "Bonus-Einsammlungen" },
  { category: "Economy", group: "boost", title: "Boost Alchemist", metric: "boostsActivated", icon: "bi-rocket-takeoff", tiers: [5, 25, 100, 500, 2_000], unit: "aktivierte Boosts" },
  { category: "Casino", group: "games-started", title: "Casino Stammgast", metric: "gamesStarted", icon: "bi-dice-5", tiers: [25, 100, 500, 1_000, 5_000, 20_000], unit: "Runden" },
  { category: "Casino", group: "wins", title: "High Roller", metric: "gameWins", icon: "bi-trophy", tiers: [10, 50, 100, 500, 2_000, 10_000], unit: "Siege" },
  { category: "Casino", group: "bets", title: "Big Spender", metric: "totalBetPlaced", icon: "bi-cash-stack", tiers: [1_000_000, 100_000_000, 1_000_000_000, 10_000_000_000, 100_000_000_000], unit: "gesetzte Cookies" },
  { category: "Casino", group: "payout", title: "Kassensturz", metric: "totalPayoutReceived", icon: "bi-wallet2", tiers: [1_000_000, 100_000_000, 1_000_000_000, 10_000_000_000, 100_000_000_000], unit: "ausgezahlte Cookies" },
  { category: "Casino", group: "single-win", title: "Jackpot", metric: "biggestSingleWin", icon: "bi-stars", tiers: [10_000, 1_000_000, 100_000_000, 1_000_000_000], unit: "groesster Einzelgewinn" },
  { category: "Casino", group: "tower", title: "Tower Kletterer", metric: "towerGames", icon: "bi-building", tiers: [10, 50, 250, 1_000, 5_000], unit: "Tower-Runden" },
  { category: "Casino", group: "blackjack", title: "Kartencount", metric: "blackjackGames", icon: "bi-suit-spade", tiers: [10, 50, 250, 1_000, 5_000], unit: "Blackjack-Runden" },
  { category: "Casino", group: "slots", title: "Walzenfieber", metric: "slotsGames", icon: "bi-dice-6", tiers: [10, 50, 250, 1_000, 5_000], unit: "Slots-Runden" },
  { category: "Casino", group: "roulette", title: "Roulette Runner", metric: "rouletteGames", icon: "bi-record-circle", tiers: [10, 50, 250, 1_000, 5_000], unit: "Roulette-Runden" },
  { category: "Casino", group: "wheel", title: "Rad Rebelle", metric: "wheelGames", icon: "bi-disc", tiers: [10, 50, 250, 1_000, 5_000], unit: "Gluecksrad-Runden" },
  { category: "Collection", group: "lootboxes", title: "Loot Jager", metric: "totalLootboxesOpened", icon: "bi-box-seam", tiers: [10, 50, 100, 500, 2_500, 10_000, 25_000], unit: "Lootboxes" },
  { category: "Collection", group: "unlocks", title: "Arcade Betreiber", metric: "gamesUnlocked", icon: "bi-unlock", tiers: [1, 3, 6], unit: "freigeschaltete Spiele" },
  { category: "Collection", group: "cosmetics", title: "Style Connoisseur", metric: "cosmeticsOwned", icon: "bi-palette", tiers: [1, 5, 10, 15, 20], unit: "freigeschaltete Cosmetics" }
];

const achievementDefinitions = achievementGroups.flatMap((group) =>
  group.tiers.map((target, index) => ({
    key: `${group.group}-tier-${index + 1}`,
    group: group.group,
    tier: index + 1,
    title: `${group.title} - Stufe ${index + 1}`,
    desc: `Erreiche ${formatAchievementTarget(target)} ${group.unit}.`,
    metric: group.metric,
    target,
    icon: group.icon
  }))
);

let toastTimer = null;

function createEmptyBoostInventory() {
  return Object.fromEntries(boostRarities.map((rarity) => [rarity.key, 0]));
}

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

function formatAchievementNumber(value) {
  return new Intl.NumberFormat("de-DE", { maximumFractionDigits: 0 }).format(Math.floor(Math.max(0, Number(value) || 0)));
}

function normalizeAchievementProgress(saved) {
  const normalized = createAchievementProgress();
  if (!saved || typeof saved !== "object") {
    return normalized;
  }

  achievementMetricKeys.forEach((key) => {
    normalized[key] = Math.max(0, Number(saved[key]) || 0);
  });

  const unlockedRaw = saved.unlocked;
  if (unlockedRaw && typeof unlockedRaw === "object") {
    Object.keys(unlockedRaw).forEach((key) => {
      if (!achievementDefinitions.some((achievement) => achievement.key === key)) {
        return;
      }
      const unlockedAt = unlockedRaw[key];
      if (typeof unlockedAt === "string" && unlockedAt.trim()) {
        normalized.unlocked[key] = unlockedAt;
      } else if (unlockedAt === true) {
        normalized.unlocked[key] = new Date().toISOString();
      }
    });
  }

  return normalized;
}

function resetAchievementProgress() {
  const initial = createAchievementProgress();
  achievementMetricKeys.forEach((key) => {
    achievementProgress[key] = initial[key];
  });
  achievementProgress.unlocked = {};
}

function setAchievementMetric(metric, value) {
  if (!achievementMetricKeys.includes(metric)) return;
  achievementProgress[metric] = Math.max(0, Number(value) || 0);
}

function bumpAchievementMetric(metric, amount = 1) {
  if (!achievementMetricKeys.includes(metric)) return;
  achievementProgress[metric] = Math.max(0, Number(achievementProgress[metric]) || 0) + Math.max(0, Number(amount) || 0);
}

function raiseAchievementMetric(metric, value) {
  if (!achievementMetricKeys.includes(metric)) return;
  const current = Math.max(0, Number(achievementProgress[metric]) || 0);
  const next = Math.max(0, Number(value) || 0);
  achievementProgress[metric] = Math.max(current, next);
}

function getAchievementValue(definition) {
  return Math.max(0, Number(achievementProgress[definition.metric]) || 0);
}

function countUnlockedGames() {
  return Object.values(gameUnlocks).filter((entry) => entry.unlocked).length;
}

function countOwnedCosmetics() {
  const colors = colorCosmetics.filter((entry) => entry.owned && entry.key !== "classic").length;
  const accessories = accessoryCosmetics.filter((entry) => entry.owned && !entry.hidden && entry.key !== "none").length;
  const skins = skinCosmetics.filter((entry) => entry.owned && entry.key !== "none").length;
  const miscs = miscCosmetics.filter((entry) => entry.owned && entry.key !== "none").length;
  return colors + accessories + skins + miscs;
}

function syncAchievementDerivedMetrics() {
  const towerGames = gameStats.tower.wins + gameStats.tower.losses;
  const blackjackGames = gameStats.blackjack.wins + gameStats.blackjack.losses;
  const slotsGames = gameStats.slots.wins + gameStats.slots.losses;
  const rouletteGames = gameStats.roulette.wins + gameStats.roulette.losses;
  const wheelGames = gameStats.wheel.wins + gameStats.wheel.losses;

  raiseAchievementMetric("highestLevel", state.level);
  raiseAchievementMetric("highestCookies", state.cookies);
  raiseAchievementMetric("highestPerClick", state.perClick);
  raiseAchievementMetric("highestCps", state.cps);
  raiseAchievementMetric("totalCookiesGenerated", state.total);
  raiseAchievementMetric("manualClicks", state.clicks);
  raiseAchievementMetric("totalLootboxesOpened", gameStats.lootbox.opens);
  raiseAchievementMetric("towerGames", towerGames);
  raiseAchievementMetric("blackjackGames", blackjackGames);
  raiseAchievementMetric("slotsGames", slotsGames);
  raiseAchievementMetric("rouletteGames", rouletteGames);
  raiseAchievementMetric("wheelGames", wheelGames);
  raiseAchievementMetric("gamesUnlocked", countUnlockedGames());
  raiseAchievementMetric("cosmeticsOwned", countOwnedCosmetics());
}

function evaluateAchievements(silent = false) {
  const newlyUnlocked = [];
  achievementDefinitions.forEach((achievement) => {
    if (achievementProgress.unlocked[achievement.key]) {
      return;
    }
    const value = getAchievementValue(achievement);
    if (value >= achievement.target) {
      achievementProgress.unlocked[achievement.key] = new Date().toISOString();
      newlyUnlocked.push(achievement);
    }
  });

  if (!silent && newlyUnlocked.length > 0) {
    const first = newlyUnlocked[0];
    const suffix = newlyUnlocked.length > 1 ? ` (+${newlyUnlocked.length - 1})` : "";
    showInfoToast(`Achievement freigeschaltet: ${first.title}${suffix}`);
  }
}

function renderAchievements() {
  if (!achievementSummaryEl || !achievementListEl) return;

  const unlockedCount = achievementDefinitions.filter((achievement) => achievementProgress.unlocked[achievement.key]).length;
  achievementSummaryEl.textContent = `${unlockedCount} / ${achievementDefinitions.length}`;
  achievementListEl.innerHTML = "";
  const categories = [...new Set(achievementGroups.map((group) => group.category))];
  categories.forEach((categoryName) => {
    const groupsInCategory = achievementGroups.filter((group) => group.category === categoryName);
    const categoryDefs = achievementDefinitions.filter((achievement) => groupsInCategory.some((group) => group.group === achievement.group));
    const categoryUnlocked = categoryDefs.filter((achievement) => achievementProgress.unlocked[achievement.key]).length;

    const categoryBlock = document.createElement("section");
    categoryBlock.className = "achievement-category";
    categoryBlock.innerHTML = `
      <div class="achievement-category-head">
        <h3>${categoryName}</h3>
        <span>${categoryUnlocked} / ${categoryDefs.length}</span>
      </div>
    `;

    groupsInCategory.forEach((group) => {
      const defs = achievementDefinitions
        .filter((achievement) => achievement.group === group.group)
        .sort((a, b) => a.tier - b.tier);
      const unlockedTiers = defs.filter((achievement) => achievementProgress.unlocked[achievement.key]).length;

      const groupBlock = document.createElement("div");
      groupBlock.className = "achievement-group";
      groupBlock.innerHTML = `
        <div class="achievement-group-head">
          <span class="achievement-icon" aria-hidden="true"><i class="bi ${group.icon || "bi-award"}"></i></span>
          <div class="achievement-group-meta">
            <strong>${group.title}</strong>
            <span>${unlockedTiers} / ${defs.length} Stufen</span>
          </div>
        </div>
      `;

      defs.forEach((achievement) => {
        const unlocked = Boolean(achievementProgress.unlocked[achievement.key]);
        const current = getAchievementValue(achievement);
        const ratio = Math.max(0, Math.min(1, achievement.target > 0 ? current / achievement.target : 0));
        const item = document.createElement("div");
        item.className = `achievement-item${unlocked ? " unlocked" : ""}`;
        const doneLabel = unlocked ? "Erledigt" : "In Arbeit";
        item.innerHTML = `
          <div class="achievement-row">
            <div class="achievement-copy">
              <p class="achievement-title">${achievement.title}</p>
              <p class="achievement-desc">${achievement.desc}</p>
              <div class="achievement-progress-row">
                <span class="achievement-progress">${formatAchievementNumber(Math.min(current, achievement.target))} / ${formatAchievementNumber(achievement.target)}</span>
                <span class="achievement-state">${doneLabel}</span>
              </div>
              <div class="achievement-progress-track" aria-hidden="true">
                <span class="achievement-progress-fill${unlocked ? " unlocked" : ""}" style="width:${Math.round(ratio * 100)}%"></span>
              </div>
            </div>
          </div>
        `;
        groupBlock.appendChild(item);
      });

      categoryBlock.appendChild(groupBlock);
    });

    achievementListEl.appendChild(categoryBlock);
  });
}

function levelGainMultiplier() {
  return 1 + Math.max(0, state.level - 1) * LEVEL_GAIN_STEP;
}

function boostRarityByKey(key) {
  return boostRarities.find((rarity) => rarity.key === key) || boostRarities[0];
}

function removeExpiredBoosts() {
  const now = Date.now();
  const before = state.boosts.length;
  state.boosts = state.boosts.filter((boost) => boost.expiresAt > now);
  return before !== state.boosts.length;
}

function boostBonusAmount() {
  removeExpiredBoosts();
  return roundValue(
    state.boosts.reduce((bonus, boost) => bonus + Math.max(0, boost.multiplier - 1), 0)
  );
}

function boostGainMultiplier() {
  return roundValue(1 + boostBonusAmount());
}

function totalGainMultiplier() {
  return levelGainMultiplier() * boostGainMultiplier();
}

function formatBoostTimeLeft(expiresAt) {
  const remainingMs = Math.max(0, expiresAt - Date.now());
  const totalSeconds = Math.ceil(remainingMs / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  if (minutes <= 0) {
    return `${seconds}s`;
  }
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function pickBoostRarity() {
  const totalWeight = boostRarities.reduce((sum, rarity) => sum + rarity.weight, 0);
  let roll = Math.random() * totalWeight;
  for (const rarity of boostRarities) {
    roll -= rarity.weight;
    if (roll <= 0) {
      return rarity;
    }
  }
  return boostRarities[0];
}

function renderBoosts() {
  if (!activeBoostListEl || !activeBoostTotalEl || !boostInventoryListEl) {
    return;
  }
  removeExpiredBoosts();
  const boostMultiplier = boostGainMultiplier();
  activeBoostTotalEl.textContent = `x${formatMultiplier(boostMultiplier)}`;
  activeBoostListEl.innerHTML = "";
  boostInventoryListEl.innerHTML = "";

  const inventorySection = document.createElement("section");
  inventorySection.className = "boost-group";
  inventorySection.innerHTML = `
    <div class="boost-group-head">
      <span class="boost-group-title">Inventar</span>
      <span class="boost-group-meta">Zufaellige Drops pro Level</span>
    </div>
  `;
  const inventoryGrid = document.createElement("div");
  inventoryGrid.className = "boost-grid";

  boostRarities.forEach((rarity) => {
    const count = Number(state.boostInventory[rarity.key]) || 0;
    const item = document.createElement("div");
    item.className = `boost-card boost-card-tile ${rarity.key}`;

    const info = document.createElement("div");
    info.className = "boost-card-main";
    info.innerHTML = `
      <div class="boost-icon" aria-hidden="true">${rarity.icon}</div>
      <div class="boost-card-topline">
        <span class="boost-name">${rarity.label}</span>
        <span class="boost-power">+${formatMultiplier(rarity.multiplier - 1)}x</span>
      </div>
      <div class="boost-meta">
        <span>${rarity.durationLabel}</span>
        <span class="boost-count">${count}x im Inventar</span>
      </div>
    `;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "boost-action";
    button.textContent = "Aktivieren";
    button.disabled = count <= 0;
    button.addEventListener("click", () => activateBoost(rarity.key));

    item.appendChild(info);
    item.appendChild(button);
    inventoryGrid.appendChild(item);
  });

  inventorySection.appendChild(inventoryGrid);
  boostInventoryListEl.appendChild(inventorySection);

  const activeBonus = boostBonusAmount();
  const activeGrid = document.createElement("div");
  activeGrid.className = "boost-grid boost-grid-active";

  if (!state.boosts.length) {
    const empty = document.createElement("p");
    empty.className = "boost-empty";
    empty.textContent = "Keine aktiven Boosts";
    activeGrid.appendChild(empty);
  } else {
    activeGrid.dataset.summary = `Gesamt +${formatMultiplier(activeBonus)}x`;
    activeGrid.classList.add("has-summary");
    const sortedBoosts = [...state.boosts].sort((a, b) => a.expiresAt - b.expiresAt);
    sortedBoosts.forEach((boost) => {
      const item = document.createElement("div");
      item.className = `boost-card ${boost.rarity} is-active active-summary`;
      item.innerHTML = `
        <div class="boost-card-main">
          <div class="boost-card-topline">
            <span class="boost-name">${boost.label}</span>
            <span class="boost-power">+${formatMultiplier(boost.multiplier - 1)}x</span>
            <span class="boost-timer">${formatBoostTimeLeft(boost.expiresAt)}</span>
          </div>
        </div>
      `;
      activeGrid.appendChild(item);
    });
  }

  activeBoostListEl.appendChild(activeGrid);
}

function grantRandomBoost() {
  const rarity = pickBoostRarity();
  state.boostInventory[rarity.key] = (Number(state.boostInventory[rarity.key]) || 0) + 1;
  return rarity;
}

function activateBoost(rarityKey) {
  const rarity = boostRarityByKey(rarityKey);
  const count = Number(state.boostInventory[rarity.key]) || 0;
  if (count <= 0) {
    return;
  }
  state.boostInventory[rarity.key] = count - 1;
  state.boosts.push({
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    rarity: rarity.key,
    label: rarity.label,
    multiplier: rarity.multiplier,
    expiresAt: Date.now() + rarity.durationMs
  });
  bumpAchievementMetric("boostsActivated", 1);
  recalculateProduction();
  showInfoToast(`${rarity.label}-Boost aktiviert: +${formatMultiplier(rarity.multiplier - 1)}x fuer ${rarity.durationLabel}`);
  updateStats();
}

function randomFrom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function availableLootboxCosmetics() {
  return [
    ...colorCosmetics.filter((entry) => !entry.owned).map((entry) => ({ type: "color", entry })),
    ...accessoryCosmetics.filter((entry) => !entry.owned && !entry.hidden).map((entry) => ({ type: "accessory", entry })),
    ...skinCosmetics.filter((entry) => !entry.owned).map((entry) => ({ type: "skin", entry })),
    ...miscCosmetics.filter((entry) => !entry.owned).map((entry) => ({ type: "misc", entry }))
  ];
}

function unlockLootboxCosmetic(reward) {
  reward.entry.owned = true;
  if (reward.type === "color") {
    state.activeColor = reward.entry.key;
  } else if (reward.type === "accessory") {
    state.activeAccessory = reward.entry.key;
  } else if (reward.type === "skin") {
    state.activeSkin = reward.entry.key;
  } else if (reward.type === "misc") {
    state.activeMisc = reward.entry.key;
  }
  applyCosmeticTheme();
}

function pickLootboxBoostReward() {
  const roll = Math.random();
  let rarity = boostRarities[0];
  if (roll > 0.985) {
    rarity = boostRarities[3];
  } else if (roll > 0.93) {
    rarity = boostRarities[2];
  } else if (roll > 0.7) {
    rarity = boostRarities[1];
  }
  const quantity = rarity.key === "common"
    ? (Math.random() < 0.35 ? 2 : 1)
    : (rarity.key === "rare" && Math.random() < 0.18 ? 2 : 1);
  state.boostInventory[rarity.key] = (Number(state.boostInventory[rarity.key]) || 0) + quantity;
  return { rarity, quantity };
}

function pickLootboxCookieReward(isProfit) {
  if (isProfit) {
    return randomFrom([
      5_000_000,
      5_000_000,
      5_000_000,
      5_000_000,
      5_500_000,
      5_500_000,
      6_000_000,
      6_000_000,
      6_000_000,
      6_500_000,
      6_500_000,
      7_000_000,
      7_000_000,
      7_000_000,
      7_500_000,
      8_000_000,
      8_000_000,
      10_500_000,
      12_000_000,
      15_000_000,
      25_000_000,
      50_000_000,
      500_000_000,
      2_500_000_000
    ]);
  }
  return randomFrom([
    100,
    500,
    1_000,
    5_000,
    25_000,
    100_000,
    250_000,
    500_000,
    1_000_000,
    2_000_000,
    3_500_000,
    5_000_000,
    5_000_000,
    5_000_000,
    5_000_000,
    5_500_000,
    6_000_000,
    6_000_000,
    6_500_000,
    7_000_000,
    7_000_000,
    5_000_000,
    7_500_000
  ]);
}

function rollLootboxReward() {
  const cosmeticPool = availableLootboxCosmetics();
  const roll = Math.random();

  if (cosmeticPool.length && roll < 0.01) {
    const reward = randomFrom(cosmeticPool);
    unlockLootboxCosmetic(reward);
    return {
      rewardType: "cosmetic",
      cookiePayout: 0,
      status: `Jackpot! ${reward.entry.name} wurde freigeschaltet.`,
      title: reward.entry.name,
      meta: "Neues Cosmetic",
      detail: "Direkt freigeschaltet und sofort ausgeruestet."
    };
  }

  if (roll < 0.06) {
    const reward = pickLootboxBoostReward();
    return {
      rewardType: "boost",
      cookiePayout: 0,
      status: `${reward.quantity}x ${reward.rarity.label}-Boost erhalten.`,
      title: `${reward.quantity}x ${reward.rarity.label}`,
      meta: "Boost-Drop",
      detail: `+${formatMultiplier(reward.rarity.multiplier - 1)}x fuer ${reward.rarity.durationLabel}`
    };
  }

  const amount = pickLootboxCookieReward(roll < 0.21);
  state.cookies += amount;
  state.total += amount;
  return {
    rewardType: "cookies",
    cookiePayout: amount,
    status: `${format(amount)} Kekse aus der Box gezogen.`,
    title: `+${format(amount)} Kekse`,
    meta: "Cookie-Gewinn",
    detail: "Direkt deinem Konto gutgeschrieben."
  };
}

function recordLootboxResult(reward) {
  gameStats.lootbox.opens += 1;
  gameStats.lootbox.net += (Number(reward.cookiePayout) || 0) - LOOTBOX_COST;
  bumpAchievementMetric("gamesStarted", 1);
  bumpAchievementMetric("totalLootboxesOpened", 1);
  bumpAchievementMetric("totalBetPlaced", LOOTBOX_COST);
  bumpAchievementMetric("totalPayoutReceived", Number(reward.cookiePayout) || 0);
  const net = (Number(reward.cookiePayout) || 0) - LOOTBOX_COST;
  if (net > 0) {
    bumpAchievementMetric("gameWins", 1);
    raiseAchievementMetric("biggestSingleWin", net);
  } else if (net < 0) {
    bumpAchievementMetric("gameLosses", 1);
  }
}

function resetLootboxVisual() {
  clearLootboxPreviewTimer();
  if (lootboxCrate) {
    lootboxCrate.classList.remove("is-opening", "is-revealing");
  }
  if (lootboxParticles) {
    lootboxParticles.innerHTML = "";
  }
  if (lootboxPreviewTrack) {
    lootboxPreviewTrack.classList.remove("is-spinning");
  }
}

function clearLootboxPreviewTimer() {
  if (lootboxPreviewTimer) {
    clearInterval(lootboxPreviewTimer);
    lootboxPreviewTimer = null;
  }
}

function lootboxPreviewPool() {
  const cosmeticPool = availableLootboxCosmetics()
    .slice(0, 6)
    .map((reward) => ({ label: reward.entry.name, type: "cosmetic" }));
  return [
    { label: "+100 Kekse", type: "cookies" },
    { label: "+200 Kekse", type: "cookies" },
    { label: "+500 Kekse", type: "cookies" },
    { label: "+1.000 Kekse", type: "cookies" },
    { label: "+25.000 Kekse", type: "cookies" },
    { label: "+500.000 Kekse", type: "cookies" },
    { label: "+5 Mio Kekse", type: "cookies" },
    { label: "+6 Mio Kekse", type: "cookies" },
    { label: "+7 Mio Kekse", type: "cookies" },
    { label: "+8 Mio Kekse", type: "cookies" },
    { label: "+7,5 Mio Kekse", type: "cookies" },
    { label: "+12 Mio Kekse", type: "cookies" },
    { label: "+15 Mio Kekse", type: "cookies" },
    { label: "+500 Mio Kekse", type: "cookies" },
    { label: "+2,5 Mrd Kekse", type: "cookies" },
    { label: "1x Gewoehnlich", type: "boost" },
    { label: "1x Selten", type: "boost" },
    { label: "2x Gewoehnlich", type: "boost" },
    ...cosmeticPool
  ];
}

function renderLootboxPreview(centerLabel = null) {
  if (!lootboxPreviewTrack) {
    return;
  }
  const pool = lootboxPreviewPool();
  lootboxPreviewTrack.innerHTML = "";
  const visibleEntries = [];
  for (let index = 0; index < 5; index += 1) {
    if (index === 2 && centerLabel) {
      visibleEntries.push(centerLabel);
      continue;
    }
    visibleEntries.push(randomFrom(pool));
  }

  visibleEntries.forEach((entry, index) => {
    const item = document.createElement("div");
    const normalized = typeof entry === "string" ? { label: entry, type: "reward" } : entry;
    item.className = `lootbox-preview-item type-${normalized.type}`;
    if (index === 2) {
      item.classList.add("is-focus");
    }
    item.textContent = normalized.label;
    lootboxPreviewTrack.appendChild(item);
  });
}

function startLootboxPreviewSpin() {
  if (!lootboxPreviewTrack) {
    return;
  }
  clearLootboxPreviewTimer();
  lootboxPreviewTrack.classList.add("is-spinning");
  renderLootboxPreview();
  lootboxPreviewTimer = window.setInterval(() => {
    renderLootboxPreview();
  }, 115);
}

function stopLootboxPreviewSpin(reward) {
  if (!lootboxPreviewTrack) {
    return;
  }
  clearLootboxPreviewTimer();
  lootboxPreviewTrack.classList.remove("is-spinning");
  renderLootboxPreview({ label: reward.title, type: "reward" });
}

function burstLootboxParticles() {
  if (!lootboxParticles) {
    return;
  }
  lootboxParticles.innerHTML = "";
  for (let index = 0; index < 14; index += 1) {
    const particle = document.createElement("span");
    particle.className = "lootbox-particle";
    particle.style.setProperty("--x", `${Math.random() * 180 - 90}px`);
    particle.style.setProperty("--y", `${-40 - Math.random() * 90}px`);
    particle.style.setProperty("--delay", `${Math.random() * 120}ms`);
    particle.style.setProperty("--size", `${8 + Math.random() * 8}px`);
    lootboxParticles.appendChild(particle);
  }
}

function renderLootboxes() {
  if (!lootboxRollButton) {
    return;
  }
  const canBuyBox = state.devMode || canAfford(LOOTBOX_COST);
  lootboxRollButton.disabled = lootboxOpening || !canBuyBox;
  lootboxRollButton.textContent = lootboxOpening
    ? "Box oeffnet..."
    : (state.devMode
      ? `Lootbox kaufen (Dev gratis, normal ${format(LOOTBOX_COST)})`
      : `Lootbox kaufen (${format(LOOTBOX_COST)})`);
}

function openLootbox() {
  if (lootboxOpening) {
    return;
  }
  if (!gameUnlocks.lootbox.unlocked && !state.devMode) {
    return;
  }
  if (!canAfford(LOOTBOX_COST)) {
    if (lootboxStatus) {
      lootboxStatus.textContent = "Nicht genug Kekse fuer eine Lootbox.";
    }
    renderLootboxes();
    return;
  }

  spendCookies(LOOTBOX_COST);
  lootboxOpening = true;
  if (lootboxCrate) {
    lootboxCrate.classList.remove("is-revealing");
    lootboxCrate.classList.add("is-opening");
  }
  if (lootboxParticles) {
    lootboxParticles.innerHTML = "";
  }
  startLootboxPreviewSpin();
  if (lootboxStatus) {
    lootboxStatus.textContent = "Box wird geoeffnet...";
  }
  if (lootboxResult) {
    lootboxResult.className = "lootbox-result pending";
    lootboxResult.innerHTML = `
      <span class="lootbox-tag">Oeffnet...</span>
      <strong>Die Box knackt gleich auf</strong>
      <span>Mal sehen, was drin ist.</span>
    `;
  }
  updateStats();

  if (lootboxTimer) {
    clearTimeout(lootboxTimer);
    lootboxTimer = null;
  }
  lootboxTimer = window.setTimeout(() => {
    const reward = rollLootboxReward();
    lootboxTimer = null;
    lootboxOpening = false;
    if (lootboxCrate) {
      lootboxCrate.classList.remove("is-opening");
      lootboxCrate.classList.add("is-revealing");
    }
    stopLootboxPreviewSpin(reward);
    burstLootboxParticles();
    if (lootboxStatus) {
      lootboxStatus.textContent = reward.status;
    }
    if (lootboxResult) {
      lootboxResult.className = "lootbox-result reward";
      lootboxResult.innerHTML = `
        <span class="lootbox-tag">${reward.meta}</span>
        <strong>${reward.title}</strong>
        <span>${reward.detail}</span>
      `;
    }
    recordLootboxResult(reward);
    showInfoToast(`Lootbox: ${reward.title}`);
    updateStats();
    window.setTimeout(() => {
      if (!lootboxOpening) {
        resetLootboxVisual();
      }
    }, 850);
  }, 950);
}

function currentLevelRequirement() {
  return LEVEL_UP_BASE_COST * Math.pow(LEVEL_UP_SCALE, Math.max(0, state.level - 1));
}

function upgradeLevelCostMultiplier() {
  return Math.pow(UPGRADE_LEVEL_COST_SCALE, Math.max(0, state.level - 1));
}

function calculateBaseProduction() {
  const basePerClick = 1;
  let upgradePerClick = 0;
  let upgradeCps = 0;
  upgrades.forEach((upgrade) => {
    if (upgrade.type === "click") {
      upgradePerClick += upgrade.power * upgrade.count;
    } else {
      upgradeCps += upgrade.power * upgrade.count;
    }
  });
  return { basePerClick, upgradePerClick, upgradeCps };
}

function recalculateProduction() {
  const baseProduction = calculateBaseProduction();
  const multiplier = totalGainMultiplier();
  state.basePerClick = roundValue(baseProduction.basePerClick + baseProduction.upgradePerClick);
  state.baseCps = roundValue(baseProduction.upgradeCps);
  state.perClick = roundValue((baseProduction.basePerClick * multiplier) + baseProduction.upgradePerClick);
  state.cps = roundValue(baseProduction.upgradeCps);
}

function scaleGain(amount) {
  if (amount <= 0) {
    return 0;
  }
  return roundValue(amount * totalGainMultiplier());
}

function scalePayout(basePayout, invested = 0) {
  if (basePayout <= 0) {
    return 0;
  }
  const profit = Math.max(0, basePayout - invested);
  return roundValue(invested + (profit * totalGainMultiplier()));
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
  state.boostInventory = createEmptyBoostInventory();
  state.boosts = [];
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
  ["tower", "blackjack", "slots", "roulette", "wheel"].forEach((key) => {
    gameStats[key].wins = 0;
    gameStats[key].losses = 0;
    gameStats[key].net = 0;
  });
  gameStats.lootbox.opens = 0;
  gameStats.lootbox.net = 0;
  resetAchievementProgress();
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
  if (lootboxTimer) {
    clearTimeout(lootboxTimer);
    lootboxTimer = null;
  }
  clearLootboxPreviewTimer();
  slotsSpinning = false;
  lootboxOpening = false;
  rouletteSpinning = false;
  wheelSpinning = false;
  rouletteRotation = 0;
  wheelRotation = 0;
  rouletteBetChoice = "red";
  rouletteBetNumber = 7;
  statsSyncCursor = null;
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
      statsSyncCursor = initialStatsCursor();
      applyCosmeticTheme();
      return;
    }
    const saved = JSON.parse(raw);
    state.cookies = Number(saved.cookies) || 0;
    state.total = Number(saved.total) || 0;
    state.clicks = Number(saved.clicks) || 0;
    state.level = Math.max(1, Number(saved.level) || 1);
    const savedInventory = saved.boostInventory || {};
    state.boostInventory = createEmptyBoostInventory();
    boostRarities.forEach((rarity) => {
      state.boostInventory[rarity.key] = Math.max(0, Number(savedInventory[rarity.key]) || 0);
    });
    state.boosts = Array.isArray(saved.boosts)
      ? saved.boosts
        .map((boost) => ({
          id: typeof boost.id === "string" ? boost.id : `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
          rarity: typeof boost.rarity === "string" ? boost.rarity : "common",
          label: typeof boost.label === "string" ? boost.label : "Gewoehnlich",
          multiplier: Number(boost.multiplier) || 1,
          expiresAt: Number(boost.expiresAt) || 0
        }))
        .filter((boost) => boost.expiresAt > Date.now())
      : [];
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
      const lootboxEntry = saved.stats.lootbox || {};
      gameStats.lootbox.opens = Number(lootboxEntry.opens) || 0;
      gameStats.lootbox.net = Number(lootboxEntry.net) || 0;
    }
    const loadedAchievementProgress = normalizeAchievementProgress(saved.achievements);
    achievementMetricKeys.forEach((metric) => {
      setAchievementMetric(metric, loadedAchievementProgress[metric]);
    });
    achievementProgress.unlocked = { ...loadedAchievementProgress.unlocked };
    if (saved.statsSyncCursor && typeof saved.statsSyncCursor === "object") {
      const cursor = saved.statsSyncCursor;
      statsSyncCursor = {
        clicks: Math.max(0, Math.floor(Number(cursor.clicks) || 0)),
        gamesPlayed: Math.max(0, Math.floor(Number(cursor.gamesPlayed) || 0)),
        lootboxesOpened: Math.max(0, Math.floor(Number(cursor.lootboxesOpened) || 0)),
        cookiesGenerated: Math.max(0, Math.floor(Number(cursor.cookiesGenerated) || 0)),
        gamesByMode: {
          tower: Math.max(0, Math.floor(Number(cursor.gamesByMode?.tower) || 0)),
          blackjack: Math.max(0, Math.floor(Number(cursor.gamesByMode?.blackjack) || 0)),
          slots: Math.max(0, Math.floor(Number(cursor.gamesByMode?.slots) || 0)),
          roulette: Math.max(0, Math.floor(Number(cursor.gamesByMode?.roulette) || 0)),
          wheel: Math.max(0, Math.floor(Number(cursor.gamesByMode?.wheel) || 0)),
          lootbox: Math.max(0, Math.floor(Number(cursor.gamesByMode?.lootbox) || 0))
        }
      };
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
  if (!statsSyncCursor) {
    statsSyncCursor = initialStatsCursor();
  }
  syncAchievementDerivedMetrics();
  evaluateAchievements(true);
  applyCosmeticTheme();
}

function saveState() {
  const payload = {
    cookies: state.cookies,
    total: state.total,
    clicks: state.clicks,
    level: state.level,
    boostInventory: state.boostInventory,
    boosts: state.boosts,
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
    statsSyncCursor: statsSyncCursor || initialStatsCursor(),
    achievements: {
      ...Object.fromEntries(achievementMetricKeys.map((metric) => [metric, achievementProgress[metric]])),
      unlocked: { ...achievementProgress.unlocked }
    },
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

function totalGamesPlayed() {
  return (
    gameStats.tower.wins + gameStats.tower.losses +
    gameStats.blackjack.wins + gameStats.blackjack.losses +
    gameStats.slots.wins + gameStats.slots.losses +
    gameStats.roulette.wins + gameStats.roulette.losses +
    gameStats.wheel.wins + gameStats.wheel.losses +
    gameStats.lootbox.opens
  );
}

function gamesByModeSnapshot() {
  return {
    tower: gameStats.tower.wins + gameStats.tower.losses,
    blackjack: gameStats.blackjack.wins + gameStats.blackjack.losses,
    slots: gameStats.slots.wins + gameStats.slots.losses,
    roulette: gameStats.roulette.wins + gameStats.roulette.losses,
    wheel: gameStats.wheel.wins + gameStats.wheel.losses,
    lootbox: gameStats.lootbox.opens
  };
}

function currentStatsSnapshot() {
  return {
    clicks: Math.max(0, Math.floor(Number(state.clicks) || 0)),
    gamesPlayed: Math.max(0, Math.floor(totalGamesPlayed())),
    lootboxesOpened: Math.max(0, Math.floor(gameStats.lootbox.opens || 0)),
    cookiesGenerated: Math.max(0, Math.floor(Number(state.total) || 0)),
    gamesByMode: gamesByModeSnapshot()
  };
}

function initialStatsCursor() {
  // Keep existing click/game totals as baseline to avoid duplicate historic sync.
  // Lootboxes/cookies start at zero so previously missing values can backfill once.
  const byMode = gamesByModeSnapshot();
  return {
    clicks: Math.max(0, Math.floor(Number(state.clicks) || 0)),
    gamesPlayed: Math.max(0, Math.floor(totalGamesPlayed())),
    lootboxesOpened: 0,
    cookiesGenerated: 0,
    gamesByMode: {
      tower: byMode.tower,
      blackjack: byMode.blackjack,
      slots: byMode.slots,
      roulette: byMode.roulette,
      wheel: byMode.wheel,
      lootbox: byMode.lootbox
    }
  };
}

function computeStatsDelta(current, baseline) {
  const base = baseline || initialStatsCursor();
  const modeDelta = {};
  Object.keys(current.gamesByMode).forEach((mode) => {
    const now = Math.max(0, Math.floor(Number(current.gamesByMode[mode]) || 0));
    const before = Math.max(0, Math.floor(Number(base.gamesByMode?.[mode]) || 0));
    modeDelta[mode] = Math.max(0, now - before);
  });

  return {
    clicks: Math.max(0, current.clicks - Math.max(0, Math.floor(Number(base.clicks) || 0))),
    gamesPlayed: Math.max(0, current.gamesPlayed - Math.max(0, Math.floor(Number(base.gamesPlayed) || 0))),
    lootboxesOpened: Math.max(0, current.lootboxesOpened - Math.max(0, Math.floor(Number(base.lootboxesOpened) || 0))),
    cookiesGenerated: Math.max(0, current.cookiesGenerated - Math.max(0, Math.floor(Number(base.cookiesGenerated) || 0))),
    gamesByMode: modeDelta
  };
}

async function requestJson(path, options = {}) {
  const authTokenValue = typeof options.authToken === "string" ? options.authToken : "";
  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {})
  };
  if (authTokenValue) {
    headers.Authorization = `Bearer ${authTokenValue}`;
  }
  const requestOptions = {
    ...options,
    headers
  };
  delete requestOptions.authToken;
  try {
    const response = await fetch(path, {
      ...requestOptions
    });
    const data = await response.json().catch(() => ({}));
    return {
      ok: response.ok,
      status: response.status,
      ...data
    };
  } catch (error) {
    return { ok: false, status: 0 };
  }
}

async function registerPlayer(name) {
  const normalized = String(name || "").trim().slice(0, 24);
  if (!normalized) {
    return { ok: false };
  }
  const response = await requestJson("/game/api/player/register", {
    method: "POST",
    body: JSON.stringify({ playerName: normalized })
  });
  if (!response.ok) {
    return { ok: false };
  }
  playerName = normalized;
  try {
    localStorage.setItem(PLAYER_NAME_KEY, playerName);
  } catch (error) {
    // Ignore storage failures.
  }
  return { ok: true };
}

async function syncPlayerStats() {
  if (!playerName || isGuestMode) {
    return { ok: false };
  }
  return requestJson("/game/api/leaderboard", {
    method: "POST",
    body: JSON.stringify({
      playerName,
      level: Math.max(1, Math.floor(Number(state.level) || 1)),
      score: Math.floor(state.total),
      totalClicks: Math.floor(state.clicks),
      totalGames: Math.floor(totalGamesPlayed())
    })
  });
}

async function syncGlobalStats() {
  if (!playerName || isGuestMode) {
    return { ok: false };
  }
  const snapshot = currentStatsSnapshot();
  const delta = computeStatsDelta(snapshot, statsSyncCursor);

  const hasChanges =
    delta.clicks > 0 ||
    delta.gamesPlayed > 0 ||
    delta.lootboxesOpened > 0 ||
    delta.cookiesGenerated > 0 ||
    Object.values(delta.gamesByMode).some((value) => Number(value) > 0);

  if (!hasChanges) {
    return { ok: true };
  }

  const response = await requestJson("/game/api/stats/event", {
    method: "POST",
    body: JSON.stringify({
      playerName,
      delta
    })
  });

  if (response.ok) {
    statsSyncCursor = snapshot;
    saveState();
  }
  return response;
}

async function loadLeaderboardSnapshot() {
  if (!playerName || isGuestMode) {
    return;
  }
  const response = await requestJson("/game/api/leaderboard", { method: "GET" });
  if (!response.ok || !Array.isArray(response.leaderboard)) {
    return;
  }
  leaderboardSnapshot = response.leaderboard;
}

function formatCountdown(seconds) {
  const safe = Math.max(0, Math.floor(seconds));
  const minutes = Math.floor(safe / 60);
  const rest = safe % 60;
  return `${minutes}:${String(rest).padStart(2, "0")}`;
}

function renderSyncStatusBar() {
  if (syncStatusCountdownEl) {
    return;
  }
  const footerEl = document.querySelector(".footer");
  if (!footerEl) {
    return;
  }
  const line = document.createElement("p");
  line.className = "sync-status-subtle";
  line.innerHTML = `Auto-Sync in <strong id="syncStatusCountdown">-</strong>`;
  footerEl.appendChild(line);
  syncStatusCountdownEl = line.querySelector("#syncStatusCountdown");

  const rankLine = document.createElement("p");
  rankLine.className = "sync-status-subtle";
  rankLine.innerHTML = `<span id="syncStatusRank">Platz wird berechnet...</span>`;
  footerEl.appendChild(rankLine);
  syncStatusRankEl = rankLine.querySelector("#syncStatusRank");
}

function renderChaseBanner() {
  if (chaseBannerEl) {
    return;
  }
  const scene = document.querySelector(".scene");
  if (!scene) {
    return;
  }
  const banner = document.createElement("div");
  banner.className = "chase-banner hidden";
  banner.innerHTML = `Naechster Spieler in <strong id="chaseBannerDelta">-</strong>`;
  const hero = scene.querySelector(".hero");
  if (hero && hero.parentNode) {
    hero.parentNode.insertBefore(banner, hero.nextSibling);
  } else {
    scene.prepend(banner);
  }
  chaseBannerEl = banner;
}

function updateSyncStatusBar() {
  if (!syncStatusCountdownEl) {
    return;
  }
  const remainingSeconds = nextServerSyncAt
    ? Math.max(0, Math.ceil((nextServerSyncAt - Date.now()) / 1000))
    : 0;
  syncStatusCountdownEl.textContent = formatCountdown(remainingSeconds);

  if (syncStatusRankEl) {
    const myLevel = Math.max(1, Math.floor(Number(state.level) || 1));
    const myScore = Math.floor(Number(state.total) || 0);
    const others = leaderboardSnapshot
      .filter((entry) => entry && entry.playerName !== playerName)
      .map((entry) => ({
        playerName: entry.playerName,
        level: Math.max(1, Math.floor(Number(entry.bestLevel) || 1)),
        score: Math.floor(Number(entry.bestScore) || 0)
      }));
    const isBetterThanMine = (entry) => entry.level > myLevel || (entry.level === myLevel && entry.score > myScore);
    const rank = 1 + others.filter(isBetterThanMine).length;
    const nextHigher = others
      .filter(isBetterThanMine)
      .sort((a, b) => (a.level - b.level) || (a.score - b.score))[0] || null;
    if (!others.length) {
      syncStatusRankEl.textContent = "Platz 1 • noch keine weiteren Spieler";
    } else if (nextHigher === null) {
      syncStatusRankEl.textContent = `Platz ${rank} • du bist aktuell vorne`;
    } else if (nextHigher.level > myLevel) {
      const deltaLevel = nextHigher.level - myLevel;
      syncStatusRankEl.textContent = `Platz ${rank} • noch ${deltaLevel} Level bis Platz ${rank - 1}`;
    } else {
      const delta = Math.max(0, nextHigher.score - myScore);
      syncStatusRankEl.textContent = `Platz ${rank} • noch ${format(delta)} bis Platz ${rank - 1}`;
    }
  }

  const myLevel = Math.max(1, Math.floor(Number(state.level) || 1));
  const myScore = Math.floor(Number(state.total) || 0);
  const nextEntry = leaderboardSnapshot
    .filter((entry) => {
      if (!entry || entry.playerName === playerName) return false;
      const entryLevel = Math.max(1, Math.floor(Number(entry.bestLevel) || 1));
      const entryScore = Math.floor(Number(entry.bestScore) || 0);
      return entryLevel > myLevel || (entryLevel === myLevel && entryScore > myScore);
    })
    .sort((a, b) => {
      const levelDiff = (Math.max(1, Math.floor(Number(a.bestLevel) || 1)) - Math.max(1, Math.floor(Number(b.bestLevel) || 1)));
      if (levelDiff !== 0) return levelDiff;
      return Math.floor(Number(a.bestScore) || 0) - Math.floor(Number(b.bestScore) || 0);
    })[0];
  if (!chaseBannerEl) {
    return;
  }
  if (!nextEntry || myScore <= 0) {
    chaseBannerEl.classList.add("hidden");
    return;
  }

  const nextLevel = Math.max(1, Math.floor(Number(nextEntry.bestLevel) || 1));
  const nextScore = Math.floor(Number(nextEntry.bestScore) || 0);
  const target = chaseBannerEl.querySelector("#chaseBannerDelta");
  if (target) {
    if (nextLevel > myLevel) {
      target.textContent = `${nextLevel - myLevel} Level (${nextEntry.playerName})`;
    } else {
      const inRange = nextScore <= myScore * 2;
      if (!inRange) {
        chaseBannerEl.classList.add("hidden");
        return;
      }
      const delta = Math.max(0, nextScore - myScore);
      target.textContent = `${format(delta)} (${nextEntry.playerName})`;
    }
  }
  chaseBannerEl.classList.remove("hidden");
}

function startSyncStatusCountdown() {
  if (syncCountdownTimer) {
    clearInterval(syncCountdownTimer);
  }
  syncCountdownTimer = setInterval(updateSyncStatusBar, 1000);
}

async function runServerSyncCycle() {
  nextServerSyncAt = Date.now() + SERVER_SYNC_INTERVAL_MS;
  updateSyncStatusBar();
  await syncGlobalStats();
  await syncPlayerStats();
  await syncAccountSave();
  await loadLeaderboardSnapshot();
  updateSyncStatusBar();
}

function startServerSync() {
  if (!playerName || isGuestMode) {
    return;
  }
  if (serverSyncTimer) {
    clearInterval(serverSyncTimer);
  }
  renderSyncStatusBar();
  renderChaseBanner();
  startSyncStatusCountdown();
  void runServerSyncCycle();
  serverSyncTimer = setInterval(() => {
    void runServerSyncCycle();
  }, SERVER_SYNC_INTERVAL_MS);
}

function getCurrentLocalSaveObject() {
  try {
    const raw = localStorage.getItem(currentSaveKey());
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (error) {
    return null;
  }
}

function extractSavePower(save) {
  const level = Math.max(1, Number(save?.level) || 1);
  const total = Math.max(0, Number(save?.total) || 0);
  return { level, total };
}

function toNonNegativeNumber(value) {
  return Math.max(0, Number(value) || 0);
}

function toNonNegativeInt(value) {
  return Math.max(0, Math.floor(Number(value) || 0));
}

function mergeNumberByMax(a, b, integer = false) {
  const left = integer ? toNonNegativeInt(a) : toNonNegativeNumber(a);
  const right = integer ? toNonNegativeInt(b) : toNonNegativeNumber(b);
  return Math.max(left, right);
}

function mergeUpgradeCounts(localUpgrades, cloudUpgrades) {
  const local = Array.isArray(localUpgrades) ? localUpgrades : [];
  const cloud = Array.isArray(cloudUpgrades) ? cloudUpgrades : [];
  const size = Math.max(local.length, cloud.length, upgrades.length);
  const merged = [];
  for (let i = 0; i < size; i += 1) {
    merged.push(mergeNumberByMax(local[i], cloud[i], true));
  }
  return merged;
}

function mergeBoostInventory(localInventory, cloudInventory) {
  const merged = {};
  boostRarities.forEach((rarity) => {
    merged[rarity.key] = mergeNumberByMax(localInventory?.[rarity.key], cloudInventory?.[rarity.key], true);
  });
  return merged;
}

function normalizeBoost(boost) {
  if (!boost || typeof boost !== "object") return null;
  const expiresAt = Number(boost.expiresAt) || 0;
  if (expiresAt <= Date.now()) return null;
  const id = typeof boost.id === "string" && boost.id ? boost.id : `${expiresAt}-${Math.random().toString(36).slice(2, 8)}`;
  return {
    id,
    rarity: typeof boost.rarity === "string" ? boost.rarity : "common",
    label: typeof boost.label === "string" ? boost.label : "Gewoehnlich",
    multiplier: Number(boost.multiplier) || 1,
    expiresAt
  };
}

function mergeActiveBoosts(localBoosts, cloudBoosts) {
  const mergedMap = new Map();
  const ingest = (list) => {
    (Array.isArray(list) ? list : []).forEach((entry) => {
      const boost = normalizeBoost(entry);
      if (!boost) return;
      const existing = mergedMap.get(boost.id);
      if (!existing || boost.expiresAt > existing.expiresAt) {
        mergedMap.set(boost.id, boost);
      }
    });
  };
  ingest(localBoosts);
  ingest(cloudBoosts);
  return Array.from(mergedMap.values());
}

function mergeOwnedKeys(localOwned, cloudOwned, allowedKeys) {
  const allowed = new Set(allowedKeys);
  const merged = new Set();
  (Array.isArray(localOwned) ? localOwned : []).forEach((key) => {
    if (typeof key === "string" && allowed.has(key)) merged.add(key);
  });
  (Array.isArray(cloudOwned) ? cloudOwned : []).forEach((key) => {
    if (typeof key === "string" && allowed.has(key)) merged.add(key);
  });
  return Array.from(merged);
}

function pickActiveOwnedKey(localActive, cloudActive, ownedSet, fallbackKey) {
  if (typeof localActive === "string" && ownedSet.has(localActive)) return localActive;
  if (typeof cloudActive === "string" && ownedSet.has(cloudActive)) return cloudActive;
  return fallbackKey;
}

function mergeCosmetics(localCosmetics, cloudCosmetics) {
  const local = localCosmetics && typeof localCosmetics === "object" ? localCosmetics : {};
  const cloud = cloudCosmetics && typeof cloudCosmetics === "object" ? cloudCosmetics : {};

  const colorOwned = mergeOwnedKeys(local.colors?.owned, cloud.colors?.owned, colorCosmetics.map((entry) => entry.key));
  const accessoryOwned = mergeOwnedKeys(local.accessories?.owned, cloud.accessories?.owned, accessoryCosmetics.filter((entry) => !entry.hidden).map((entry) => entry.key));
  const skinOwned = mergeOwnedKeys(local.skins?.owned, cloud.skins?.owned, skinCosmetics.map((entry) => entry.key));
  const miscOwned = mergeOwnedKeys(local.miscs?.owned, cloud.miscs?.owned, miscCosmetics.map((entry) => entry.key));

  const colorOwnedSet = new Set(colorOwned);
  const accessoryOwnedSet = new Set(accessoryOwned);
  const skinOwnedSet = new Set(skinOwned);
  const miscOwnedSet = new Set(miscOwned);

  return {
    colors: {
      active: pickActiveOwnedKey(local.colors?.active, cloud.colors?.active, colorOwnedSet, "classic"),
      owned: colorOwned
    },
    accessories: {
      active: pickActiveOwnedKey(local.accessories?.active, cloud.accessories?.active, accessoryOwnedSet, "none"),
      owned: accessoryOwned
    },
    skins: {
      active: pickActiveOwnedKey(local.skins?.active, cloud.skins?.active, skinOwnedSet, "none"),
      owned: skinOwned
    },
    miscs: {
      active: pickActiveOwnedKey(local.miscs?.active, cloud.miscs?.active, miscOwnedSet, "none"),
      owned: miscOwned
    }
  };
}

function mergeModeStats(localStats, cloudStats, mode) {
  return {
    wins: mergeNumberByMax(localStats?.[mode]?.wins, cloudStats?.[mode]?.wins, true),
    losses: mergeNumberByMax(localStats?.[mode]?.losses, cloudStats?.[mode]?.losses, true),
    net: mergeNumberByMax(localStats?.[mode]?.net, cloudStats?.[mode]?.net)
  };
}

function mergeStats(localStats, cloudStats) {
  return {
    tower: mergeModeStats(localStats, cloudStats, "tower"),
    blackjack: mergeModeStats(localStats, cloudStats, "blackjack"),
    slots: mergeModeStats(localStats, cloudStats, "slots"),
    roulette: mergeModeStats(localStats, cloudStats, "roulette"),
    wheel: mergeModeStats(localStats, cloudStats, "wheel"),
    lootbox: {
      opens: mergeNumberByMax(localStats?.lootbox?.opens, cloudStats?.lootbox?.opens, true),
      net: mergeNumberByMax(localStats?.lootbox?.net, cloudStats?.lootbox?.net)
    }
  };
}

function mergeGamesByMode(localModes, cloudModes) {
  return {
    tower: mergeNumberByMax(localModes?.tower, cloudModes?.tower, true),
    blackjack: mergeNumberByMax(localModes?.blackjack, cloudModes?.blackjack, true),
    slots: mergeNumberByMax(localModes?.slots, cloudModes?.slots, true),
    roulette: mergeNumberByMax(localModes?.roulette, cloudModes?.roulette, true),
    wheel: mergeNumberByMax(localModes?.wheel, cloudModes?.wheel, true),
    lootbox: mergeNumberByMax(localModes?.lootbox, cloudModes?.lootbox, true)
  };
}

function mergeStatsCursor(localCursor, cloudCursor) {
  return {
    clicks: mergeNumberByMax(localCursor?.clicks, cloudCursor?.clicks, true),
    gamesPlayed: mergeNumberByMax(localCursor?.gamesPlayed, cloudCursor?.gamesPlayed, true),
    lootboxesOpened: mergeNumberByMax(localCursor?.lootboxesOpened, cloudCursor?.lootboxesOpened, true),
    cookiesGenerated: mergeNumberByMax(localCursor?.cookiesGenerated, cloudCursor?.cookiesGenerated, true),
    gamesByMode: mergeGamesByMode(localCursor?.gamesByMode, cloudCursor?.gamesByMode)
  };
}

function mergeUnlocks(localUnlocks, cloudUnlocks) {
  const merged = {};
  Object.keys(gameUnlocks).forEach((key) => {
    merged[key] = Boolean(localUnlocks?.[key]) || Boolean(cloudUnlocks?.[key]);
  });
  return merged;
}

function mergeAchievementProgress(localAchievements, cloudAchievements) {
  const local = normalizeAchievementProgress(localAchievements);
  const cloud = normalizeAchievementProgress(cloudAchievements);
  const merged = createAchievementProgress();

  achievementMetricKeys.forEach((metric) => {
    merged[metric] = mergeNumberByMax(local[metric], cloud[metric]);
  });

  const unlocked = {};
  achievementDefinitions.forEach((achievement) => {
    const localAt = local.unlocked?.[achievement.key];
    const cloudAt = cloud.unlocked?.[achievement.key];
    if (localAt || cloudAt) {
      unlocked[achievement.key] = localAt || cloudAt || new Date().toISOString();
    }
  });
  merged.unlocked = unlocked;

  return merged;
}

function isObject(value) {
  return Boolean(value) && typeof value === "object";
}

function mergeAccountSaves(localSave, cloudSave) {
  const local = isObject(localSave) ? localSave : null;
  const cloud = isObject(cloudSave) ? cloudSave : null;
  if (!local && !cloud) return null;
  if (!local) return cloud;
  if (!cloud) return local;

  return {
    cookies: mergeNumberByMax(local.cookies, cloud.cookies),
    total: mergeNumberByMax(local.total, cloud.total),
    clicks: mergeNumberByMax(local.clicks, cloud.clicks, true),
    level: Math.max(1, mergeNumberByMax(local.level, cloud.level, true)),
    boostInventory: mergeBoostInventory(local.boostInventory, cloud.boostInventory),
    boosts: mergeActiveBoosts(local.boosts, cloud.boosts),
    lastBonusAt: mergeNumberByMax(local.lastBonusAt, cloud.lastBonusAt, true),
    upgrades: mergeUpgradeCounts(local.upgrades, cloud.upgrades),
    cosmetics: mergeCosmetics(local.cosmetics, cloud.cosmetics),
    stats: mergeStats(local.stats, cloud.stats),
    statsSyncCursor: mergeStatsCursor(local.statsSyncCursor, cloud.statsSyncCursor),
    achievements: mergeAchievementProgress(local.achievements, cloud.achievements),
    unlocks: mergeUnlocks(local.unlocks, cloud.unlocks)
  };
}

function areSavesEqual(left, right) {
  try {
    return JSON.stringify(left) === JSON.stringify(right);
  } catch (_error) {
    return false;
  }
}

function writeLocalSaveAndApply(save) {
  if (!save || typeof save !== "object") return;
  try {
    localStorage.setItem(currentSaveKey(), JSON.stringify(save));
    loadState(state.devMode);
    updateStats();
  } catch (error) {
    // Ignore storage failures.
  }
}

async function syncAccountSave(attempt = 0) {
  if (!accountToken || isGuestMode) {
    return { ok: false };
  }
  const save = getCurrentLocalSaveObject();
  if (!save) {
    return { ok: true };
  }
  const response = await requestJson("/game/api/auth/save", {
    method: "POST",
    authToken: accountToken,
    body: JSON.stringify({
      save,
      expectedUpdatedAt: accountSaveUpdatedAt
    })
  });
  if (response.ok) {
    accountSaveUpdatedAt = typeof response.updatedAt === "string" ? response.updatedAt : accountSaveUpdatedAt;
    return response;
  }

  if (response.status === 409 && attempt < 1) {
    accountSaveUpdatedAt = typeof response.updatedAt === "string" ? response.updatedAt : null;
    const mergedSave = mergeAccountSaves(save, response.save);
    if (mergedSave) {
      const changed = !areSavesEqual(save, mergedSave);
      if (changed) {
        writeLocalSaveAndApply(mergedSave);
      }
      const retry = await syncAccountSave(attempt + 1);
      if (retry.ok && changed) {
        showInfoToast("Spielstand-Konflikt automatisch zusammengefuehrt.");
      }
      return retry;
    }
  }

  return response;
}

function setAccountSession(token, username, resolvedPlayerName) {
  if (isGuestMode && playerName) {
    try {
      localStorage.setItem(GUEST_NAME_KEY, playerName);
    } catch (error) {
      // Ignore storage failures.
    }
  }
  accountToken = token;
  accountName = username;
  accountSaveUpdatedAt = null;
  playerName = resolvedPlayerName;
  isGuestMode = false;
  try {
    localStorage.setItem(ACCOUNT_TOKEN_KEY, token);
    localStorage.setItem(ACCOUNT_NAME_KEY, username);
    localStorage.setItem(PLAYER_NAME_KEY, resolvedPlayerName);
    localStorage.setItem(GUEST_MODE_KEY, "false");
  } catch (error) {
    // Ignore storage failures.
  }
}

function readStoredGuestName() {
  try {
    return (localStorage.getItem(GUEST_NAME_KEY) || "").trim();
  } catch (error) {
    return "";
  }
}

function writeStoredGuestName(name) {
  const value = String(name || "").trim();
  if (!value) return;
  try {
    localStorage.setItem(GUEST_NAME_KEY, value);
    localStorage.setItem(PLAYER_NAME_KEY, value);
  } catch (error) {
    // Ignore storage failures.
  }
}

async function restoreCloudSave() {
  if (!accountToken) {
    return;
  }
  const response = await requestJson("/game/api/auth/save", {
    method: "GET",
    authToken: accountToken
  });
  if (!response.ok) {
    return;
  }
  accountSaveUpdatedAt = typeof response.updatedAt === "string" ? response.updatedAt : null;
  const localSave = getCurrentLocalSaveObject();
  const cloudSave = response.save;
  const mergedSave = mergeAccountSaves(localSave, cloudSave);
  if (!mergedSave) {
    return;
  }
  const changedLocal = !areSavesEqual(localSave, mergedSave);
  const differsFromCloud = !areSavesEqual(cloudSave, mergedSave);
  if (changedLocal) {
    writeLocalSaveAndApply(mergedSave);
    showInfoToast("Cloud-Spielstand geladen.");
  }
  if (differsFromCloud) {
    await syncAccountSave();
  }
}

function clearAccountSession() {
  accountToken = "";
  accountName = "";
  accountSaveUpdatedAt = null;
  try {
    localStorage.removeItem(ACCOUNT_TOKEN_KEY);
    localStorage.removeItem(ACCOUNT_NAME_KEY);
  } catch (error) {
    // Ignore storage failures.
  }
}

function stopServerSync() {
  if (serverSyncTimer) {
    clearInterval(serverSyncTimer);
    serverSyncTimer = null;
  }
  if (syncCountdownTimer) {
    clearInterval(syncCountdownTimer);
    syncCountdownTimer = null;
  }
  nextServerSyncAt = 0;
  leaderboardSnapshot = [];
  if (syncStatusCountdownEl) {
    syncStatusCountdownEl.textContent = "-";
  }
  if (syncStatusRankEl) {
    syncStatusRankEl.textContent = "Platz wird berechnet...";
  }
  if (chaseBannerEl) {
    chaseBannerEl.classList.add("hidden");
  }
}

function updateAccountUi() {
  if (!accountAuthOpenButton || !accountLogoutButton || !accountStateEl) {
    return;
  }
  const loggedIn = Boolean(accountToken && accountName && !isGuestMode);
  accountAuthOpenButton.classList.toggle("hidden", loggedIn);
  accountLogoutButton.classList.toggle("hidden", !loggedIn);
  if (loggedIn) {
    accountStateEl.textContent = `Eingeloggt als ${accountName}`;
    return;
  }
  if (playerName) {
    accountStateEl.textContent = `Gastmodus aktiv (${playerName})`;
    return;
  }
  accountStateEl.textContent = "Kein Spielername gesetzt";
}

function openGuestNameModal() {
  if (document.querySelector(".player-gate")) {
    return;
  }
  const overlay = document.createElement("div");
  overlay.className = "player-gate";
  overlay.innerHTML = `
    <div class="player-gate-card" role="dialog" aria-modal="true" aria-labelledby="guestNameTitle">
      <p class="eyebrow">Gastmodus</p>
      <h2 id="guestNameTitle">Neuen Spielernamen waehlen</h2>
      <p class="player-gate-copy">Du bist ausgeloggt. Bitte gib jetzt einen neuen Spielernamen ein.</p>
      <div class="player-gate-row player-gate-auth-row">
        <input id="guestNameInput" class="player-gate-input" type="text" maxlength="24" placeholder="Neuer Spielername">
      </div>
      <div class="player-gate-actions">
        <button id="guestNameSave" class="player-gate-button" type="button">Speichern</button>
      </div>
      <p id="guestNameStatus" class="player-gate-status">Nur Buchstaben, Zahlen, Leerzeichen, Punkt, Unterstrich und Bindestrich.</p>
    </div>
  `;
  document.body.appendChild(overlay);

  const input = overlay.querySelector("#guestNameInput");
  const button = overlay.querySelector("#guestNameSave");
  const status = overlay.querySelector("#guestNameStatus");

  const submit = async () => {
    const value = input.value.trim();
    if (!value) {
      status.textContent = "Bitte einen gueltigen Namen eingeben.";
      return;
    }
    button.disabled = true;
    input.disabled = true;
    status.textContent = "Speichere Namen...";
    const result = await registerPlayer(value);
    if (!result.ok) {
      button.disabled = false;
      input.disabled = false;
      status.textContent = "Name konnte nicht registriert werden. Bitte pruefen.";
      return;
    }
    isGuestMode = true;
    writeStoredGuestName(value);
    updateAccountUi();
    overlay.remove();
    showInfoToast("Gastname gespeichert.");
  };

  button.addEventListener("click", () => {
    void submit();
  });
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      void submit();
    }
  });
  input.focus();
}

function openIdentityBootstrapModal() {
  if (document.querySelector(".player-gate")) {
    return;
  }
  const overlay = document.createElement("div");
  overlay.className = "player-gate";
  overlay.innerHTML = `
    <div class="player-gate-card" role="dialog" aria-modal="true" aria-labelledby="identityBootstrapTitle">
      <p class="eyebrow">Willkommen</p>
      <h2 id="identityBootstrapTitle">Spielername oder Login</h2>
      <p class="player-gate-copy">Bitte waehle: Gastname setzen oder mit Account einloggen.</p>
      <div class="player-gate-row player-gate-auth-row">
        <input id="identityGuestInput" class="player-gate-input" type="text" maxlength="24" placeholder="Dein Gastname">
      </div>
      <div class="player-gate-actions">
        <button id="identityGuestSave" class="player-gate-button" type="button">Gastname setzen</button>
        <button id="identityAccountOpen" class="player-gate-button player-gate-secondary" type="button">Account Login / Registrierung</button>
      </div>
      <p id="identityBootstrapStatus" class="player-gate-status">Ohne Gastname oder Account geht es nicht weiter.</p>
    </div>
  `;
  document.body.appendChild(overlay);

  const input = overlay.querySelector("#identityGuestInput");
  const guestSaveButton = overlay.querySelector("#identityGuestSave");
  const accountOpenButton = overlay.querySelector("#identityAccountOpen");
  const status = overlay.querySelector("#identityBootstrapStatus");

  const saveGuest = async () => {
    const value = input.value.trim();
    if (!value) {
      status.textContent = "Bitte einen gueltigen Namen eingeben.";
      return;
    }
    guestSaveButton.disabled = true;
    accountOpenButton.disabled = true;
    input.disabled = true;
    status.textContent = "Speichere Gastnamen...";
    const result = await registerPlayer(value);
    if (!result.ok) {
      guestSaveButton.disabled = false;
      accountOpenButton.disabled = false;
      input.disabled = false;
      status.textContent = "Name konnte nicht registriert werden.";
      return;
    }
    isGuestMode = true;
    writeStoredGuestName(value);
    updateAccountUi();
    overlay.remove();
    showInfoToast("Gastname gespeichert.");
  };

  guestSaveButton.addEventListener("click", () => {
    void saveGuest();
  });
  accountOpenButton.addEventListener("click", () => {
    overlay.remove();
    openAccountAuthModal();
  });
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      void saveGuest();
    }
  });
  input.focus();
}

function enforcePlayerIdentityGate() {
  if (playerName) {
    return;
  }
  if (document.querySelector(".player-gate")) {
    return;
  }
  openIdentityBootstrapModal();
}

function createAccountAuthModal() {
  const overlay = document.createElement("div");
  overlay.className = "player-gate";
  overlay.innerHTML = `
    <div class="player-gate-card player-gate-account" role="dialog" aria-modal="true" aria-labelledby="playerGateTitle">
      <p class="eyebrow">Account</p>
      <h2 id="playerGateTitle">Login oder Registrierung</h2>
      <p class="player-gate-copy">Optional: Mit Account wird dein Spielstand ueber mehrere Geraete synchronisiert.</p>
      <div class="player-gate-tabs" role="tablist" aria-label="Account Modus">
        <button id="playerGateTabLogin" class="player-gate-tab active" type="button" role="tab" aria-selected="true">Login</button>
        <button id="playerGateTabRegister" class="player-gate-tab" type="button" role="tab" aria-selected="false">Registrieren</button>
      </div>
      <div class="player-gate-row player-gate-auth-row">
        <input id="playerGateUser" class="player-gate-input" type="text" maxlength="24" placeholder="Username (a-z, 0-9, ._-)">
        <input id="playerGatePassword" class="player-gate-input" type="password" maxlength="128" placeholder="Passwort (mind. 8 Zeichen)">
        <input id="playerGatePasswordConfirm" class="player-gate-input hidden" type="password" maxlength="128" placeholder="Passwort bestaetigen">
      </div>
      <div class="player-gate-actions">
        <button id="playerGateSubmit" class="player-gate-button" type="button">Login</button>
        <button id="playerGateGuest" class="player-gate-button player-gate-ghost" type="button">Zurueck zum Gastmodus</button>
      </div>
      <p id="playerGateStatus" class="player-gate-status">Gastmodus bleibt Standard, Login ist optional.</p>
    </div>
  `;
  document.body.appendChild(overlay);
  const tabLogin = overlay.querySelector("#playerGateTabLogin");
  const tabRegister = overlay.querySelector("#playerGateTabRegister");
  const userInput = overlay.querySelector("#playerGateUser");
  const passwordInput = overlay.querySelector("#playerGatePassword");
  const passwordConfirmInput = overlay.querySelector("#playerGatePasswordConfirm");
  const submitButton = overlay.querySelector("#playerGateSubmit");
  const guestButton = overlay.querySelector("#playerGateGuest");
  const status = overlay.querySelector("#playerGateStatus");
  return {
    overlay,
    tabLogin,
    tabRegister,
    userInput,
    passwordInput,
    passwordConfirmInput,
    submitButton,
    guestButton,
    status
  };
}

function openAccountAuthModal() {
  if (document.querySelector(".player-gate")) {
    return;
  }
  const gate = createAccountAuthModal();
  let mode = "login";

  const setMode = (nextMode) => {
    mode = nextMode === "register" ? "register" : "login";
    const isRegister = mode === "register";
    gate.tabLogin.classList.toggle("active", !isRegister);
    gate.tabRegister.classList.toggle("active", isRegister);
    gate.tabLogin.setAttribute("aria-selected", String(!isRegister));
    gate.tabRegister.setAttribute("aria-selected", String(isRegister));
    gate.submitButton.textContent = isRegister ? "Registrieren" : "Login";
    gate.passwordConfirmInput.classList.toggle("hidden", !isRegister);
    if (!isRegister) {
      gate.passwordConfirmInput.value = "";
    }
  };

  const setPending = (pending, message) => {
    gate.tabLogin.disabled = pending;
    gate.tabRegister.disabled = pending;
    gate.submitButton.disabled = pending;
    gate.guestButton.disabled = pending;
    gate.userInput.disabled = pending;
    gate.passwordInput.disabled = pending;
    gate.passwordConfirmInput.disabled = pending;
    gate.status.textContent = message;
  };

  const submitAuth = async (mode) => {
    const username = gate.userInput.value.trim();
    const password = gate.passwordInput.value;
    const passwordConfirm = gate.passwordConfirmInput.value;
    if (!username || !password) {
      gate.status.textContent = "Username und Passwort ausfuellen.";
      return;
    }
    if (mode === "register") {
      if (!passwordConfirm) {
        gate.status.textContent = "Bitte Passwort bestaetigen.";
        return;
      }
      if (password !== passwordConfirm) {
        gate.status.textContent = "Passwoerter stimmen nicht ueberein.";
        return;
      }
    }
    setPending(true, mode === "login" ? "Login laeuft..." : "Registrierung laeuft...");
    const endpoint = mode === "login" ? "/game/api/auth/login" : "/game/api/auth/register";
    const result = await requestJson(endpoint, {
      method: "POST",
      body: JSON.stringify({ username, password })
    });
    setPending(false, "Gast: nur lokal. Account: Cloud-Save + geraeteuebergreifend.");
    if (!result.ok) {
      if (result.status === 0) {
        gate.status.textContent = "Server nicht erreichbar. Bitte erneut versuchen.";
        return;
      }
      if (mode === "login") {
        gate.status.textContent = "Falscher Username oder Passwort.";
      } else {
        gate.status.textContent = result.error || "Registrierung fehlgeschlagen.";
      }
      return;
    }
    if (!result.token || !result.username || !result.playerName) {
      gate.status.textContent = "Unerwartete Serverantwort. Bitte erneut versuchen.";
      return;
    }

    // Treat successful auth response as success even if optional follow-up sync steps fail.
    setAccountSession(result.token, result.username, result.playerName);
    const registerResult = await registerPlayer(result.playerName);
    if (!registerResult.ok) {
      gate.status.textContent = "Login erfolgreich, aber Player-Sync fehlgeschlagen.";
    }
    try {
      await restoreCloudSave();
    } catch (_error) {
      // Ignore cloud restore errors to avoid blocking login.
    }
    try {
      stopServerSync();
      startServerSync();
    } catch (_error) {
      // Ignore sync timer boot errors; user is still logged in.
    }
    updateAccountUi();
    if (gate.overlay && gate.overlay.parentNode) {
      gate.overlay.remove();
    }
    if (mode === "login") {
      showInfoToast("Login erfolgreich.");
    } else {
      showInfoToast("Registrierung erfolgreich. Du bist jetzt eingeloggt.");
    }
  };

  gate.tabLogin.addEventListener("click", () => {
    setMode("login");
  });
  gate.tabRegister.addEventListener("click", () => {
    setMode("register");
  });
  gate.submitButton.addEventListener("click", () => {
    void submitAuth(mode);
  });
  gate.guestButton.addEventListener("click", () => {
    isGuestMode = true;
    gate.overlay.remove();
    const guestName = readStoredGuestName();
    playerName = guestName || "";
    try {
      localStorage.setItem(GUEST_MODE_KEY, "true");
      if (guestName) {
        localStorage.setItem(PLAYER_NAME_KEY, guestName);
      } else {
        localStorage.removeItem(PLAYER_NAME_KEY);
      }
    } catch (error) {
      // Ignore storage failures.
    }
    updateAccountUi();
    enforcePlayerIdentityGate();
  });
  gate.passwordInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      void submitAuth(mode);
    }
  });
  gate.passwordConfirmInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      void submitAuth(mode);
    }
  });
  setMode("login");
  gate.userInput.focus();
}

async function logoutAccount() {
  const tokenToRevoke = accountToken;

  // Hard local reset on logout: clear both normal and dev save slots.
  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(DEV_STORAGE_KEY);
    localStorage.setItem(DEV_MODE_KEY, "false");
  } catch (error) {
    // Ignore storage failures.
  }
  loadState(false);
  updateStats();

  clearAccountSession();
  const storedGuestName = readStoredGuestName();
  playerName = storedGuestName || "";
  isGuestMode = true;
  stopServerSync();
  updateAccountUi();
  const openGate = document.querySelector(".player-gate");
  if (openGate && openGate.parentNode) {
    openGate.remove();
  }
  try {
    localStorage.setItem(GUEST_MODE_KEY, "true");
    if (storedGuestName) {
      localStorage.setItem(PLAYER_NAME_KEY, storedGuestName);
    } else {
      localStorage.removeItem(PLAYER_NAME_KEY);
    }
  } catch (error) {
    // Ignore storage failures.
  }
  if (tokenToRevoke) {
    void requestJson("/game/api/auth/logout", {
      method: "POST",
      authToken: tokenToRevoke
    });
  }
  if (storedGuestName) {
    void registerPlayer(storedGuestName);
  } else {
    openIdentityBootstrapModal();
  }
  showInfoToast("Abgemeldet. Lokaler Spielstand wurde zurueckgesetzt.");
}

async function ensurePlayerIdentity() {
  let savedToken = "";
  let savedPlayerName = "";
  let savedGuestName = "";
  try {
    savedToken = localStorage.getItem(ACCOUNT_TOKEN_KEY) || "";
    accountName = localStorage.getItem(ACCOUNT_NAME_KEY) || "";
    savedPlayerName = localStorage.getItem(PLAYER_NAME_KEY) || "";
    savedGuestName = localStorage.getItem(GUEST_NAME_KEY) || "";
  } catch (error) {
    savedToken = "";
    accountName = "";
    savedPlayerName = "";
    savedGuestName = "";
  }

  if (savedToken) {
    const session = await requestJson("/game/api/auth/session", {
      method: "GET",
      authToken: savedToken
    });
    if (session.ok && session.playerName && session.username) {
      setAccountSession(savedToken, session.username, session.playerName);
      await registerPlayer(session.playerName);
      await restoreCloudSave();
      startServerSync();
      updateAccountUi();
      return;
    }
    // Keep login data locally unless server explicitly says token is invalid.
    if (session.status === 401 || session.status === 403) {
      clearAccountSession();
    } else {
      accountToken = savedToken;
      accountName = accountName || "Account";
      isGuestMode = false;
      if (savedPlayerName) {
        playerName = savedPlayerName.trim();
      }
      updateAccountUi();
      return;
    }
  }

  isGuestMode = true;
  playerName = (savedPlayerName || savedGuestName || "").trim();
  stopServerSync();
  updateAccountUi();
  try {
    localStorage.setItem(GUEST_MODE_KEY, "true");
    if (playerName) {
      localStorage.setItem(PLAYER_NAME_KEY, playerName);
      localStorage.setItem(GUEST_NAME_KEY, playerName);
    }
  } catch (error) {
    // Ignore storage failures.
  }
  if (playerName) {
    await registerPlayer(playerName);
  }
  if (!playerName) {
    openIdentityBootstrapModal();
    return;
  }
  enforcePlayerIdentityGate();
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

function formatCompact(num) {
  const value = Number.isInteger(num) ? num : roundValue(num);
  const abs = Math.abs(value);
  if (abs < 1_000) {
    return value.toLocaleString("de-DE", {
      minimumFractionDigits: 0,
      maximumFractionDigits: Number.isInteger(value) ? 0 : 2
    });
  }

  const units = [
    { value: 1e30, suffix: "no" },
    { value: 1e27, suffix: "oc" },
    { value: 1e24, suffix: "sp" },
    { value: 1e21, suffix: "sx" },
    { value: 1e18, suffix: "qi" },
    { value: 1e15, suffix: "qa" },
    { value: 1e12, suffix: "t" },
    { value: 1e9, suffix: "b" },
    { value: 1e6, suffix: "m" },
    { value: 1e3, suffix: "k" }
  ];

  const unit = units.find((entry) => abs >= entry.value);
  if (!unit) {
    return format(value);
  }

  const scaled = value / unit.value;
  const digits = abs >= unit.value * 100 ? 0 : abs >= unit.value * 10 ? 1 : 2;
  return `${scaled.toLocaleString("de-DE", {
    minimumFractionDigits: 0,
    maximumFractionDigits: digits
  })}${unit.suffix}`;
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
  const gameBusy = state.towerActive || blackjackActive || slotsSpinning || lootboxOpening || rouletteSpinning || wheelSpinning;
  const progress = state.devMode
    ? 1
    : Math.max(0, Math.min(1, requirement > 0 ? state.cookies / requirement : 0));
  const canLevelUp = !gameBusy && canAfford(requirement);
  if (levelEl) {
    levelEl.textContent = String(state.level);
  }
  if (levelMultiplierEl) {
    const levelMultiplier = levelGainMultiplier();
    const boostMultiplier = boostGainMultiplier();
    levelMultiplierEl.textContent = boostMultiplier > 1
      ? `Gesamt x${formatMultiplier(levelMultiplier * boostMultiplier)} (Level x${formatMultiplier(levelMultiplier)})`
      : `Gewinn-Multiplikator x${formatMultiplier(levelMultiplier)}`;
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
  if (removeExpiredBoosts()) {
    recalculateProduction();
  }
  syncAchievementDerivedMetrics();
  evaluateAchievements();
  renderDevMode();
  updateVersionLink();
  setDisplayValue(cookieCountEl, state.cookies);
  setDisplayValue(perClickEl, state.perClick);
  setDisplayValue(totalEl, state.total, "", formatCompact, formatFull);
  setDisplayValue(clickCountEl, state.clicks);
  setDisplayValue(rateEl, state.cps, " / sek");
  renderLevelProgress();
  renderBoosts();
  renderLootboxes();
  renderUpgrades();
  renderCosmetics();
  renderUnlocks();
  renderTower();
  renderBlackjack();
  renderSlots();
  renderWheel();
  renderRoulette();
  renderGameStats();
  renderAchievements();
  updateFinanceOverview();
  saveState();
}

function renderUnlocks() {
  const entries = [
    { key: "tower", open: towerOpenButton, buy: towerBuyButton },
    { key: "blackjack", open: blackjackOpenButton, buy: blackjackBuyButton },
    { key: "slots", open: slotsOpenButton, buy: slotsBuyButton },
    { key: "lootbox", open: lootboxOpenButton, buy: lootboxBuyButton },
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
    net: gameStats.tower.net + gameStats.blackjack.net + gameStats.slots.net + gameStats.roulette.net + gameStats.wheel.net + gameStats.lootbox.net
  };
  statsOverallEl.textContent = `${overall.wins}W / ${overall.losses}L (${formatNet(overall.net)})`;
  statsTowerEl.textContent = `${gameStats.tower.wins}W / ${gameStats.tower.losses}L (${formatNet(gameStats.tower.net)})`;
  statsBlackjackEl.textContent = `${gameStats.blackjack.wins}W / ${gameStats.blackjack.losses}L (${formatNet(gameStats.blackjack.net)})`;
  statsSlotsEl.textContent = `${gameStats.slots.wins}W / ${gameStats.slots.losses}L (${formatNet(gameStats.slots.net)})`;
  statsRouletteEl.textContent = `${gameStats.roulette.wins}W / ${gameStats.roulette.losses}L (${formatNet(gameStats.roulette.net)})`;
  statsWheelEl.textContent = `${gameStats.wheel.wins}W / ${gameStats.wheel.losses}L (${formatNet(gameStats.wheel.net)})`;
  if (statsLootboxEl) {
    statsLootboxEl.textContent = `${gameStats.lootbox.opens}x (${formatNet(gameStats.lootbox.net)})`;
  }
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
  if (financeLootboxNetEl) {
    financeLootboxNetEl.textContent = formatFullNet(gameStats.lootbox.net);
  }
}

function recordGameResult(key, bet, payout) {
  const net = payout - bet;
  bumpAchievementMetric("gamesStarted", bet > 0 ? 1 : 0);
  bumpAchievementMetric("totalBetPlaced", Math.max(0, Number(bet) || 0));
  bumpAchievementMetric("totalPayoutReceived", Math.max(0, Number(payout) || 0));
  if (net > 0) {
    gameStats[key].wins += 1;
    bumpAchievementMetric("gameWins", 1);
    raiseAchievementMetric("biggestSingleWin", net);
  } else if (net < 0) {
    gameStats[key].losses += 1;
    bumpAchievementMetric("gameLosses", 1);
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

function showInfoToast(message) {
  if (!gameToast) return;
  if (toastTimer) {
    clearTimeout(toastTimer);
    toastTimer = null;
  }
  gameToast.classList.remove("hidden", "win", "loss", "neutral");
  gameToast.classList.add("neutral");
  gameToast.textContent = message;
  toastTimer = setTimeout(() => {
    gameToast.classList.add("hidden");
  }, 2600);
}

function setAllInBet(input, renderFn) {
  if (!input) return;
  input.value = String(Math.max(0, Math.floor(state.cookies)));
  if (typeof renderFn === "function") {
    renderFn();
  }
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

async function resetAccount() {
  const shouldResetCosmetics = resetCosmeticsToggle ? resetCosmeticsToggle.checked : true;

  state.cookies = 0;
  state.total = 0;
  state.clicks = 0;
  state.level = 1;
  state.basePerClick = 1;
  state.baseCps = 0;
  state.perClick = 1;
  state.cps = 0;
  state.boostInventory = createEmptyBoostInventory();
  state.boosts = [];
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

  ["tower", "blackjack", "slots", "roulette", "wheel"].forEach((key) => {
    gameStats[key].wins = 0;
    gameStats[key].losses = 0;
    gameStats[key].net = 0;
  });
  gameStats.lootbox.opens = 0;
  gameStats.lootbox.net = 0;
  resetAchievementProgress();

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
  if (lootboxTimer) {
    clearTimeout(lootboxTimer);
    lootboxTimer = null;
  }
  clearLootboxPreviewTimer();
  slotsSpinning = false;
  lootboxOpening = false;
  rouletteSpinning = false;
  wheelSpinning = false;

  const currentName = playerName || (() => {
    try {
      return localStorage.getItem(PLAYER_NAME_KEY) || "";
    } catch (error) {
      return "";
    }
  })();
  if (currentName) {
    await requestJson("/game/api/player/reset", {
      method: "POST",
      body: JSON.stringify({ playerName: currentName })
    });
  }

  if (serverSyncTimer) {
    clearInterval(serverSyncTimer);
    serverSyncTimer = null;
  }
  if (syncCountdownTimer) {
    clearInterval(syncCountdownTimer);
    syncCountdownTimer = null;
  }
  nextServerSyncAt = 0;
  leaderboardSnapshot = [];
  const hadAccountSession = Boolean(accountToken);
  const activeAccountToken = accountToken;
  const activeAccountName = accountName;
  const activePlayerName = playerName;
  playerName = "";
  isGuestMode = false;
  try {
    localStorage.removeItem(PLAYER_NAME_KEY);
  } catch (error) {
    // Ignore storage failures.
  }

  closeResetModal();
  updateStats();
  if (hadAccountSession && activePlayerName) {
    setAccountSession(activeAccountToken, activeAccountName, activePlayerName);
    await registerPlayer(activePlayerName);
    await syncAccountSave();
    showInfoToast("Spielstand wurde zurueckgesetzt.");
    startServerSync();
    updateAccountUi();
    return;
  }
  showInfoToast("Fortschritt wurde lokal zurueckgesetzt.");
  isGuestMode = true;
  updateAccountUi();
  try {
    localStorage.setItem(GUEST_MODE_KEY, "true");
  } catch (error) {
    // Ignore storage failures.
  }
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

function openLootboxModal() {
  if (!gameUnlocks.lootbox.unlocked && !state.devMode) {
    return;
  }
  if (lootboxStatus) {
    lootboxStatus.textContent = "Bereit fuer deinen naechsten Pull.";
  }
  renderLootboxPreview();
  resetLootboxVisual();
  if (lootboxResult) {
    lootboxResult.className = "lootbox-result";
    lootboxResult.innerHTML = `
      <span class="lootbox-tag">Moegliche Rewards</span>
      <strong>Viele kleine Cookie-Gewinne, seltene Boosts und Cosmetics</strong>
      <span>Cosmetics schalten sich sofort frei.</span>
    `;
  }
  lootboxModal.classList.remove("hidden");
  lootboxModal.setAttribute("aria-hidden", "false");
  renderLootboxes();
}

function closeLootboxModal() {
  clearLootboxPreviewTimer();
  resetLootboxVisual();
  lootboxModal.classList.add("hidden");
  lootboxModal.setAttribute("aria-hidden", "true");
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

function openAchievementModal() {
  if (!achievementModal) return;
  renderAchievements();
  achievementModal.classList.remove("hidden");
  achievementModal.setAttribute("aria-hidden", "false");
}

function closeAchievementModal() {
  if (!achievementModal) return;
  achievementModal.classList.add("hidden");
  achievementModal.setAttribute("aria-hidden", "true");
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
  if (removeExpiredBoosts()) {
    recalculateProduction();
  }
  state.cookies += state.perClick;
  state.total += state.perClick;
  state.clicks += 1;
  bumpAchievementMetric("manualClicks", 1);
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
  bumpAchievementMetric("upgradesPurchased", 1);
  recalculateProduction();
  updateStats();
}

function tick() {
  const expiredBoosts = removeExpiredBoosts();
  if (expiredBoosts) {
    recalculateProduction();
  }
  bumpAchievementMetric("secondsPlayed", 1);
  if (state.cps > 0) {
    state.cookies += state.cps;
    state.total += state.cps;
    updateStats();
    return;
  }
  if (expiredBoosts) {
    updateStats();
    return;
  }
  if (state.boosts.length > 0) {
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
  bumpAchievementMetric("bonusesCollected", 1);
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
  bumpAchievementMetric("levelUps", 1);
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
  if (lootboxTimer) {
    clearTimeout(lootboxTimer);
    lootboxTimer = null;
  }
  slotsSpinning = false;
  lootboxOpening = false;
  rouletteSpinning = false;
  wheelSpinning = false;
  const boost = grantRandomBoost();
  recalculateProduction();
  showInfoToast(`Boost erhalten: ${boost.label} +${formatMultiplier(boost.multiplier - 1)}x fuer ${boost.durationLabel} (im Inventar)`);
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
  const normalizedRotation = ((rouletteRotation % 360) + 360) % 360;
  const targetRotation = (360 - targetAngle + 360) % 360;
  const rotationDelta = (targetRotation - normalizedRotation + 360) % 360;
  rouletteRotation += 360 * 6 + rotationDelta;
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
if (achievementOpenButton) achievementOpenButton.addEventListener("click", openAchievementModal);
if (achievementCloseButton) achievementCloseButton.addEventListener("click", closeAchievementModal);
if (achievementCloseOverlay) achievementCloseOverlay.addEventListener("click", closeAchievementModal);
towerOpenButton.addEventListener("click", openTowerModal);
towerCloseButton.addEventListener("click", closeTowerModal);
towerCloseOverlay.addEventListener("click", closeTowerModal);
towerBetInput.addEventListener("input", renderTower);
towerAllInButton.addEventListener("click", () => setAllInBet(towerBetInput, renderTower));
towerStartButton.addEventListener("click", startTower);
towerClimbButton.addEventListener("click", climbTower);
towerCashoutButton.addEventListener("click", cashoutTower);
towerBuyButton.addEventListener("click", () => buyGame("tower", "Tower"));
blackjackOpenButton.addEventListener("click", openBlackjackModal);
blackjackCloseButton.addEventListener("click", closeBlackjackModal);
blackjackCloseOverlay.addEventListener("click", closeBlackjackModal);
blackjackBetInput.addEventListener("input", renderBlackjack);
blackjackAllInButton.addEventListener("click", () => setAllInBet(blackjackBetInput, renderBlackjack));
blackjackDealButton.addEventListener("click", dealBlackjack);
blackjackHitButton.addEventListener("click", hitBlackjack);
blackjackStandButton.addEventListener("click", standBlackjack);
blackjackBuyButton.addEventListener("click", () => buyGame("blackjack", "Blackjack"));
slotsOpenButton.addEventListener("click", openSlotsModal);
slotsCloseButton.addEventListener("click", closeSlotsModal);
slotsCloseOverlay.addEventListener("click", closeSlotsModal);
slotsAllInButton.addEventListener("click", () => setAllInBet(slotsBetInput, renderSlots));
slotsSpinButton.addEventListener("click", spinSlots);
slotsBetInput.addEventListener("input", renderSlots);
slotsBuyButton.addEventListener("click", () => buyGame("slots", "Slots"));
lootboxOpenButton.addEventListener("click", openLootboxModal);
lootboxCloseButton.addEventListener("click", closeLootboxModal);
lootboxCloseOverlay.addEventListener("click", closeLootboxModal);
lootboxRollButton.addEventListener("click", openLootbox);
lootboxBuyButton.addEventListener("click", () => buyGame("lootbox", "Lootboxes"));
rouletteOpenButton.addEventListener("click", openRouletteModal);
rouletteCloseButton.addEventListener("click", closeRouletteModal);
rouletteCloseOverlay.addEventListener("click", closeRouletteModal);
rouletteAllInButton.addEventListener("click", () => setAllInBet(rouletteBetInput, renderRoulette));
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
wheelAllInButton.addEventListener("click", () => setAllInBet(wheelBetInput, renderWheel));
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
if (accountAuthOpenButton) {
  accountAuthOpenButton.addEventListener("click", openAccountAuthModal);
}
if (accountLogoutButton) {
  accountLogoutButton.addEventListener("click", () => {
    void logoutAccount();
  });
}
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
updateAccountUi();
void ensurePlayerIdentity();
window.addEventListener("beforeunload", () => {
  void syncPlayerStats();
  void syncAccountSave();
});



