import { initialPlayers } from "../constants";

/**
 * Looks for all the possible wins and stops if it finds one.
 * @param {array} squares - a flat array representing the board.
 * @param {*} boardSize - the user's chosen board col/row count;
 * @returns null if no winner, else the winning player's id (e.g. "x").
 */
export default function findWinner(squares, boardSize) {
  if (!squares?.length || !boardSize) return null;
  let winner = null;

  winner = findHorizontalWins(squares, boardSize);

  if (!winner) {
    winner = findVerticalWins(squares, boardSize);
  }

  if (!winner) {
    winner = findDiagonalTlBrWins(squares, boardSize);
  }

  if (!winner) {
    winner = findDiagonalTrBlWins(squares, boardSize);
  }
  return winner;
}

export function findHorizontalWins(squares, boardSize) {
  // console.log("looking for horizontal wins");
  let winner = null;
  for (let add = 0; add < boardSize; add++) {
    const window = [...Array(boardSize)].map(
      (slot, i) => squares[i + boardSize * add]
    );
    winner = checkWindow(window, boardSize);
    if (winner) {
      break;
    }
  }
  return winner;
}

export function findVerticalWins(squares, boardSize) {
  // console.log("looking for vertical wins");
  let winner = null;
  for (let add = 0; add < boardSize; add++) {
    const window = [...Array(boardSize)].map(
      (slot, i) => squares[i * boardSize + add]
    );
    winner = checkWindow(window, boardSize);
    if (winner) {
      break;
    }
  }
  return winner;
}

export function findDiagonalTlBrWins(squares, boardSize) {
  // console.log("looking for diagonal tl-br wins"); // e.g. 0, 4, 8
  const window = [...Array(boardSize)].map(
    (slot, i) => squares[i * (boardSize + 1)]
  );
  return checkWindow(window, boardSize);
}

export function findDiagonalTrBlWins(squares, boardSize) {
  // console.log("looking for diagonal tr-bl wins"); // e.g. 2, 4, 6
  const window = [...Array(boardSize)].map(
    (slot, i) => squares[boardSize - 1 + i * (boardSize - 1)]
  );
  return checkWindow(window, boardSize);
}

/**
 * Checks for a win within an array of squares of length boardSize.
 * It stops checking immediately if a win is not possible.
 * @param {array} window - an array of board squares, of length boardSize
 * @param {*} boardSize - the user's chosen board col/row count;
 * @returns null if no winner, else the winning player's id (e.g. "x").
 */
export function checkWindow(window, boardSize) {
  let x = 0;
  let o = 0;

  for (let i = 0; i < window.length; i++) {
    const square = window[i].value;

    if (square === null) {
      break;
    } else if (square === initialPlayers.x.id) {
      if (o > 0) break;
      x++;
    } else if (square === initialPlayers.o.id) {
      if (x > 0) break;
      o++;
    }

    if (x === boardSize) return initialPlayers.x.id;
    if (o === boardSize) return initialPlayers.o.id;
  }

  return null;
}
