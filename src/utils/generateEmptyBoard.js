/**
 * Generates an array of arbitrary length to represent a board of squares.
 * @param {number} boardSize - the desired board's length and width.
 * @returns a single flat array e.g. [{index: 0, value: null}, {index: 0, value: null}, ...]
 */
export default function generateEmptyBoard(boardSize) {
  if (!boardSize) return [];

  return [...Array(boardSize * boardSize)].map((k, i) => ({
    index: i,
    value: null,
  }));
}
