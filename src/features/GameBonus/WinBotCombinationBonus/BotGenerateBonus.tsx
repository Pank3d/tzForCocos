import { useEffect, useState } from "react";
import storeForBonus from "../../../app/store/StoreaForBonus";

const BotGenerateBonus = () => {
  const paperImage: string = "icon-paper.svg";
  const rockImage: string = "icon-rock.svg";
  const imageCut: string = "icon-scissors.svg";
  const spockImage: string = "icon-spock.svg";
  const lizardImage: string = "icon-lizard.svg";

  const [displayedBotCombination, setDisplayedBotCombination] =
    useState<string>("");

  const drawPictureBonus = () => {
    if (storeForBonus.stateOfBotBonus === "Rock") {
      setDisplayedBotCombination(rockImage);
    } else if (storeForBonus.stateOfBotBonus === "Paper") {
      setDisplayedBotCombination(paperImage);
    } else if (storeForBonus.stateOfBotBonus === "Cut") {
      setDisplayedBotCombination(imageCut);
    } else if (storeForBonus.stateOfBotBonus === "Spock") {
      setDisplayedBotCombination(spockImage);
    } else if (storeForBonus.stateOfBotBonus === "Lizard") {
      setDisplayedBotCombination(lizardImage);
    }
  };

  useEffect(() => {
    drawPictureBonus();
  }, [storeForBonus.stateOfPlayerBonus, storeForBonus.stateOfBotBonus]);

  return (
    <div>
      <div className="bot_bonus_menu">
        <p className="pick">Выбор Бота</p>
        <img src={`../../../../images/${displayedBotCombination}`} />
      </div>
    </div>
  );
};

export default BotGenerateBonus;
