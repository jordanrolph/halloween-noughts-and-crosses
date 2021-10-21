import Square from "./Square";

import styles from "./Board.module.css";

const Board = ({ squares, handleSquareClick, boardSize }) => {
  return (
    <div data-testid="Board" className={styles.container}>
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
    </div>
  );
};

export default Board;
