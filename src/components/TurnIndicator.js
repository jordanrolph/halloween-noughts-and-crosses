const TurnIndicator = ({ name, symbol }) => {
  return (
    <div>
      <h1>{symbol}</h1>
      <label>{name}, it's your turn</label>
    </div>
  );
};

export default TurnIndicator;
