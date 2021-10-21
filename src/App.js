import { useState, useEffect } from "react";
import Game from "./components/Game";
import { findWinner, isDraw, swapPlayer, generateEmptyBoard } from "./utils";
import { initialPlayers } from "./constants";

import styles from "./App.module.css";

function App() {
  const [boardSize, setBoardSize] = useState(null);
  const [players, setPlayers] = useState(initialPlayers);
  const [squares, setSquares] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(players.x.id);
  const [winner, setWinner] = useState(null);
  const [draw, setDraw] = useState(false);

  const handleRestart = () => {
    setBoardSize(null);
    setPlayers(initialPlayers);
    setCurrentPlayer(initialPlayers.x.id);
    setSquares(generateEmptyBoard(boardSize));
    setWinner(null);
    setDraw(null);
  };

  // Updates the state with a player chosen name.
  const handleSetupPlayer = ({ id, name }) => {
    setPlayers({
      ...players,
      [id]: { ...players[id], name, isSetup: true },
    });
  };

  // Updates the board's squares state when a player makes a move.
  const handleSquareClick = ({ index }) => {
    if (!!squares[index].value) return null;

    const squaresCopy = [...squares];
    squaresCopy[index] = { index, value: players[currentPlayer].id };
    setSquares(squaresCopy);
  };

  // Generate the board once the size is decided.
  useEffect(() => {
    setSquares(generateEmptyBoard(boardSize));
  }, [boardSize]);

  // Re-evaluate the board after every move.
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

  return (
    <div className={styles.app}>
      <Game
        boardSize={boardSize}
        setBoardSize={setBoardSize}
        players={players}
        handleSetupPlayer={handleSetupPlayer}
        winner={winner}
        handleRestart={handleRestart}
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        draw={draw}
        squares={squares}
        handleSquareClick={handleSquareClick}
      />
    </div>
  );
}

export default App;
