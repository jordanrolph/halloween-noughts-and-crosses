import { render, screen } from "@testing-library/react";
import { initialPlayers } from "../constants";
import { generateEmptyBoard } from "../utils";
import Game from "./Game";

const props = {
  boardSize: 3,
  setBoardSize: jest.fn(),
  players: initialPlayers,
  handleSetupPlayer: jest.fn(),
  winner: null,
  handleRestart: jest.fn(),
  currentPlayer: initialPlayers.x.id,
  setCurrentPlayer: jest.fn(),
  draw: false,
  squares: generateEmptyBoard(3),
  handleSquareClick: jest.fn(),
};

test("renders SetupBoard component if boardSize is missing", async () => {
  const newProps = { ...props, boardSize: null };
  render(<Game {...newProps} />);

  expect(screen.getByTestId("SetupBoard")).toBeInTheDocument();
});

test("renders SetupPlayer component if x is not setup", async () => {
  const newProps = {
    ...props,
    players: { ...initialPlayers, x: { ...initialPlayers.x, isSetup: false } },
  };
  render(<Game {...newProps} />);

  expect(screen.getByTestId("SetupPlayer")).toBeInTheDocument();
  expect(
    screen.getByPlaceholderText(initialPlayers.x.name)
  ).toBeInTheDocument();
});

test("renders SetupPlayer component if o is not setup", async () => {
  const newProps = {
    ...props,
    players: {
      ...initialPlayers,
      x: { ...initialPlayers.x, isSetup: true },
      o: { ...initialPlayers.o, isSetup: false },
    },
  };
  render(<Game {...newProps} />);

  expect(screen.getByTestId("SetupPlayer")).toBeInTheDocument();
  expect(
    screen.getByPlaceholderText(initialPlayers.o.name)
  ).toBeInTheDocument();
});

test("renders AnnounceWinner if a player has won", async () => {
  const newProps = {
    ...props,
    players: {
      ...initialPlayers,
      x: { ...initialPlayers.x, isSetup: true },
      o: { ...initialPlayers.o, isSetup: true },
    },
    winner: "x",
  };
  render(<Game {...newProps} />);

  expect(screen.getByTestId("AnnounceWinner")).toBeInTheDocument();
  expect(screen.getByText(initialPlayers.x.symbol)).toBeInTheDocument();
});

test("renders AnnounceDraw is the game is a draw", async () => {
  const newProps = {
    ...props,
    players: {
      ...initialPlayers,
      x: { ...initialPlayers.x, isSetup: true },
      o: { ...initialPlayers.o, isSetup: true },
    },
    draw: true,
  };
  render(<Game {...newProps} />);

  expect(screen.getByTestId("AnnounceDraw")).toBeInTheDocument();
});

test("renders the Board and turn components if the game is ongoing", async () => {
  const newProps = {
    ...props,
    players: {
      ...initialPlayers,
      x: { ...initialPlayers.x, isSetup: true },
      o: { ...initialPlayers.o, isSetup: true },
    },
  };
  render(<Game {...newProps} />);

  expect(screen.getByTestId("Board")).toBeInTheDocument();
  expect(screen.getByTestId("TurnIndicator")).toBeInTheDocument();
  expect(screen.getByTestId("TurnTimer")).toBeInTheDocument();
});
