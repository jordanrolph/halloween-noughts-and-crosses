import { initialPlayers } from "../constants";
import styles from "./Square.module.css";

const Square = ({ index, value, handleSquareClick }) => {
  return (
    <button
      className={styles.square}
      onClick={() => handleSquareClick({ index })}
      disabled={!!value}
    >
      <h1>{initialPlayers[value]?.symbol}</h1>
    </button>
  );
};

export default Square;
