import { observer } from "mobx-react-lite";
import "./Game.scss";
import storeForDefault from "../../app/store/storeFotDefault";
import { useEffect } from "react";
import { generateRandomAction } from "../../entetites/BotForDefault/BotForDefault";
import bgTriangle from "../../shared/images/bg-triangle.svg"
import iconPaper from "../../shared/images/icon-paper.svg"
import iconRock from "../../shared/images/icon-rock.svg"
import iconSissors from "../../shared/images/icon-scissors.svg"

const Game = observer(() => {
  useEffect(() => {
    generateRandomAction();
  }, []);

  return (
    
    <div className="game_wrapper">
      <div className="game_container">
        <div className="game_back">
          <img src={bgTriangle} />
        </div>
        <div className="game_play_icons">
          <div
            className="paper_container"
            onClick={() => storeForDefault.setPlayer("Paper")}
          >
            <img src={iconPaper} className="paper" />
          </div>
          <div
            className="rock_container"
            onClick={() => storeForDefault.setPlayer("Rock")}
          >
            <img src={iconRock} className="rock" />
          </div>
          <div
            className="ssisors_container"
            onClick={() => storeForDefault.setPlayer("Cut")}
          >
            <img src={iconSissors} className="ssisors" />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Game;
