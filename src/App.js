import { useState } from "react";
import styles from "./App.module.css";

const Square = ({ index, value }) => {
  return <button className={styles.square}>{value}</button>;
};

const Board = ({ squares }) => {
  return (
    <div className={styles.board}>
      {squares.map((square) => (
        <Square key={square.index} index={square.index} value={square.value} />
      ))}
    </div>
  );
};

const generateEmptyBoard = () => {
  return [...Array(3 * 3)].map((k, i) => ({ index: i, value: null }));
};

function App() {
  const [squares, setSquares] = useState(generateEmptyBoard());

  return (
    <div className={styles.app}>
      <Board squares={squares} />
    </div>
  );
}

export default App;
