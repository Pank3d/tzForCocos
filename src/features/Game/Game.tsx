import { observer } from "mobx-react-lite";
import "./Game.scss";
import storeForDefault from "../../app/store/store";
import { useEffect } from "react";
import { generateRandomAction } from "../../entetites/BotForDefault/BotForDefault";

const Game = observer(() => {
  useEffect(() => {
    generateRandomAction();
  }, []);

  return (
    <div className="game_wrapper">
      <div className="game_container">
        <div className="game_back">
          <img src="../../../images/bg-triangle.svg" />
        </div>
        <div className="game_play_icons">
          <div className="paper_container">
            <img
              src="../../../images/icon-paper.svg"
              className="paper"
              onClick={() => storeForDefault.setPlayer("Paper")}
            />
          </div>
          <div className="rock_container">
            <img
              src="../../../images/icon-rock.svg"
              className="rock"
              onClick={() => storeForDefault.setPlayer("Rock")}
            />
          </div>
          <div className="spock_container">
            <img
              src="../../../images/icon-scissors.svg"
              className="spock"
              onClick={() => storeForDefault.setPlayer("Cut")}
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Game;
