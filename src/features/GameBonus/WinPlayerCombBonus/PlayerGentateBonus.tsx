import { useEffect, useState } from "react";
import storeForBonus from "../../../app/store/StoreaForBonus";
import iconPaper from "../../../shared/images/icon-paper.svg"
import iconRock from "../../../shared/images/icon-rock.svg";
import iconSsisors from "../../../shared/images/icon-scissors.svg";
import iconSpock from "../../../shared/images/icon-spock.svg";
import iconLizard from "../../../shared/images/icon-lizard.svg";


const PlayerGenerateBonus = () => {
  const paperImage: string = iconPaper;
  const rockImage: string = iconRock;
  const imageCut: string = iconSsisors;
  const spockImage: string = iconSpock;
  const lizardImage: string = iconLizard;

  const [displayedPlayerCombination, setDisplayedPlayerCombination] =
    useState<string>("");

  const drawPictureBonus = () => {
    if (storeForBonus.stateOfPlayerBonus === "Rock") {
      setDisplayedPlayerCombination(rockImage);
    } else if (storeForBonus.stateOfPlayerBonus === "Paper") {
      setDisplayedPlayerCombination(paperImage);
    } else if (storeForBonus.stateOfPlayerBonus === "Cut") {
      setDisplayedPlayerCombination(imageCut);
    } else if (storeForBonus.stateOfPlayerBonus === "Spock") {
      setDisplayedPlayerCombination(spockImage);
    } else if (storeForBonus.stateOfPlayerBonus === "Lizard") {
      setDisplayedPlayerCombination(lizardImage);
    }
  };

  useEffect(() => {
    drawPictureBonus();
  }, [storeForBonus.stateOfPlayerBonus, storeForBonus.stateOfBotBonus]);

  return (
    <div className="container_bonus">
      <div className="bot_bonus_menu">
        <p className="pick">Ваш Выбор</p>
        <img src={`${displayedPlayerCombination}`} />
      </div>
    </div>
  );
};

export default PlayerGenerateBonus;
