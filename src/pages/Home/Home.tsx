import Game from "../../features/Game/Game";
import WinGameVariant from "../../features/Game/WinGameVariant/WinGameVariant";
import storeForDefault from "../../app/store/storeFotDefault";
import { observer } from "mobx-react-lite";
import WinBotCombination from "../../features/Game/WinBotCombination/WinBotCombination";
import "../Home/Home.scss";
import Button from "../../shared/Button/Button";
import { useEffect } from "react";
import { checkResult } from "../../entetites/BotForDefault/BotForDefault";
import { ParagraphWin } from "../../shared/ParagraphWin/ParagraphWin";
import Header from "../../shared/HeaderForDefault/Header";
import Footer from "../../shared/Footer/Footer";

const Home = observer(() => {
  useEffect(() => {
    if (
      storeForDefault.stateOfBot !== "" &&
      storeForDefault.stateOfPlayer !== ""
    )
      checkResult();
  }, [storeForDefault.stateOfPlayer]);

  const resetGame = () => {
    storeForDefault.resetStore();
  };

  const resetLocal = () => {
    localStorage.removeItem("counter")
    resetGame()
    storeForDefault.counter = 0
  }

  return (
    <>
      <Header />
      <main className="main">
        {storeForDefault.changeStoreOfPlayer === true ? (
          <div className="game_end_wrapper">
            <div className="play_result">
              <WinGameVariant />
              <Button text="Играть снова" onClick={resetGame} />
              <Button text="Сбросить Счет" onClick={resetLocal}></Button>
              <WinBotCombination />
            </div>
            <ParagraphWin />
          </div>
        ) : (
          <>
            <Game />
            <Footer text="Бонус" text1="Правила" link="bonus" link1="rules" />
          </>
        )}
      </main>

    </>
  );
});

export default Home;