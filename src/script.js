const cookieCountEl = document.getElementById("cookieCount");
const perClickEl = document.getElementById("perClick");
const clickCountEl = document.getElementById("clickCount");
const totalEl = document.getElementById("total");
const rateEl = document.getElementById("rate");
const cookieButton = document.getElementById("cookieButton");
const cookieAccessoryEl = document.getElementById("cookieAccessory");
const upgradeList = document.getElementById("upgradeList");
const cosmeticsModal = document.getElementById("cosmeticsModal");
const cosmeticsOpenButton = document.getElementById("cosmeticsOpen");
const cosmeticsCloseButton = document.getElementById("cosmeticsClose");
const cosmeticsCloseOverlay = document.getElementById("cosmeticsCloseOverlay");
const cosmeticsCatalogList = document.getElementById("cosmeticsCatalogList");
const cosmeticsPreviewCookie = document.getElementById("cosmeticsPreviewCookie");
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
const rouletteNumberInput = document.getElementById("rouletteNumber");
const statsWheelEl = document.getElementById("statsWheel");
const gameToast = document.getElementById("gameToast");
const resetModal = document.getElementById("resetModal");
const resetOpenButton = document.getElementById("resetOpen");
const resetCloseButton = document.getElementById("resetClose");
const resetCloseOverlay = document.getElementById("resetCloseOverlay");
const resetConfirmButton = document.getElementById("resetConfirm");
const resetCancelButton = document.getElementById("resetCancel");
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

