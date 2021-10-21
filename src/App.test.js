import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the board setup form on mount", () => {
  render(<App />);

  expect(screen.getByTestId("SetupBoard")).toBeInTheDocument();
});
