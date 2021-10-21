import { render, screen } from "@testing-library/react";
import { generateEmptyBoard } from "../utils";
import Board from "./Board";

const props = {
  squares: generateEmptyBoard(3),
  handleSquareClick: jest.fn(),
  boardSize: 3,
};

test("displays the expected number of squares", async () => {
  render(<Board {...props} />);

  expect(screen.getByTestId("Square-0")).toBeInTheDocument();
  expect(screen.getByTestId("Square-1")).toBeInTheDocument();
  expect(screen.getByTestId("Square-2")).toBeInTheDocument();
  expect(screen.getByTestId("Square-3")).toBeInTheDocument();
  expect(screen.getByTestId("Square-4")).toBeInTheDocument();
  expect(screen.getByTestId("Square-5")).toBeInTheDocument();
  expect(screen.getByTestId("Square-6")).toBeInTheDocument();
  expect(screen.getByTestId("Square-7")).toBeInTheDocument();
  expect(screen.getByTestId("Square-8")).toBeInTheDocument();
});
