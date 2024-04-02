import storeForBonus from "../../app/store/StoreaForBonus";

export const generateRandomActionBonus = () => {
  const randomAction = ["Paper", "Rock", "Cut", "Spock", "Lizard"];
  storeForBonus.setBotBonus(randomAction[Math.floor(Math.random() * 5)]);
};
export const checkResultBonus = () => {
  const { stateOfBotBonus, stateOfPlayerBonus } = storeForBonus;

  if (
    (stateOfBotBonus === "Cut" && stateOfPlayerBonus === "Paper") ||
    (stateOfBotBonus === "Paper" && stateOfPlayerBonus === "Rock") ||
    (stateOfBotBonus === "Rock" && stateOfPlayerBonus === "Lizard") ||
    (stateOfBotBonus === "Lizard" && stateOfPlayerBonus === "Spock") ||
    (stateOfBotBonus === "Spock" && stateOfPlayerBonus === "Cut") ||
    (stateOfBotBonus === "Cut" && stateOfPlayerBonus === "Lizard") ||
    (stateOfBotBonus === "Paper" && stateOfPlayerBonus === "Spock") ||
    (stateOfBotBonus === "Rock" && stateOfPlayerBonus === "Cut") ||
    (stateOfBotBonus === "Lizard" && stateOfPlayerBonus === "Paper") ||
    (stateOfBotBonus === "Spock" && stateOfPlayerBonus === "Rock") ||
    (stateOfBotBonus === "Spock" && stateOfPlayerBonus === "Cut")
  ) {
    storeForBonus.incrBonus();
    storeForBonus.setPlayerWinBonus();
  } else if (
    (stateOfBotBonus === "Paper" && stateOfPlayerBonus === "Cut") ||
    (stateOfBotBonus === "Rock" && stateOfPlayerBonus === "Paper") ||
    (stateOfBotBonus === "Cut" && stateOfPlayerBonus === "Spock") ||
    (stateOfBotBonus === "Spock" && stateOfPlayerBonus === "Lizard") ||
    (stateOfBotBonus === "Lizard" && stateOfPlayerBonus === "Rock") ||
    (stateOfBotBonus === "Rock" && stateOfPlayerBonus === "Cut") ||
    (stateOfBotBonus === "Spock" && stateOfPlayerBonus === "Paper") ||
    (stateOfBotBonus === "Lizard" && stateOfPlayerBonus === "Spock") ||
    (stateOfBotBonus === "Cut" && stateOfPlayerBonus === "Rock")
  ) {
    storeForBonus.decrBonus();
    storeForBonus.setBotWinBonus();
  } else {
    // Ничья
  }
};
