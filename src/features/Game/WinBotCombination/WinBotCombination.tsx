import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import storeForDefault from "../../../app/store/storeFotDefault";

const BotCombination = observer(() => {
  const paperImage: string = "icon-paper.svg";
  const rockImage: string = "icon-rock.svg";
  const imageCut: string = "icon-scissors.svg";

  const [displayedCombinationBot, setDisplayedCombinationBot] =
    useState<string>("");

  const drawPicture = () => {
    if (storeForDefault.stateOfBot === "Rock") {
      setDisplayedCombinationBot(rockImage);
    } else if (storeForDefault.stateOfBot === "Paper") {
      setDisplayedCombinationBot(paperImage);
    } else if (storeForDefault.stateOfBot === "Cut") {
      setDisplayedCombinationBot(imageCut);
    }
  };

  useEffect(() => {
    drawPicture();
  }, [storeForDefault.stateOfPlayer, storeForDefault.stateOfBot]);

  return (
    <div className="bot_menu">
      <p className="pick">Выбор Бота</p>
      <img src={`../../../../images/${displayedCombinationBot}`} />
    </div>
  );
});

export default BotCombination;
