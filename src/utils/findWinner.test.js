import { generateEmptyBoard } from ".";
import {
  checkWindow,
  findDiagonalTlBrWins,
  findDiagonalTrBlWins,
  findHorizontalWins,
  findVerticalWins,
} from "./findWinner";

const horizontalWins = {
  3: [
    { index: 0, value: "x" },
    { index: 1, value: "x" },
    { index: 2, value: "x" },
    { index: 3, value: "o" },
    { index: 4, value: "o" },
    { index: 5, value: null },
    { index: 6, value: null },
    { index: 7, value: null },
    { index: 8, value: null },
  ],
  4: [
    { index: 0, value: "x" },
    { index: 1, value: "x" },
    { index: 2, value: "x" },
    { index: 3, value: "x" },
    { index: 4, value: "o" },
    { index: 5, value: null },
    { index: 6, value: null },
    { index: 7, value: null },
    { index: 8, value: null },
    { index: 9, value: null },
    { index: 10, value: null },
    { index: 11, value: "o" },
    { index: 12, value: null },
    { index: 13, value: null },
    { index: 14, value: null },
    { index: 15, value: null },
  ],
};

const verticalWins = {
  3: [
    { index: 0, value: null },
    { index: 1, value: null },
    { index: 2, value: "o" },
    { index: 3, value: null },
    { index: 4, value: null },
    { index: 5, value: "o" },
    { index: 6, value: null },
    { index: 7, value: null },
    { index: 8, value: "o" },
  ],
  4: [
    { index: 0, value: null },
    { index: 1, value: "x" },
    { index: 2, value: null },
    { index: 3, value: "o" },
    { index: 4, value: null },
    { index: 5, value: "x" },
    { index: 6, value: "o" },
    { index: 7, value: null },
    { index: 8, value: null },
    { index: 9, value: "x" },
    { index: 10, value: null },
    { index: 11, value: "o" },
    { index: 12, value: null },
    { index: 13, value: "x" },
    { index: 14, value: null },
    { index: 15, value: null },
  ],
};

const diagonalTlBrWins = {
  3: [
    { index: 0, value: "o" },
    { index: 1, value: null },
    { index: 2, value: null },
    { index: 3, value: null },
    { index: 4, value: "o" },
    { index: 5, value: null },
    { index: 6, value: null },
    { index: 7, value: null },
    { index: 8, value: "o" },
  ],
  4: [
    { index: 0, value: "x" },
    { index: 1, value: null },
    { index: 2, value: null },
    { index: 3, value: null },
    { index: 4, value: null },
    { index: 5, value: "x" },
    { index: 6, value: "o" },
    { index: 7, value: null },
    { index: 8, value: null },
    { index: 9, value: "o" },
    { index: 10, value: "x" },
    { index: 11, value: "o" },
    { index: 12, value: null },
    { index: 13, value: null },
    { index: 14, value: null },
    { index: 15, value: "x" },
  ],
};

const diagonalTrBlWins = {
  3: [
    { index: 0, value: null },
    { index: 1, value: null },
    { index: 2, value: "x" },
    { index: 3, value: null },
    { index: 4, value: "x" },
    { index: 5, value: null },
    { index: 6, value: "x" },
    { index: 7, value: null },
    { index: 8, value: "o" },
  ],
  4: [
    { index: 0, value: null },
    { index: 1, value: null },
    { index: 2, value: null },
    { index: 3, value: "o" },
    { index: 4, value: null },
    { index: 5, value: null },
    { index: 6, value: "o" },
    { index: 7, value: null },
    { index: 8, value: null },
    { index: 9, value: "o" },
    { index: 10, value: null },
    { index: 11, value: null },
    { index: 12, value: "o" },
    { index: 13, value: null },
    { index: 14, value: null },
    { index: 15, value: "x" },
  ],
};

describe("findHorizontalWins", () => {
  const examples = [
    [generateEmptyBoard(3), 3, null],
    [generateEmptyBoard(99), 99, null],
    [horizontalWins[3], 3, "x"],
    [horizontalWins[4], 4, "x"],
  ];

  test.each(examples)(
    "given %p and %p as arguments, returns %p",
    (arg0, arg1, expectedResult) => {
      const result = findHorizontalWins(arg0, arg1);

      expect(result).toEqual(expectedResult);
    }
  );
});

describe("findVerticalWins", () => {
  const examples = [
    [generateEmptyBoard(3), 3, null],
    [generateEmptyBoard(99), 99, null],
    [verticalWins[3], 3, "o"],
    [verticalWins[4], 4, "x"],
  ];

  test.each(examples)(
    "given %p and %p as arguments, returns %p",
    (arg0, arg1, expectedResult) => {
      const result = findVerticalWins(arg0, arg1);

      expect(result).toEqual(expectedResult);
    }
  );
});

describe("findDiagonalTlBrWins", () => {
  const examples = [
    [generateEmptyBoard(3), 3, null],
    [generateEmptyBoard(99), 99, null],
    [diagonalTlBrWins[3], 3, "o"],
    [diagonalTlBrWins[4], 4, "x"],
  ];

  test.each(examples)(
    "given %p and %p as arguments, returns %p",
    (arg0, arg1, expectedResult) => {
      const result = findDiagonalTlBrWins(arg0, arg1);

      expect(result).toEqual(expectedResult);
    }
  );
});

describe("findDiagonalTrBlWins", () => {
  const examples = [
    [generateEmptyBoard(3), 3, null],
    [generateEmptyBoard(99), 99, null],
    [diagonalTrBlWins[3], 3, "x"],
    [diagonalTrBlWins[4], 4, "o"],
  ];

  test.each(examples)(
    "given %p and %p as arguments, returns %p",
    (arg0, arg1, expectedResult) => {
      const result = findDiagonalTrBlWins(arg0, arg1);

      expect(result).toEqual(expectedResult);
    }
  );
});

const empty = { value: null };
const fillX = { value: "x" };
const fillO = { value: "o" };

describe("checkWindow", () => {
  const examples = [
    [[empty, empty, empty], 3, null],
    [[fillX, empty, empty], 3, null],
    [[fillX, fillO, empty], 3, null],
    [[fillX, fillO, fillX], 3, null],
    [[fillO, fillO, fillO], 3, "o"],
    [[fillX, fillX, fillX], 3, "x"],
    [[empty, empty, empty, empty], 4, null],
    [[fillX, fillX, fillX, fillX], 4, "x"],
  ];

  test.each(examples)(
    "given %p and %p as arguments, returns %p",
    (arg0, arg1, expectedResult) => {
      const result = checkWindow(arg0, arg1);

      expect(result).toEqual(expectedResult);
    }
  );
});
