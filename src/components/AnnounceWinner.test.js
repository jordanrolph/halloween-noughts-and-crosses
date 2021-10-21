import { render, screen } from "@testing-library/react";
import AnnounceWinner from "./AnnounceWinner";

const props = {
  name: "Ghost",
  symbol: "👻",
};

test("displays the winner's name", async () => {
  render(<AnnounceWinner {...props} />);

  expect(screen.getByText(/Ghost/i)).toBeInTheDocument();
});

test("displays the winner's symbol", async () => {
  render(<AnnounceWinner {...props} />);

  expect(screen.getByText(/👻/i)).toBeInTheDocument();
});
