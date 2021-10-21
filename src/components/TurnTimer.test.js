import { render, screen } from "@testing-library/react";
import TurnTimer from "./TurnTimer";
import { maxSecondsPerTurn } from "../constants";

const props = {
  currentPlayer: "x",
  setCurrentPlayer: jest.fn(),
};

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

test("shows the correct number seconds remaining on mount", async () => {
  render(<TurnTimer {...props} />);

  expect(
    screen.getByText(
      `You've got ${maxSecondsPerTurn} seconds left to make your move`
    )
  ).toBeInTheDocument();
});
