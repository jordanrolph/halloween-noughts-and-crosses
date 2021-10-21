const AnnounceWinner = ({ symbol, winner }) => {
  return (
    <>
      <h1>{symbol}</h1>
      <h1>{winner} won!</h1>
    </>
  );
};

export default AnnounceWinner;
