import { isDraw } from ".";

const board = {
  empty: {
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
  },
  draw: {
    3: [
      { index: 0, value: "o" },
      { index: 1, value: "x" },
      { index: 2, value: "o" },
      { index: 3, value: "o" },
      { index: 4, value: "x" },
      { index: 5, value: "x" },
      { index: 6, value: "x" },
      { index: 7, value: "o" },
      { index: 8, value: "x" },
    ],
  },
};

describe("isDraw", () => {
  const examples = [
    [board.empty[3], false],
    [board.empty[4], false],
    [board.draw[3], true],
  ];

  test.each(examples)(
    "given %p as an argument, returns %p",
    (arg0, expectedResult) => {
      const result = isDraw(arg0);

      expect(result).toEqual(expectedResult);
    }
  );
});
