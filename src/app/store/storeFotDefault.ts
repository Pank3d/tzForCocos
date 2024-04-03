import { makeAutoObservable } from "mobx";

class Store {
  stateOfPlayer: string = "";
  stateOfBot: string = "";
  counter: number = 0;
  changeStoreOfPlayer: boolean = false;
  playerWin: boolean = false;
  botWin: boolean = false;

  constructor() {
    makeAutoObservable(this);
    const savedCounter = localStorage.getItem("counter");
    if (savedCounter) {
      this.counter = parseInt(savedCounter, 10);
    }
  }

  resetStore() {
    this.stateOfPlayer = "";
    this.stateOfBot = "";
    this.changeStoreOfPlayer = false;
    this.playerWin = false;
    this.botWin = false;
  }

  setPlayerWin() {
    this.playerWin = true;
  }

  setBotWin() {
    this.botWin = true;
  }

  incr() {
    this.counter += 1;

    localStorage.setItem("counter", this.counter.toString());
  }

  decr() {
    if (this.counter !== 0) {
      this.counter -= 1;
      localStorage.setItem("counter", this.counter.toString());
    }
  }

  setChangeStoreOfPlayer() {
    this.changeStoreOfPlayer = true;
  }

  setPlayer(str: string) {
    this.stateOfPlayer = str;
    this.setChangeStoreOfPlayer();
  }

  setBot(str: string) {
    this.stateOfBot = str;
  }
}

const storeForDefault = new Store();
export default storeForDefault;
