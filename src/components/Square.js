import { initialPlayers } from "../constants";
import styles from "./Square.module.css";

const Square = ({ index, value, handleSquareClick }) => {
  return (
    <button
      className={styles.square}
      onClick={() => handleSquareClick({ index })}
      disabled={!!value}
    >
      {initialPlayers[value]?.symbol}
    </button>
  );
};

export default Square;
