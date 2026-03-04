export const towerSteps = [0, 0.5, 1, 1.5, 2, 2.5, 3, 4];

export const towerChances = [0.78, 0.74, 0.7, 0.66, 0.62, 0.58, 0.55, 0.52];

export function currentTowerChance(step) {
  return towerChances[Math.min(step + 1, towerChances.length - 1)];
}

export function nextTowerStep(step) {
  return Math.min(step + 1, towerSteps.length - 1);
}

export function rollTowerClimb(step) {
  return Math.random() < currentTowerChance(step);
}
