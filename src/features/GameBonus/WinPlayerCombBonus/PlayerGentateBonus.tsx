import { useEffect, useState } from "react";
import storeForBonus from "../../../app/store/StoreaForBonus";

const PlayerGenerateBonus = () => {
  const paperImage: string = "icon-paper.svg";
  const rockImage: string = "icon-rock.svg";
  const imageCut: string = "icon-scissors.svg";
  const spockImage: string = "icon-spock.svg";
  const lizardImage: string = "icon-lizard.svg";

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
        <img src={`../../../../images/${displayedPlayerCombination}`} />
      </div>
    </div>
  );
};

export default PlayerGenerateBonus;
