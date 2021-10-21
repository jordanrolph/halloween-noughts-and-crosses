import { useState } from "react";

const SetupPlayer = ({ player, handleSetupPlayer }) => {
  const [name, setName] = useState(player.name);

  return (
    <form
      data-testid="SetupPlayer"
      onSubmit={(e) => {
        e.preventDefault();
        handleSetupPlayer({ id: player.id, name });
      }}
    >
      <h1>{player.symbol}</h1>
      <label htmlFor="name">What do you want to be called?</label>
      <input
        id="name"
        value={name}
        placeholder={player.name}
        onChange={(e) => setName(e.target.value)}
        required
        autoFocus
      />
      <button type="submit">Next</button>
    </form>
  );
};

export default SetupPlayer;
