export const wheelSegments = [
  { label: "x2", multiplier: 2, weight: 36 },
  { label: "x50", multiplier: 50, weight: 6 },
  { label: "x100", multiplier: 100, weight: 3 },
  { label: "x0.5", multiplier: 0.5, weight: 28 },
  { label: "Niete", multiplier: 0, weight: 27 }
];

export function pickWheelIndex() {
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

export function normalizeRotation(angle) {
  return ((angle % 360) + 360) % 360;
}
