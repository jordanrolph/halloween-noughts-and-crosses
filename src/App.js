import { useState, useEffect } from "react";
import findWinner from "./utils/findWinner";

import styles from "./App.module.css";

const players = {
  x: { symbol: "X", id: "x" },
  o: { symbol: "O", id: "o" },
};
const swapPlayer = (currentPlayer) =>
  currentPlayer === players.x.id ? players.o.id : players.x.id;
const isDraw = (squares) => squares.every((square) => square.value !== null);

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

const Board = ({ squares, handleSquareClick }) => {
  return (
    <div className={styles.board}>
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

const AnnounceWinner = ({ winner }) => {
  return <h1>{winner} won!</h1>;
};

const AnnounceDraw = () => {
  return <h1>It's a draw!</h1>;
};

const RestartButton = ({ handleRestart }) => {
  return <button onClick={handleRestart}>Restart Game</button>;
};

const generateEmptyBoard = () => {
  return [...Array(3 * 3)].map((k, i) => ({ index: i, value: null }));
};

function App() {
  const [squares, setSquares] = useState(generateEmptyBoard());
  const [currentPlayer, setCurrentPlayer] = useState(players.x.id);
  const [winner, setWinner] = useState(null);
  const [draw, setDraw] = useState(false);

  const handleRestart = () => {
    setCurrentPlayer(players.x.id);
    setSquares(generateEmptyBoard());
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
    const winner = findWinner(squares, 3);
    if (winner) {
      setWinner(winner);
    } else if (isDraw(squares)) {
      setDraw(true);
    } else {
      setCurrentPlayer((p) => swapPlayer(p));
    }
  }, [squares]);

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
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
