import { initialPlayers } from "../constants";

/**
 * Swaps between the 2 player's ids.
 * @param {string} currentPlayer -the id of the current player.
 * @returns string - the id of the other player.
 */
export default function swapPlayer(currentPlayer) {
  return currentPlayer === initialPlayers.x.id
    ? initialPlayers.o.id
    : initialPlayers.x.id;
}
