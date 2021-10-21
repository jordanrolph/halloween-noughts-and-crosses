const RestartButton = ({ handleRestart }) => {
  return (
    <div data-testid="RestartButton">
      <button onClick={handleRestart}>Restart Game</button>
    </div>
  );
};

export default RestartButton;
