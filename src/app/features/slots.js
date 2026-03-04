export const slotSymbols = [
  { key: "CHERRY", icon: "\u{1F352}", weight: 30, multiplier: 2 },
  { key: "LEMON", icon: "\u{1F34B}", weight: 26, multiplier: 1.5 },
  { key: "COOKIE", icon: "\u{1F36A}", weight: 16, multiplier: 6 },
  { key: "STAR", icon: "\u{2B50}", weight: 14, multiplier: 4 },
  { key: "BELL", icon: "\u{1F514}", weight: 14, multiplier: 3 }
];

const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

export function pickSlotSymbol() {
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

export function evaluateSlotMultiplier(finalSymbols) {
  let totalMultiplier = 0;
  winningLines.forEach((line) => {
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
  return totalMultiplier;
}