const upgrades = [
  { name: "Sprinkles", type: "click", power: 1, baseCost: 20, desc: "+1 pro Klick" },
  { name: "Ofen", type: "cps", power: 1, baseCost: 15, desc: "+1 pro Sek" },
  { name: "Double Scoop", type: "click", power: 5, baseCost: 150, desc: "+5 pro Klick" },
  { name: "Mixer", type: "cps", power: 5, baseCost: 90, desc: "+5 pro Sek" },
  { name: "Rolling Pin", type: "click", power: 10, baseCost: 450, desc: "+10 pro Klick" },
  { name: "Cafe", type: "cps", power: 15, baseCost: 300, desc: "+15 pro Sek" },
  { name: "Factory", type: "cps", power: 50, baseCost: 1200, desc: "+50 pro Sek" },
  { name: "Festival Dance", type: "click", power: 200, baseCost: 5000, desc: "+200 pro Klick" },
  { name: "Festival", type: "cps", power: 200, baseCost: 5000, desc: "+200 pro Sek" },
  { name: "Chease Cake", type: "cps", power: 500, baseCost: 50000, desc: "+500 pro Sek" }
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

const state = {
  cookies: 0,
  total: 0,
  clicks: 0,
  perClick: 1,
  cps: 0,
  activeColor: "classic",
  activeAccessory: "none",
  bonusReady: false,
  lastBonusAt: 0,
  towerActive: false,
  towerBet: 0,
  towerStep: 0,
  towerMultiplier: 0
};

const towerSteps = [0, 0.5, 1, 1.5, 2, 2.5, 3, 4];
const towerChances = [0.78, 0.74, 0.7, 0.66, 0.62, 0.58, 0.55, 0.52];
const slotSymbols = [
  { key: "CHERRY", icon: "ðŸ’", weight: 30, multiplier: 2 },
  { key: "LEMON", icon: "ðŸ‹", weight: 26, multiplier: 1.5 },
  { key: "COOKIE", icon: "ðŸª", weight: 16, multiplier: 6 },
  { key: "STAR", icon: "â­", weight: 14, multiplier: 4 },
  { key: "BELL", icon: "ðŸ””", weight: 14, multiplier: 3 }
];
const rouletteOrder = [
  0, 32, 15, 19, 4, 21, 2, 25, 17, 34,
  6, 27, 13, 36, 11, 30, 8, 23, 10, 5,
  24, 16, 33, 1, 20, 14, 31, 9, 22, 18,
  29, 7, 28, 12, 35, 3, 26
];
const rouletteRedNumbers = new Set([1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]);
const wheelSegments = [
  { label: "x2", multiplier: 2, weight: 36 },
  { label: "x50", multiplier: 50, weight: 6 },
  { label: "x100", multiplier: 100, weight: 3 },
  { label: "x0.5", multiplier: 0.5, weight: 28 },
  { label: "Niete", multiplier: 0, weight: 27 }
];

const gameUnlocks = {
  tower: { price: 1_000_000, unlocked: false },
  blackjack: { price: 5_000_000, unlocked: false },
  slots: { price: 25_000_000, unlocked: false },
  roulette: { price: 50_000_000, unlocked: false },
  wheel: { price: 150_000_000, unlocked: false }
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
  state.perClick = 1;
  state.cps = 0;
  upgrades.forEach((upgrade, index) => {
    const count = Number(counts[index]) || 0;
    upgrade.count = count;
    if (upgrade.type === "click") {
      state.perClick += upgrade.power * count;
    } else {
      state.cps += upgrade.power * count;
    }
  });
}

function activeColorCosmetic() {
  return colorCosmetics.find((cosmetic) => cosmetic.key === state.activeColor) || colorCosmetics[0];
}

function activeAccessoryCosmetic() {
  return accessoryCosmetics.find((cosmetic) => cosmetic.key === state.activeAccessory && !cosmetic.hidden) || accessoryCosmetics[0];
}

function resetCosmeticsState() {
  colorCosmetics.forEach((cosmetic) => {
    cosmetic.owned = cosmetic.key === "classic";
  });
  accessoryCosmetics.forEach((cosmetic) => {
    cosmetic.owned = cosmetic.key === "none";
  });
  state.activeColor = "classic";
  state.activeAccessory = "none";
}

function applyCosmeticTheme() {
  const color = activeColorCosmetic();
  const accessory = activeAccessoryCosmetic();
  state.activeColor = color.key;
  state.activeAccessory = accessory.key;
  Object.entries(color.theme).forEach(([key, value]) => {
    cookieButton.style.setProperty(key, value);
  });
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

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return;
    }
    const saved = JSON.parse(raw);
    state.cookies = Number(saved.cookies) || 0;
    state.total = Number(saved.total) || 0;
    state.clicks = Number(saved.clicks) || 0;
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
    resetCosmeticsState();
    if (saved.cosmetics) {
      if (saved.cosmetics.colors || saved.cosmetics.accessories) {
        const ownedColors = Array.isArray(saved.cosmetics.colors?.owned) ? saved.cosmetics.colors.owned : [];
        const ownedAccessories = Array.isArray(saved.cosmetics.accessories?.owned) ? saved.cosmetics.accessories.owned : [];
        colorCosmetics.forEach((cosmetic) => {
          cosmetic.owned = cosmetic.key === "classic" || ownedColors.includes(cosmetic.key);
        });
        accessoryCosmetics.forEach((cosmetic) => {
          cosmetic.owned = cosmetic.key === "none" || ownedAccessories.includes(cosmetic.key);
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
      } else {
        migrateLegacyCosmetics(saved.cosmetics);
      }
    }
  } catch (error) {
    applyUpgradeCounts([]);
    resetCosmeticsState();
  }
  applyCosmeticTheme();
}

function saveState() {
  const payload = {
    cookies: state.cookies,
    total: state.total,
    clicks: state.clicks,
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
      }
    },
    stats: gameStats,
    unlocks: Object.fromEntries(
      Object.entries(gameUnlocks).map(([key, entry]) => [key, entry.unlocked])
    )
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (error) {
    // Ignore storage failures (private mode, quota).
  }
}

function format(num) {
  const value = Math.floor(num);
  const abs = Math.abs(value);
  const trim = (text) => text.replace(/\.0$/, "");
  if (abs >= 1e12) return `${trim((value / 1e12).toFixed(abs < 1e13 ? 1 : 0))}T`;
  return value.toLocaleString("de-DE");
}

