import { swapPlayer } from ".";

describe("swapPlayer", () => {
  const examples = [
    ["x", "o"],
    ["o", "x"],
  ];

  test.each(examples)(
    "given %p as an argument, returns %p",
    (arg0, expectedResult) => {
      const result = swapPlayer(arg0);

      expect(result).toEqual(expectedResult);
    }
  );
});
