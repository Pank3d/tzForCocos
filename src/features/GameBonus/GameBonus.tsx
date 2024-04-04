import { observer } from "mobx-react-lite";
import storeForBonus from "../../app/store/StoreaForBonus";
import Footer from "../../shared/Footer/Footer";
import "./GameBonus.scss";
import { generateRandomActionBonus } from "../../entetites/BotForBonus/BotForBonus";
import { useEffect } from "react";
import bgPentagon from "../../shared/images/bg-pentagon.svg"
import iconPaper from "../../shared/images/icon-paper.svg"
import iconRock from "../../shared/images/icon-rock.svg"
import iconSsisors from "../../shared/images/icon-scissors.svg"
import iconSpock from "../../shared/images/icon-spock.svg"
import iconLizard from "../../shared/images/icon-lizard.svg"
const GameBonus = observer(() => {
 useEffect(() => {
   generateRandomActionBonus();
 }, []);
  return (
    <>
      <div className="game_bonus_wrapper">
        <div className="game_bonus_container">
          <div className="game_bonus_back">
            <img src={bgPentagon} />
          </div>
          <div className="game_bonus_play_icons">
            <div
              className="paper_bonus_container"
              onClick={() => storeForBonus.setPlayerBonus("Paper")}
            >
              <img src={iconPaper} className="paper" />
            </div>
            <div
              className="rock_bonus_container"
              onClick={() => storeForBonus.setPlayerBonus("Rock")}
            >
              <img src={iconRock} className="rock" />
            </div>
            <div
              className="ssisors_bonus_container"
              onClick={() => storeForBonus.setPlayerBonus("Cut")}
            >
              <img
                src={iconSsisors}
                className="ssisors"
              />
            </div>
            <div
              className="spock_bonus_container"
              onClick={() => storeForBonus.setPlayerBonus("Spock")}
            >
              <img src={iconSpock} className="spock" />
            </div>
            <div
              className="lizard_bonus_container"
              onClick={() => storeForBonus.setPlayerBonus("Lizard")}
            >
              <img src={iconLizard} className="lizard" />
            </div>
          </div>
        </div>
      </div>
      <Footer
        text={"Обычная"}
        text1={"Правила"}
        link={""}
        link1={"rulesBonus"}
      />
    </>
  );
})

export default GameBonus;
