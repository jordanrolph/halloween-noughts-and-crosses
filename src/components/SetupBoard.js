import { useState } from "react";
import { maxBoardSize, minBoardSize } from "../constants";

const SetupBoard = ({ setBoardSize }) => {
  const [n, setN] = useState(3);

  const handleSetBoardSize = (e) => {
    e.preventDefault();
    setBoardSize(
      Math.max(Math.min(parseInt(n) || "", maxBoardSize), minBoardSize)
    );
  };
  return (
    <form data-testid="SetupBoard" onSubmit={handleSetBoardSize}>
      <label htmlFor="boardSize">How big should the board be?</label>
      <input
        id="boardSize"
        value={n}
        onChange={(e) => setN(e.target.value)}
        required
        min={minBoardSize}
        max={maxBoardSize}
        type="number"
        autoFocus
      />
      <button type="submit">Next</button>
      {n && (
        <code>
          {n} x {n}
        </code>
      )}
    </form>
  );
};

export default SetupBoard;
