import { render, screen, fireEvent } from "@testing-library/react";
import RestartButton from "./RestartButton";

const props = {
  handleRestart: jest.fn(),
};

test("fires the restart function when clicked", async () => {
  render(<RestartButton {...props} />);

  fireEvent.click(screen.getByText(/Restart Game/i));

  expect(props.handleRestart).toBeCalled();
});
