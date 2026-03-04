export function createDeck() {
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

export function shuffleDeck(deck) {
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

export function handValue(hand) {
  let total = hand.reduce((sum, card) => sum + cardValue(card), 0);
  let aces = hand.filter((card) => card.rank === "A").length;
  while (total > 21 && aces > 0) {
    total -= 10;
    aces -= 1;
  }
  return total;
}

export function resolveDealerRound(dealerHand, playerHand, deck) {
  const nextDealerHand = [...dealerHand];
  while (handValue(nextDealerHand) < 17) {
    nextDealerHand.push(deck.pop());
  }
  const playerTotal = handValue(playerHand);
  const dealerTotal = handValue(nextDealerHand);

  if (playerTotal > 21) {
    return { dealerHand: nextDealerHand, result: 0, status: "Bust! Einsatz verloren." };
  }
  if (dealerTotal > 21 || playerTotal > dealerTotal) {
    return { dealerHand: nextDealerHand, result: 2, status: "Gewonnen! Auszahlung x2." };
  }
  if (dealerTotal === playerTotal) {
    return { dealerHand: nextDealerHand, result: 1, status: "Push. Einsatz zurueck." };
  }
  return { dealerHand: nextDealerHand, result: 0, status: "Dealer gewinnt." };
}
