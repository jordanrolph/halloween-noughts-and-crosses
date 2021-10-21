import { render, screen, fireEvent } from "@testing-library/react";
import { initialPlayers } from "../constants";
import SetupPlayer from "./SetupPlayer";

const props = {
  player: initialPlayers.x,
  handleSetupPlayer: jest.fn(),
};

test("displays the form", async () => {
  render(<SetupPlayer {...props} />);

  expect(screen.getByText(initialPlayers.x.symbol)).toBeInTheDocument();
  expect(
    screen.getByLabelText(/What do you want to be called?/i)
  ).toBeInTheDocument();
  expect(screen.getByText(/Next/i)).toBeInTheDocument();
});

test("fires the function with correct args when the form is completed", async () => {
  render(<SetupPlayer {...props} />);

  fireEvent.change(screen.getByLabelText(/What do you want to be called?/i), {
    target: { value: "Ghost" },
  });

  expect(screen.getByDisplayValue("Ghost")).toBeInTheDocument();

  fireEvent.click(screen.getByText(/Next/i));

  expect(props.handleSetupPlayer).toBeCalledWith({
    id: "x",
    name: "Ghost",
  });
});
