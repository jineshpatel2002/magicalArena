import { MAX_DICE_VALUE } from "../constants/game.constant";
export const diceRoller = {
    roll: () => Math.floor(Math.random() * MAX_DICE_VALUE) + 1
  };
  