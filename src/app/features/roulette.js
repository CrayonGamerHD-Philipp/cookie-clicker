export const rouletteOrder = [
  0, 32, 15, 19, 4, 21, 2, 25, 17, 34,
  6, 27, 13, 36, 11, 30, 8, 23, 10, 5,
  24, 16, 33, 1, 20, 14, 31, 9, 22, 18,
  29, 7, 28, 12, 35, 3, 26
];

export const rouletteRedNumbers = new Set([1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]);

export const rouletteTableRows = Array.from({ length: 12 }, (_, index) => {
  const high = (index + 1) * 3;
  return [high, high - 1, high - 2];
});

export function rouletteColor(number) {
  if (number === 0) return "green";
  return rouletteRedNumbers.has(number) ? "red" : "black";
}

export function rouletteColorLabel(color) {
  if (color === "green") return "Gruen";
  if (color === "red") return "Rot";
  return "Schwarz";
}

export function roulettePayoutMultiplier(choice) {
  if (choice === "number") return 36;
  if (choice.startsWith("dozen")) return 3;
  return 2;
}

export function rouletteBetLabel(choice, selectedNumber) {
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
      return `Zahl ${selectedNumber}`;
    default:
      return "Unbekannt";
  }
}

export function isWinningRouletteBet(choice, number, selectedNumber) {
  switch (choice) {
    case "number":
      return number === selectedNumber;
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

export function getRouletteSpinDelta(currentRotation, index) {
  const anglePer = 360 / rouletteOrder.length;
  const targetAngle = index * anglePer + anglePer / 2;
  const normalizedRotation = ((currentRotation % 360) + 360) % 360;
  const targetRotation = (360 - targetAngle + 360) % 360;
  return (targetRotation - normalizedRotation + 360) % 360;
}
