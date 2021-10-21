import { render, screen } from "@testing-library/react";
import AnnounceDraw from "./AnnounceDraw";

const props = {};

test("displays the message", async () => {
  render(<AnnounceDraw {...props} />);

  expect(screen.getByText(/It's a draw/i)).toBeInTheDocument();
});
