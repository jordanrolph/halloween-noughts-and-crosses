const minBoardSize = 3;
const maxBoardSize = 99;
const maxSecondsPerTurn = 30;
const initialPlayers = {
  x: { symbol: "X", id: "x", isSetup: false, name: "Player X" },
  o: { symbol: "O", id: "o", isSetup: false, name: "Player O" },
};

export { minBoardSize, maxBoardSize, maxSecondsPerTurn, initialPlayers };
