/**
 * Evaluates if the game board is full. This approximation indicates a
 * draw provided it is called after a nullish `findWinner` return.
 * @param {array} squares - a flat array representing the board.
 * @returns - boolean. true if the game is a draw.
 */
export default function isDraw(squares) {
  if (!squares?.length) return false;
  return squares.every((square) => square.value !== null);
}
