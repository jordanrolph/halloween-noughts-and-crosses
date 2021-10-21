const TurnIndicator = ({ name, symbol }) => {
  return (
    <div>
      <h1>{symbol}</h1>
      <p>{name}, it's your turn</p>
    </div>
  );
};

export default TurnIndicator;
