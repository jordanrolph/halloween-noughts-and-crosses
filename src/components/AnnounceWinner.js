const AnnounceWinner = ({ symbol, name }) => {
  return (
    <div data-testid="AnnounceWinner">
      <h1>{symbol}</h1>
      <h1>{name} won!</h1>
    </div>
  );
};

export default AnnounceWinner;
