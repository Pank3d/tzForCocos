import { observer } from "mobx-react-lite";
import "./Game.scss";
import storeForDefault from "../../app/store/storeFotDefault";
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
          <div
            className="paper_container"
            onClick={() => storeForDefault.setPlayer("Paper")}
          >
            <img src="../../../images/icon-paper.svg" className="paper" />
          </div>
          <div
            className="rock_container"
            onClick={() => storeForDefault.setPlayer("Rock")}
          >
            <img src="../../../images/icon-rock.svg" className="rock" />
          </div>
          <div
            className="ssisors_container"
            onClick={() => storeForDefault.setPlayer("Cut")}
          >
            <img src="../../../images/icon-scissors.svg" className="ssisors" />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Game;
