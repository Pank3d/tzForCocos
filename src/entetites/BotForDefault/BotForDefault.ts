import storeForDefault from "../../app/store/storeFotDefault";


export const generateRandomAction = () => {
  const randomAction = ["Paper", "Rock", "Cut"];
  storeForDefault.setBot(randomAction[Math.floor(Math.random() * 3)]);
};

export const checkResult = () => {
  if (
    storeForDefault.stateOfBot === "Paper" &&
    storeForDefault.stateOfPlayer === "Rock"
  ) {
    storeForDefault.decr();
    storeForDefault.setBotWin();
  } else if (
    storeForDefault.stateOfBot === "Rock" &&
    storeForDefault.stateOfPlayer === "Paper"
  ) {
    storeForDefault.incr();
    storeForDefault.setPlayerWin();
  } else if (
    storeForDefault.stateOfBot === "Cut" &&
    storeForDefault.stateOfPlayer === "Paper"
  ) {
    storeForDefault.decr();
    storeForDefault.setBotWin();
  } else if (
    storeForDefault.stateOfBot === "Paper" &&
    storeForDefault.stateOfPlayer === "Cut"
  ) {
    storeForDefault.incr();
    storeForDefault.setPlayerWin();
  } else if (
    storeForDefault.stateOfBot === "Cut" &&
    storeForDefault.stateOfPlayer === "Rock"
  ) {
    storeForDefault.incr();
    storeForDefault.setPlayerWin();
  } else if (
    storeForDefault.stateOfBot === "Rock" &&
    storeForDefault.stateOfPlayer === "Cut"
  ) {
    storeForDefault.decr();
    storeForDefault.setBotWin();
  } else {
  }

  console.log(storeForDefault.counter);
};
