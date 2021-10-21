import { useState, useEffect } from "react";
import findWinner from "./utils/findWinner";

import styles from "./App.module.css";

const minBoardSize = 3;
const maxBoardSize = 99;

const players = {
  x: { symbol: "X", id: "x" },
  o: { symbol: "O", id: "o" },
};
const swapPlayer = (currentPlayer) =>
  currentPlayer === players.x.id ? players.o.id : players.x.id;
const isDraw = (squares) => {
  if (!squares) return false;
  squares.every((square) => square.value !== null);
};

const Square = ({ index, value, handleSquareClick }) => {
  return (
    <button
      className={styles.square}
      onClick={() => handleSquareClick({ index })}
      disabled={!!value}
    >
      {players[value]?.symbol}
    </button>
  );
};

const Board = ({ squares, handleSquareClick, boardSize }) => {
  return (
    <div
      className={styles.board}
      style={{
        gridTemplate: `repeat(${boardSize}, 1fr) / repeat(${boardSize}, 1fr)`,
      }}
    >
      {squares.map((square) => (
        <Square
          key={square.index}
          index={square.index}
          value={square.value}
          handleSquareClick={handleSquareClick}
        />
      ))}
    </div>
  );
};

const SetupBoard = ({ setBoardSize }) => {
  const [n, setN] = useState("");

  const handleSetBoardSize = (e) => {
    e.preventDefault();
    console.log(e);
    setBoardSize(Math.max(Math.min(n, maxBoardSize), minBoardSize));
  };
  return (
    <form onSubmit={handleSetBoardSize}>
      <label>How big do you want to go?</label>
      <input
        value={n}
        onChange={(e) => setN(parseInt(e.target.value))}
        required
        min={minBoardSize}
        max={maxBoardSize}
        type="number"
      />
      <button type="submit">Next</button>
    </form>
  );
};

const AnnounceWinner = ({ winner }) => {
  return <h1>{winner} won!</h1>;
};

const AnnounceDraw = () => {
  return <h1>It's a draw!</h1>;
};

const RestartButton = ({ handleRestart }) => {
  return <button onClick={handleRestart}>Restart Game</button>;
};

const generateEmptyBoard = (boardSize) => {
  return [...Array(boardSize * boardSize)].map((k, i) => ({
    index: i,
    value: null,
  }));
};

function App() {
  const [boardSize, setBoardSize] = useState(null);
  const [squares, setSquares] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(players.x.id);
  const [winner, setWinner] = useState(null);
  const [draw, setDraw] = useState(false);

  const handleRestart = () => {
    setBoardSize(null);
    setCurrentPlayer(players.x.id);
    setSquares(generateEmptyBoard(boardSize));
    setWinner(null);
    setDraw(null);
  };

  const handleSquareClick = ({ index }) => {
    if (!!squares[index].value) return null;

    const squaresCopy = [...squares];
    squaresCopy[index] = { index, value: players[currentPlayer].id };
    setSquares(squaresCopy);
  };

  useEffect(() => {
    setSquares(generateEmptyBoard(boardSize));
  }, [boardSize]);

  useEffect(() => {
    const winner = findWinner(squares, boardSize);
    if (winner) {
      setWinner(winner);
    } else if (isDraw(squares)) {
      setDraw(true);
    } else {
      setCurrentPlayer((p) => swapPlayer(p));
    }
  }, [squares, boardSize]);

  if (!boardSize) {
    return <SetupBoard setBoardSize={setBoardSize} />;
  }

  if (winner) {
    return (
      <div>
        <AnnounceWinner winner={winner} />
        <RestartButton handleRestart={handleRestart} />
      </div>
    );
  }

  if (draw) {
    return (
      <div>
        <AnnounceDraw />
        <RestartButton handleRestart={handleRestart} />
      </div>
    );
  }

  return (
    <div className={styles.app}>
      <Board
        squares={squares}
        handleSquareClick={handleSquareClick}
        boardSize={boardSize}
      />
    </div>
  );
}

export default App;
