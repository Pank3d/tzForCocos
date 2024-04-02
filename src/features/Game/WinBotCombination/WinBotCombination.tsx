import { useEffect, useState } from "react";
import storeForDefault from "../../../app/store/store";
import { observer } from "mobx-react-lite";

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

  console.log(storeForDefault.changeStoreOfPlayer);
  console.log(storeForDefault.stateOfBot);
  console.log(storeForDefault.stateOfPlayer);
  console.log(storeForDefault.counter);

  useEffect(() => {
    drawPicture();
  }, [storeForDefault.stateOfPlayer, storeForDefault.stateOfBot]); 


  console.log(storeForDefault.stateOfBot);
  return (
    <div className="bot_menu">
      <p className="pick">Выбор Бота</p>
      <img src={`../../../../images/${displayedCombinationBot}`} />
    </div>
  );
});

export default BotCombination;
