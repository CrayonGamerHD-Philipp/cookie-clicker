export type GameMode = "tower" | "blackjack" | "slots" | "roulette" | "wheel" | "lootbox";

export type ModeResult = {
  mode: GameMode;
  won: boolean;
  multiplier: number;
  label: string;
};

export const gameModes: Array<{ key: GameMode; title: string; description: string; minBet: number }> = [
  { key: "tower", title: "Tower", description: "Steige hoch oder crashe.", minBet: 100 },
  { key: "blackjack", title: "Blackjack", description: "Schlage den Dealer.", minBet: 200 },
  { key: "slots", title: "Slots", description: "Drei gleiche bringen Multiplikator.", minBet: 150 },
  { key: "roulette", title: "Roulette", description: "Setze auf Farbe oder Zahl.", minBet: 200 },
  { key: "wheel", title: "Gluecksrad", description: "High risk, high reward.", minBet: 150 },
  { key: "lootbox", title: "Lootbox", description: "Spezialbox mit schwankender Rendite.", minBet: 10_000_000 }
];

function randomChoice<T>(entries: readonly T[]): T {
  return entries[Math.floor(Math.random() * entries.length)];
}

export function simulateMode(mode: GameMode): ModeResult {
  switch (mode) {
    case "tower":
      return randomChoice([
        { mode, won: false, multiplier: 0, label: "Crash" },
        { mode, won: true, multiplier: 1.5, label: "x1.5" },
        { mode, won: true, multiplier: 2.2, label: "x2.2" },
        { mode, won: true, multiplier: 3, label: "x3" }
      ]);
    case "blackjack":
      return randomChoice([
        { mode, won: false, multiplier: 0, label: "Bust" },
        { mode, won: true, multiplier: 2, label: "Blackjack" },
        { mode, won: true, multiplier: 1, label: "Push" }
      ]);
    case "slots":
      return randomChoice([
        { mode, won: false, multiplier: 0, label: "Leer" },
        { mode, won: true, multiplier: 1.5, label: "2x Cookie-Linie" },
        { mode, won: true, multiplier: 3, label: "Bells" },
        { mode, won: true, multiplier: 6, label: "Cookie Jackpot" }
      ]);
    case "roulette":
      return randomChoice([
        { mode, won: false, multiplier: 0, label: "Daneben" },
        { mode, won: true, multiplier: 2, label: "Aussenwette" },
        { mode, won: true, multiplier: 3, label: "Dutzend" },
        { mode, won: true, multiplier: 36, label: "Volltreffer" }
      ]);
    case "wheel":
      return randomChoice([
        { mode, won: false, multiplier: 0, label: "Niete" },
        { mode, won: true, multiplier: 0.5, label: "x0.5" },
        { mode, won: true, multiplier: 2, label: "x2" },
        { mode, won: true, multiplier: 50, label: "x50" }
      ]);
    case "lootbox":
      return randomChoice([
        { mode, won: false, multiplier: 0.9, label: "Knapp drunter" },
        { mode, won: true, multiplier: 1.2, label: "Small Win" },
        { mode, won: true, multiplier: 1.6, label: "Boost Drop" },
        { mode, won: true, multiplier: 2.5, label: "Rare Pull" }
      ]);
    default:
      return { mode, won: false, multiplier: 0, label: "Niete" };
  }
}
