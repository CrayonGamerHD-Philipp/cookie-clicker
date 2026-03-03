const cookieCountEl = document.getElementById("cookieCount");
const perClickEl = document.getElementById("perClick");
const totalEl = document.getElementById("total");
const rateEl = document.getElementById("rate");
const cookieButton = document.getElementById("cookieButton");
const upgradeList = document.getElementById("upgradeList");
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

const state = {
  cookies: 0,
  total: 0,
  perClick: 1,
  cps: 0,
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
  { key: "CHERRY", icon: "🍒", weight: 30, multiplier: 2 },
  { key: "LEMON", icon: "🍋", weight: 26, multiplier: 1.5 },
  { key: "COOKIE", icon: "🍪", weight: 16, multiplier: 6 },
  { key: "STAR", icon: "⭐", weight: 14, multiplier: 4 },
  { key: "BELL", icon: "🔔", weight: 14, multiplier: 3 }
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

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return;
    }
    const saved = JSON.parse(raw);
    state.cookies = Number(saved.cookies) || 0;
    state.total = Number(saved.total) || 0;
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
  } catch (error) {
    applyUpgradeCounts([]);
  }
}

function saveState() {
  const payload = {
    cookies: state.cookies,
    total: state.total,
    lastBonusAt: state.lastBonusAt,
    upgrades: upgrades.map((upgrade) => upgrade.count),
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
  return Math.floor(num).toLocaleString("de-DE");
}

function costFor(upgrade) {
  return Math.floor(upgrade.baseCost * Math.pow(1.15, upgrade.count));
}

function renderUpgrades() {
  upgradeList.innerHTML = "";
  upgrades.forEach((upgrade, index) => {
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

function updateStats() {
  cookieCountEl.textContent = format(state.cookies);
  perClickEl.textContent = format(state.perClick);
  totalEl.textContent = format(state.total);
  rateEl.textContent = `${format(state.cps)} / sek`;
  renderUpgrades();
  renderUnlocks();
  renderTower();
  renderBlackjack();
  renderSlots();
  renderWheel();
  renderRoulette();
  renderGameStats();
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

function clickCookie() {
  state.cookies += state.perClick;
  state.total += state.perClick;
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
  towerPayoutEl.textContent = format(payout);

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
resetOpenButton.addEventListener("click", openResetModal);
resetCloseButton.addEventListener("click", closeResetModal);
resetCloseOverlay.addEventListener("click", closeResetModal);
resetCancelButton.addEventListener("click", closeResetModal);
resetConfirmButton.addEventListener("click", resetAccount);

setInterval(tick, 1000);
loadState();
updateStats();
