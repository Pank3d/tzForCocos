import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import storeForDefault from "../../../app/store/storeFotDefault";
import iconPaper from "../../../shared/images/icon-paper.svg";
import iconRock from "../../../shared/images/icon-rock.svg";
import iconSissors from "../../../shared/images/icon-scissors.svg";

const BotCombination = observer(() => {
  const paperImage: string = iconPaper;
  const rockImage: string = iconRock;
  const imageCut: string = iconSissors;

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
      <img src={`${displayedCombinationBot}`} />
    </div>
  );
});

export default BotCombination;
