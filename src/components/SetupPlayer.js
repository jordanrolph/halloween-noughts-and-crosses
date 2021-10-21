import { useState } from "react";

const SetupPlayer = ({ player, handleSetupPlayer }) => {
  const [name, setName] = useState(player.name);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSetupPlayer({ id: player.id, name });
      }}
    >
      <label htmlFor="name">
        Player {player.symbol}, what do you want to be called?
      </label>
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
