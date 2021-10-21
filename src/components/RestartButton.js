const RestartButton = ({ handleRestart }) => {
  return (
    <div>
      <button onClick={handleRestart}>Restart Game</button>
    </div>
  );
};

export default RestartButton;
