import { render, screen, fireEvent } from "@testing-library/react";
import SetupBoard from "./SetupBoard";

const props = {
  setBoardSize: jest.fn(),
};

test("displays the form", async () => {
  render(<SetupBoard {...props} />);

  expect(screen.getByText(/How big should the board be?/i)).toBeInTheDocument();
  expect(
    screen.getByLabelText(/How big should the board be?/i)
  ).toBeInTheDocument();
  expect(screen.getByText(/Next/i)).toBeInTheDocument();
});

test("fires the function with correct args when the form is completed", async () => {
  render(<SetupBoard {...props} />);

  fireEvent.change(screen.getByLabelText(/How big should the board be?/i), {
    target: { value: "12" },
  });

  expect(screen.getByDisplayValue("12")).toBeInTheDocument();

  fireEvent.click(screen.getByText(/Next/i));

  expect(props.setBoardSize).toBeCalledWith(12);
});
