import SetupBoard from "./SetupBoard";
import SetupPlayer from "./SetupPlayer";
import RestartButton from "./RestartButton";
import AnnounceWinner from "./AnnounceWinner";
import AnnounceDraw from "./AnnounceDraw";
import TurnIndicator from "./TurnIndicator";
import TurnTimer from "./TurnTimer";
import Board from "./Board";

export default function Game({
  boardSize,
  setBoardSize,
  players,
  handleSetupPlayer,
  winner,
  handleRestart,
  currentPlayer,
  setCurrentPlayer,
  draw,
  squares,
  handleSquareClick,
}) {
  if (!boardSize) {
    return <SetupBoard setBoardSize={setBoardSize} />;
  }

  if (!players.x.isSetup) {
    return (
      <SetupPlayer
        key="x"
        player={players.x}
        handleSetupPlayer={handleSetupPlayer}
      />
    );
  }

  if (!players.o.isSetup) {
    return (
      <SetupPlayer
        key="o"
        player={players.o}
        handleSetupPlayer={handleSetupPlayer}
      />
    );
  }

  if (winner) {
    return (
      <>
        <AnnounceWinner winner={players[winner].name} />
        <RestartButton handleRestart={handleRestart} />
      </>
    );
  }

  if (draw) {
    return (
      <>
        <AnnounceDraw />
        <RestartButton handleRestart={handleRestart} />
      </>
    );
  }

  return (
    <>
      <TurnIndicator
        name={players[currentPlayer].name}
        symbol={players[currentPlayer].symbol}
      />
      <TurnTimer
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
      />
      <Board
        squares={squares}
        handleSquareClick={handleSquareClick}
        boardSize={boardSize}
      />
    </>
  );
}
