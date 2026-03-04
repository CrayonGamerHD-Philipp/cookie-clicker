export const boostRarities = [
  { key: "common", label: "Gewoehnlich", icon: "B", multiplier: 1.25, durationMs: 5 * 60_000, durationLabel: "5 Min", weight: 50 },
  { key: "rare", label: "Selten", icon: "S", multiplier: 1.5, durationMs: 10 * 60_000, durationLabel: "10 Min", weight: 28 },
  { key: "epic", label: "Episch", icon: "E", multiplier: 2, durationMs: 20 * 60_000, durationLabel: "20 Min", weight: 16 },
  { key: "legendary", label: "Legendaer", icon: "L", multiplier: 5, durationMs: 30 * 60_000, durationLabel: "30 Min", weight: 6 }
];

export function pickBoostRarity() {
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

export function pickLootboxBoostReward() {
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
  return { rarity, quantity };
}

export function pickLootboxCookieReward(isProfit, randomFrom) {
  if (isProfit) {
    return randomFrom([
      5_000_000, 5_000_000, 5_000_000, 5_000_000,
      5_500_000, 5_500_000,
      6_000_000, 6_000_000, 6_000_000,
      6_500_000, 6_500_000,
      7_000_000, 7_000_000, 7_000_000,
      7_500_000,
      8_000_000, 8_000_000,
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
