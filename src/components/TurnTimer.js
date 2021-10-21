import { useEffect, useState } from "react";
import { maxSecondsPerTurn } from "../constants";
import { swapPlayer } from "../utils";

const TurnTimer = ({ currentPlayer, setCurrentPlayer }) => {
  const [seconds, setSeconds] = useState(maxSecondsPerTurn);

  // Update the timer every second.
  useEffect(() => {
    const countdown = setInterval(() => {
      setSeconds((s) => s - 1);
    }, 1000);

    return () => clearInterval(countdown);
  }, [setSeconds]);

  // Reset the timer if a player makes their move.
  useEffect(() => {
    setSeconds(maxSecondsPerTurn);
  }, [currentPlayer]);

  // Swap the players if the timer hits zero.
  useEffect(() => {
    if (seconds === 0) {
      setCurrentPlayer((p) => swapPlayer(p));
      setSeconds(maxSecondsPerTurn);
    }
  }, [seconds, setCurrentPlayer]);
  return <p>You've got {seconds} seconds left to make your move</p>;
};

export default TurnTimer;
