import { render, screen } from "@testing-library/react";
import TurnIndicator from "./TurnIndicator";

const props = {
  name: "Ghost",
  symbol: "👻",
};

test("renders the message", async () => {
  render(<TurnIndicator {...props} />);

  expect(screen.getByText("👻")).toBeInTheDocument();
  expect(screen.getByText(/Ghost/i)).toBeInTheDocument();
  expect(screen.getByText(/it's your turn/i)).toBeInTheDocument();
});
