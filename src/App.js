import { useState } from "react";
import styles from "./App.module.css";

const Square = ({ index, value, handleSquareClick }) => {
  return (
    <button
      className={styles.square}
      onClick={() => handleSquareClick({ index, value: "X" })}
      disabled={!!value}
    >
      {value}
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

const generateEmptyBoard = () => {
  return [...Array(3 * 3)].map((k, i) => ({ index: i, value: null }));
};

function App() {
  const [squares, setSquares] = useState(generateEmptyBoard());
  const handleSquareClick = ({ index, value }) => {
    const squaresCopy = [...squares];
    squaresCopy[index] = { index, value };
    return setSquares(squaresCopy);
  };

  return (
    <div className={styles.app}>
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
