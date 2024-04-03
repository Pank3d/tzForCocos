import storeForBonus from "../../app/store/StoreaForBonus";

export const generateRandomActionBonus = () => {
  const randomAction = ["Paper", "Rock", "Cut", "Spock", "Lizard"];
  const randomIndex = Math.floor(Math.random() * randomAction.length);
  const randomChoice = randomAction[randomIndex];
  storeForBonus.setBotBonus(randomChoice);
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
    (stateOfBotBonus === "Lizard" && stateOfPlayerBonus === "Cut")
  ) {
    storeForBonus.incrBonus();
    storeForBonus.setPlayerWinBonus();
  } else if (
    (stateOfBotBonus === "Paper" && stateOfPlayerBonus === "Lizard") ||
    (stateOfBotBonus === "Rock" && stateOfPlayerBonus === "Spock") ||
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
  }
};
