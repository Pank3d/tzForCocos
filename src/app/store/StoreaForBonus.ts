import { makeAutoObservable } from "mobx";

class StoreBonus {
  stateOfPlayerBonus: string = "";
  stateOfBotBonus: string = "";
  counterBonus: number = 0;
  changeStoreOfPlayerBonus: boolean = false;
  playerWinBonus: boolean = false;
  botWinBonus: boolean = false;

  constructor() {
    makeAutoObservable(this);
    const savedCounterBonus = localStorage.getItem("counter_bonus");
    if (savedCounterBonus) {
      this.counterBonus = parseInt(savedCounterBonus, 10);
    }
  }

  resetStoreBonus() {
    this.stateOfPlayerBonus = "";
    this.stateOfBotBonus = "";
    this.changeStoreOfPlayerBonus = false;
    this.playerWinBonus = false;
    this.botWinBonus = false;
  }

  setPlayerWinBonus() {
    this.playerWinBonus = true;
  }

  setBotWinBonus() {
    this.botWinBonus = true;
  }

  incrBonus() {
    this.counterBonus += 1;

    localStorage.setItem("counter_bonus", this.counterBonus.toString());
  }

  decrBonus() {
    if (this.counterBonus !== 0) {
      this.counterBonus -= 1;
      localStorage.setItem("counter_bonus", this.counterBonus.toString());
    }
  }

  setChangeStoreOfPlayerBonus() {
    this.changeStoreOfPlayerBonus = true;
  }

  setPlayerBonus(str: string) {
    this.stateOfPlayerBonus = str;
    this.setChangeStoreOfPlayerBonus();
  }

  setBotBonus(str: string) {
    this.stateOfBotBonus = str;
  }
}

const storeForBonus = new StoreBonus();
export default storeForBonus;