function formatFull(num) {
  return Math.floor(num).toLocaleString("de-DE");
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
  return Math.floor(upgrade.baseCost * Math.pow(1.15, upgrade.count));
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

    const desc = document.createElement("p");
    desc.textContent = `${upgrade.desc} - Kosten: ${format(costFor(upgrade))}`;

    info.appendChild(title);
    info.appendChild(desc);

    const button = document.createElement("button");
    button.textContent = "Kaufen";
    button.disabled = state.cookies < costFor(upgrade);

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
  if (!cosmetic || cosmetic.owned || state.cookies < cosmetic.cost) {
    return;
  }
  state.cookies -= cosmetic.cost;
  cosmetic.owned = true;
  state.activeColor = cosmetic.key;
  applyCosmeticTheme();
  showGameToast(-cosmetic.cost, `${cosmetic.name} Farbe`);
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
  if (!cosmetic || cosmetic.owned || state.cookies < cosmetic.cost) {
    return;
  }
  state.cookies -= cosmetic.cost;
  cosmetic.owned = true;
  state.activeAccessory = cosmetic.key;
  applyCosmeticTheme();
  showGameToast(-cosmetic.cost, `${cosmetic.name} Accessoire`);
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
      : `${cosmetic.desc} - Kosten: ${format(cosmetic.cost)}`;

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
      button.disabled = state.cookies < cosmetic.cost;
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
  if (!cosmeticsPreviewCookie || !cosmeticsPreviewAccessory) {
    return;
  }
  const activeColor = activeColorCosmetic();
  const activeAccessory = activeAccessoryCosmetic();

  Object.entries(activeColor.theme).forEach(([key, value]) => {
    cosmeticsPreviewCookie.style.setProperty(key, value);
  });
  cosmeticsPreviewAccessory.className = `cookie-accessory accessory-${activeAccessory.key || "none"}`;

  if (cosmeticsPreviewName) {
    cosmeticsPreviewName.textContent = `${activeColor.name} + ${activeAccessory.name}`;
  }
  if (cosmeticsPreviewMeta) {
    cosmeticsPreviewMeta.textContent = `Farbe: ${activeColor.name} | Hut: ${activeAccessory.name}`;
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
  setDisplayValue(cookieCountEl, state.cookies);
  setDisplayValue(perClickEl, state.perClick);
  setDisplayValue(totalEl, state.total);
  setDisplayValue(clickCountEl, state.clicks);
  setDisplayValue(rateEl, state.cps, " / sek");
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
    if (open) open.disabled = !unlocked;
    if (buy) {
      buy.disabled = unlocked || state.cookies < gameUnlocks[key].price;
      buy.textContent = unlocked
        ? "Freigeschaltet"
        : `Freischalten (${format(gameUnlocks[key].price)})`;
    }
  });
}

function buyGame(key, label) {
  const entry = gameUnlocks[key];
  if (entry.unlocked) return;
  if (state.cookies < entry.price) {
    showGameToast(-entry.price, label);
    return;
  }
  state.cookies -= entry.price;
  entry.unlocked = true;
  showGameToast(-entry.price, `${label} freigeschaltet`);
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
  resetModal.classList.remove("hidden");
  resetModal.setAttribute("aria-hidden", "false");
}

function closeResetModal() {
  resetModal.classList.add("hidden");
  resetModal.setAttribute("aria-hidden", "true");
}

