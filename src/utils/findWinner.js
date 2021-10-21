// looks for all the possible wins and stops if it finds one.
export default function findWinner(squares, n) {
  if (!squares?.length || !n) return null;
  let winner = null;

  winner = findHorizontalWins(squares, n);

  if (!winner) {
    winner = findVerticalWins(squares, n);
  }

  if (!winner) {
    winner = findDiagonalTlBrWins(squares, n);
  }

  if (!winner) {
    winner = findDiagonalTrBlWins(squares, n);
  }
  return winner;
}

export function findHorizontalWins(squares, n) {
  // console.log("looking for horizontal wins");
  let winner = null;
  for (let add = 0; add < n; add++) {
    const window = [...Array(n)].map((slot, i) => squares[i + n * add]);
    winner = checkWindow(window, n);
    if (winner) {
      break;
    }
  }
  return winner;
}

export function findVerticalWins(squares, n) {
  // console.log("looking for vertical wins");
  let winner = null;
  for (let add = 0; add < n; add++) {
    const window = [...Array(n)].map((slot, i) => squares[i * n + add]);
    winner = checkWindow(window, n);
    if (winner) {
      break;
    }
  }
  return winner;
}

export function findDiagonalTlBrWins(squares, n) {
  // console.log("looking for diagonal tl-br wins"); // e.g. 0, 4, 8
  const window = [...Array(n)].map((slot, i) => squares[i * (n + 1)]);
  return checkWindow(window, n);
}

export function findDiagonalTrBlWins(squares, n) {
  // console.log("looking for diagonal tr-bl wins"); // e.g. 2, 4, 6
  const window = [...Array(n)].map((slot, i) => squares[n - 1 + i * (n - 1)]);
  return checkWindow(window, n);
}

// checks for a win within an array of squares of length n.
// stops checking immediately if a win is not possible.
export function checkWindow(window, n) {
  let x = 0;
  let o = 0;

  for (let i = 0; i < window.length; i++) {
    const square = window[i].value;

    if (square === null) {
      break;
    } else if (square === "x") {
      if (o > 0) break;
      x++;
    } else if (square === "o") {
      if (x > 0) break;
      o++;
    }

    if (x === n) return "x";
    if (o === n) return "o";
  }

  return null;
}
