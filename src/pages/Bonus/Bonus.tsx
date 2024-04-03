import { useEffect } from "react";
import storeForBonus from "../../app/store/StoreaForBonus";
import GameBonus from "../../features/GameBonus/GameBonus";
import BotGenerateBonus from "../../features/GameBonus/WinBotCombinationBonus/BotGenerateBonus";
import PlayerGenerateBonus from "../../features/GameBonus/WinPlayerCombBonus/PlayerGentateBonus";
import Button from "../../shared/Button/Button";
import HeaderForBonus from "../../shared/HeaderForBonus/HeaderForBonus";
import "./Bonus.scss";
import { checkResultBonus } from "../../entetites/BotForBonus/BotForBonus";
import { observer } from "mobx-react-lite";
import { ParagraphWinBonus } from "../../shared/ParagraphWin/ParagraphWinBonus";

const Bonus = observer(() => {
  useEffect(() => {
    if (
      storeForBonus.stateOfBotBonus !== "" &&
      storeForBonus.stateOfPlayerBonus !== ""
    )
      checkResultBonus();
  }, [storeForBonus.stateOfPlayerBonus]);

  const resetGame = () => {
    storeForBonus.resetStoreBonus();
  };

  const resetLocal = () => {
    localStorage.removeItem("counter_bonus");
    resetGame();
    storeForBonus.counterBonus = 0;
  };

  return (
    <>
      <HeaderForBonus />
      <main>
        {storeForBonus.changeStoreOfPlayerBonus === true ? (
          <div className="game_end_wrapper">
            <div className="play_result">
              <PlayerGenerateBonus />
              <Button text="Играть снова" onClick={resetGame} />
              <Button text="Сбросить Счет" onClick={resetLocal}></Button>
              <BotGenerateBonus />
            </div>
            <ParagraphWinBonus />
          </div>
        ) : (
          <>
            <GameBonus />
          </>
        )}
      </main>
    </>
  );
});

export default Bonus;