function resetAccount() {
  state.cookies = 0;
  state.total = 0;
  state.clicks = 0;
  state.perClick = 1;
  state.cps = 0;
  state.activeColor = "classic";
  state.activeAccessory = "none";
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
  if (!gameUnlocks.tower.unlocked) {
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
  if (!gameUnlocks.blackjack.unlocked) {
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
  if (!gameUnlocks.slots.unlocked) {
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
  if (!gameUnlocks.roulette.unlocked) {
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
  if (!gameUnlocks.wheel.unlocked) {
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
  if (state.cookies < cost) {
    return;
  }

  state.cookies -= cost;
  upgrade.count += 1;

  if (upgrade.type === "click") {
    state.perClick += upgrade.power;
  } else {
    state.cps += upgrade.power;
  }

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
  const bonusAmount = 50 + Math.floor(state.perClick * 2);
  state.cookies += bonusAmount;
  state.total += bonusAmount;
  state.bonusReady = false;
  bonusPanel.classList.add("hidden");
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
  blackjackDealButton.disabled = blackjackActive || state.cookies < (Number(blackjackBetInput.value) || 0);
  blackjackHitButton.disabled = !blackjackActive;
  blackjackStandButton.disabled = !blackjackActive;
}

function endBlackjack(result) {
  blackjackActive = false;
  const payout = Math.floor(blackjackBet * result);
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
  if (bet <= 0 || bet > state.cookies) {
    blackjackStatus.textContent = "Nicht genug Kekse fuer diesen Einsatz.";
    return;
  }
  state.cookies -= bet;
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
  slotsSpinButton.disabled = slotsSpinning || state.cookies < betValue;
}

function spinSlots() {
  if (slotsSpinning) return;
  const bet = Math.floor(Number(slotsBetInput.value) || 0);
  if (bet <= 0 || bet > state.cookies) {
    slotsStatus.textContent = "Nicht genug Kekse fuer diesen Einsatz.";
    return;
  }
  state.cookies -= bet;
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
    const payout = Math.floor(bet * totalMultiplier);
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

function renderRoulette() {
  const betValue = Number(rouletteBetInput.value) || 0;
  rouletteSpinButton.disabled = rouletteSpinning || betValue <= 0 || state.cookies < betValue;
  rouletteChips.forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.bet === rouletteBetChoice);
  });
  rouletteNumberInput.disabled = rouletteBetChoice !== "number";
}

function spinRoulette() {
  if (rouletteSpinning) return;
  const bet = Math.floor(Number(rouletteBetInput.value) || 0);
  if (bet <= 0 || bet > state.cookies) {
    rouletteStatus.textContent = "Nicht genug Kekse fuer diesen Einsatz.";
    return;
  }
  state.cookies -= bet;
  rouletteSpinning = true;
  rouletteStatus.textContent = "Rad dreht...";

  const index = Math.floor(Math.random() * rouletteOrder.length);
  const number = rouletteOrder[index];
  const color = rouletteColor(number);
  const anglePer = 360 / rouletteOrder.length;
  const targetAngle = index * anglePer + anglePer / 2;
  rouletteRotation += 360 * 6 + (360 - targetAngle);
  rouletteWheel.style.transform = `rotate(${rouletteRotation}deg)`;

  setTimeout(() => {
    rouletteSpinning = false;
    let payout = 0;
    if (rouletteBetChoice === "number") {
      payout = number === rouletteBetNumber ? bet * 36 : 0;
    } else if (rouletteBetChoice === color) {
      payout = bet * (color === "green" ? 10 : 2);
    }
    if (payout > 0) {
      state.cookies += payout;
      state.total += payout;
      const winLabel = rouletteBetChoice === "number"
        ? `Zahl ${number}`
        : `${number} (${color})`;
      const multiplier = rouletteBetChoice === "number" ? 36 : (color === "green" ? 10 : 2);
      rouletteStatus.textContent = `Gewonnen! ${winLabel}. Auszahlung x${multiplier}.`;
    } else {
      rouletteStatus.textContent = `Verloren. Ergebnis: ${number} (${color}).`;
    }
    recordGameResult("roulette", bet, payout);
    showGameToast(payout - bet, "Roulette");
    updateStats();
  }, 2400);
  updateStats();
}

function renderWheel() {
  const betValue = Number(wheelBetInput.value) || 0;
  wheelSpinButton.disabled = wheelSpinning || betValue <= 0 || state.cookies < betValue;
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
  if (bet <= 0 || bet > state.cookies) {
    wheelStatus.textContent = "Nicht genug Kekse fuer diesen Einsatz.";
    return;
  }
  state.cookies -= bet;
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
    const payout = Math.floor(bet * segment.multiplier);
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
  const payout = Math.floor(state.towerBet * state.towerMultiplier);
  towerMultiplierEl.textContent = `x${state.towerMultiplier}`;
  setDisplayValue(towerPayoutEl, payout);

  const canStart = !state.towerActive && state.cookies >= (Number(towerBetInput.value) || 0);
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
  if (bet <= 0 || bet > state.cookies) {
    towerStatus.textContent = "Nicht genug Kekse fuer diesen Einsatz.";
    return;
  }
  towerVisual.classList.remove("tower-crash");
  state.cookies -= bet;
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
  const payout = Math.floor(state.towerBet * state.towerMultiplier);
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
rouletteNumberInput.addEventListener("input", () => {
  const value = Math.floor(Number(rouletteNumberInput.value) || 0);
  rouletteBetNumber = Math.min(36, Math.max(0, value));
  rouletteNumberInput.value = rouletteBetNumber;
});
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
wheelBetInput.addEventListener("input", renderWheel);
wheelBuyButton.addEventListener("click", () => buyGame("wheel", "Gluecksrad"));
upgradeTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activeUpgradeTab = tab.dataset.upgradeTab || "click";
    renderUpgrades();
  });
});
resetOpenButton.addEventListener("click", openResetModal);
resetCloseButton.addEventListener("click", closeResetModal);
resetCloseOverlay.addEventListener("click", closeResetModal);
resetCancelButton.addEventListener("click", closeResetModal);
resetConfirmButton.addEventListener("click", resetAccount);

setInterval(tick, 1000);
loadState();
updateStats();


