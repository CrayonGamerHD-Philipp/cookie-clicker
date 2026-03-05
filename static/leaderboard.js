const GAME_KEY = "hethey-cookie-clicker-v1";
const PLAYER_NAME_KEY = "hethey-player-name";
const REFRESH_INTERVAL_MS = 12_000;

const nameInput = document.getElementById("leaderboardName");
const saveButton = document.getElementById("leaderboardSave");
const statusEl = document.getElementById("leaderboardStatus");
const rowsEl = document.getElementById("leaderboardRows");
const rangeButtons = Array.from(document.querySelectorAll(".leaderboard-range-button"));
let activeRange = "alltime";

function setStatus(message) {
  if (statusEl) {
    statusEl.textContent = message;
  }
}

function formatNumber(value) {
  return new Intl.NumberFormat("de-DE").format(Math.floor(Number(value) || 0));
}

function formatCompactNumber(value) {
  const num = Math.floor(Number(value) || 0);
  const abs = Math.abs(num);
  if (abs < 1_000) {
    return formatNumber(num);
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
    return formatNumber(num);
  }

  const scaled = num / unit.value;
  const digits = abs >= unit.value * 100 ? 0 : abs >= unit.value * 10 ? 1 : 2;
  const short = scaled.toLocaleString("de-DE", {
    minimumFractionDigits: 0,
    maximumFractionDigits: digits
  });
  return `${short}${unit.suffix}`;
}

function safeLocalGet(key, fallback = "") {
  try {
    const value = localStorage.getItem(key);
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

function safeLocalSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Ignore storage failures.
  }
}

function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return parsed ?? fallback;
  } catch {
    return fallback;
  }
}

function loadGameState() {
  return readJson(GAME_KEY, {});
}

async function requestJson(path, options = {}) {
  try {
    const response = await fetch(path, {
      headers: {
        "Content-Type": "application/json"
      },
      ...options
    });
    const data = await response.json().catch(() => ({}));
    return {
      ok: response.ok,
      status: response.status,
      ...data
    };
  } catch {
    return { ok: false, status: 0 };
  }
}

function parseTotalGames(game) {
  const stats = game?.stats || {};
  const tower = stats?.tower || {};
  const blackjack = stats?.blackjack || {};
  const slots = stats?.slots || {};
  const roulette = stats?.roulette || {};
  const wheel = stats?.wheel || {};
  const lootbox = stats?.lootbox || {};
  const sumRounds =
    (Number(tower.wins) || 0) + (Number(tower.losses) || 0) +
    (Number(blackjack.wins) || 0) + (Number(blackjack.losses) || 0) +
    (Number(slots.wins) || 0) + (Number(slots.losses) || 0) +
    (Number(roulette.wins) || 0) + (Number(roulette.losses) || 0) +
    (Number(wheel.wins) || 0) + (Number(wheel.losses) || 0) +
    (Number(lootbox.opens) || 0);
  return Math.max(0, Math.floor(sumRounds));
}

function renderEntries(entries) {
  const ownName = (nameInput?.value || safeLocalGet(PLAYER_NAME_KEY, "") || "").trim();
  if (!entries.length) {
    rowsEl.innerHTML = '<tr><td colspan="6">Noch keine Eintraege vorhanden.</td></tr>';
    return;
  }

  rowsEl.innerHTML = entries
    .map((entry, index) => {
      const date = new Date(entry.updatedAt || Date.now());
      const isSelf = ownName && entry.playerName === ownName;
      return `<tr class="${isSelf ? "is-self" : ""}">
        <td>${index + 1}</td>
        <td>${entry.playerName}</td>
        <td>${formatNumber(entry.bestLevel)}</td>
        <td title="${formatNumber(entry.bestScore)}">${formatCompactNumber(entry.bestScore)}</td>
        <td title="${formatNumber(entry.totalClicks)}">${formatCompactNumber(entry.totalClicks)}</td>
        <td>${date.toLocaleString("de-DE")}</td>
      </tr>`;
    })
    .join("");
}

async function refreshLeaderboard() {
  const response = await requestJson(`/game/api/leaderboard?range=${encodeURIComponent(activeRange)}`, { method: "GET" });
  if (!response.ok || !Array.isArray(response.leaderboard)) {
    setStatus("Konnte globales Leaderboard nicht laden.");
    rowsEl.innerHTML = '<tr><td colspan="6">Fehler beim Laden der globalen Daten.</td></tr>';
    return;
  }
  const resolvedRange = typeof response.range === "string" ? response.range : activeRange;
  rangeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.range === resolvedRange);
  });
  renderEntries(response.leaderboard);
}

async function saveCurrentScore() {
  if (!nameInput) return;
  const name = (nameInput.value || "").trim();
  if (!name) {
    setStatus("Bitte erst einen Namen eintragen.");
    return;
  }

  const game = loadGameState();
  const level = Math.max(1, Math.floor(Number(game.level) || 1));
  const score = Math.floor(Number(game.total) || 0);
  const clicks = Math.floor(Number(game.clicks) || 0);
  const totalGames = parseTotalGames(game);

  const register = await requestJson("/game/api/player/register", {
    method: "POST",
    body: JSON.stringify({ playerName: name })
  });
  if (!register.ok) {
    setStatus("Name ungueltig oder Server nicht erreichbar.");
    return;
  }

  const submit = await requestJson("/game/api/leaderboard", {
    method: "POST",
    body: JSON.stringify({
      playerName: name,
      level,
      score,
      totalClicks: clicks,
      totalGames
    })
  });
  if (!submit.ok) {
    setStatus("Score konnte nicht gespeichert werden.");
    return;
  }

  setStatus(`Global gespeichert: ${name} mit ${formatNumber(score)} Punkten.`);
  await refreshLeaderboard();
}

(function init() {
  if (!rowsEl || !nameInput) {
    return;
  }
  rowsEl.innerHTML = '<tr><td colspan="6">Lade globales Leaderboard...</td></tr>';

  const lastName = safeLocalGet(PLAYER_NAME_KEY, "");
  if (lastName) {
    nameInput.value = lastName;
  }

  nameInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const trimmed = (nameInput.value || "").trim();
      if (trimmed) {
        safeLocalSet(PLAYER_NAME_KEY, trimmed);
        void saveCurrentScore();
      }
    }
  });

  nameInput.addEventListener("blur", () => {
    const trimmed = (nameInput.value || "").trim();
    if (trimmed) {
      safeLocalSet(PLAYER_NAME_KEY, trimmed);
    }
  });

  const game = loadGameState();
  const liveScore = Math.floor(Number(game.total) || 0);
  setStatus(`Aktueller Spielstand: ${formatNumber(liveScore)} Punkte. Lade globales Leaderboard...`);

  rangeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeRange = button.dataset.range || "alltime";
      rangeButtons.forEach((item) => item.classList.toggle("active", item === button));
      rowsEl.innerHTML = '<tr><td colspan="6">Lade globales Leaderboard...</td></tr>';
      void refreshLeaderboard();
    });
  });

  if (lastName) {
    void saveCurrentScore();
  }
  void refreshLeaderboard();
  window.setInterval(() => {
    void refreshLeaderboard();
  }, REFRESH_INTERVAL_MS);
})();
