import { generateEmptyBoard } from ".";

const board = {
  3: [
    { index: 0, value: null },
    { index: 1, value: null },
    { index: 2, value: null },
    { index: 3, value: null },
    { index: 4, value: null },
    { index: 5, value: null },
    { index: 6, value: null },
    { index: 7, value: null },
    { index: 8, value: null },
  ],
  4: [
    { index: 0, value: null },
    { index: 1, value: null },
    { index: 2, value: null },
    { index: 3, value: null },
    { index: 4, value: null },
    { index: 5, value: null },
    { index: 6, value: null },
    { index: 7, value: null },
    { index: 8, value: null },
    { index: 9, value: null },
    { index: 10, value: null },
    { index: 11, value: null },
    { index: 12, value: null },
    { index: 13, value: null },
    { index: 14, value: null },
    { index: 15, value: null },
  ],
};

describe("generateEmptyBoard", () => {
  const examples = [
    [3, board[3]],
    [4, board[4]],
  ];

  test.each(examples)(
    "given %p as an argument, returns %p",
    (arg0, expectedResult) => {
      const result = generateEmptyBoard(arg0);

      expect(result).toEqual(expectedResult);
    }
  );
});
