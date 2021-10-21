const minBoardSize = 3;
const maxBoardSize = 99;
const maxSecondsPerTurn = 30;
const initialPlayers = {
  x: { symbol: "☠️", id: "x", isSetup: false, name: "Skull & Crossbones" },
  o: { symbol: "🎃", id: "o", isSetup: false, name: "Pumpkin" },
};

export { minBoardSize, maxBoardSize, maxSecondsPerTurn, initialPlayers };
