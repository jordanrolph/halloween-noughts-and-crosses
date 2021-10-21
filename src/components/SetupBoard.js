import { useState } from "react";
import { maxBoardSize, minBoardSize } from "../constants";

const SetupBoard = ({ setBoardSize }) => {
  const [n, setN] = useState("");

  const handleSetBoardSize = (e) => {
    e.preventDefault();
    setBoardSize(Math.max(Math.min(n, maxBoardSize), minBoardSize));
  };
  return (
    <form onSubmit={handleSetBoardSize}>
      <label htmlFor="boardSize">How big should the board be?</label>
      <br />
      <input
        id="boardSize"
        value={n}
        onChange={(e) => setN(parseInt(e.target.value) || "")}
        required
        min={minBoardSize}
        max={maxBoardSize}
        type="number"
        autoFocus
      />
      <button type="submit">Next</button>
      {n && (
        <p>
          {n} x {n}
        </p>
      )}
    </form>
  );
};

export default SetupBoard;
