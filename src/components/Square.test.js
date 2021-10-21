import { render, screen, fireEvent } from "@testing-library/react";
import { initialPlayers } from "../constants";
import Square from "./Square";

const props = {
  index: 20,
  value: null,
  handleSquareClick: jest.fn(),
};

test("renders with the correct id", async () => {
  render(<Square {...props} />);

  expect(screen.getByTestId(`Square-${props.index}`)).toBeInTheDocument();
});

test("displays the symbol when value is filled", async () => {
  const newProps = { ...props, value: "x" };
  render(<Square {...newProps} />);

  expect(screen.getByText(initialPlayers.x.symbol)).toBeInTheDocument();
});

test("fires the handler with the correct argument when empty and clicked", async () => {
  render(<Square {...props} />);

  fireEvent.click(screen.getByTestId(`Square-${props.index}`));

  expect(props.handleSquareClick).toHaveBeenCalledWith({ index: props.index });
});
