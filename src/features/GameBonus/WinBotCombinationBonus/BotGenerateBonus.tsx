import { useEffect, useState } from "react";
import storeForBonus from "../../../app/store/StoreaForBonus";
import iconPaper from "../../../shared/images/icon-paper.svg";
import iconRock from "../../../shared/images/icon-rock.svg";
import iconSsisors from "../../../shared/images/icon-scissors.svg";
import iconSpock from "../../../shared/images/icon-spock.svg";
import iconLizard from "../../../shared/images/icon-lizard.svg";

const BotGenerateBonus = () => {
  const paperImage: string = iconPaper
  const rockImage: string = iconRock
  const imageCut: string = iconSsisors
  const spockImage: string = iconSpock
  const lizardImage: string = iconLizard

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
    <div className="container_bonus">
      <div className="bot_bonus_menu">
        <p className="pick">Выбор Бота</p>
        <img src={`${displayedBotCombination}`} />
      </div>
    </div>
  );
};

export default BotGenerateBonus;
