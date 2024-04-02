import { observer } from "mobx-react-lite";
import storeForBonus from "../../app/store/StoreaForBonus";
import Footer from "../../shared/Footer/Footer";
import "./GameBonus.scss";
import { generateRandomActionBonus } from "../../entetites/BotForBonus/BotForBonus";
import { useEffect } from "react";
const GameBonus = observer(() => {
 useEffect(() => {
   generateRandomActionBonus();
 }, []);
  return (
    <>
      <div className="game_bonus_wrapper">
        <div className="game_bonus_container">
          <div className="game_bonus_back">
            <img src="../../../images/bg-pentagon.svg" />
          </div>
          <div className="game_bonus_play_icons">
            <div
              className="paper_bonus_container"
              onClick={() => storeForBonus.setPlayerBonus("Paper")}
            >
              <img src="../../../images/icon-paper.svg" className="paper" />
            </div>
            <div
              className="rock_bonus_container"
              onClick={() => storeForBonus.setPlayerBonus("Rock")}
            >
              <img src="../../../images/icon-rock.svg" className="rock" />
            </div>
            <div
              className="ssisors_bonus_container"
              onClick={() => storeForBonus.setPlayerBonus("Cut")}
            >
              <img
                src="../../../images/icon-scissors.svg"
                className="ssisors"
              />
            </div>
            <div
              className="spock_bonus_container"
              onClick={() => storeForBonus.setPlayerBonus("Spock")}
            >
              <img src="../../../images/icon-spock.svg" className="spock" />
            </div>
            <div
              className="lizard_bonus_container"
              onClick={() => storeForBonus.setPlayerBonus("Lizard")}
            >
              <img src="../../../images/icon-lizard.svg" className="lizard" />
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
