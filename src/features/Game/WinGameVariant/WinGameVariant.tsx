import { useEffect, useState } from "react";
import storeForDefault from "../../../app/store/storeFotDefault";
import { observer } from "mobx-react-lite";
import iconPaper from "../../../shared/images/icon-paper.svg";
import iconRock from "../../../shared/images/icon-rock.svg";
import iconSissors from "../../../shared/images/icon-scissors.svg";

const PlayerVariant = observer(() => {
  const paperImage: string = iconPaper;
  const rockImage: string = iconRock;
  const imageCut: string = iconSissors;

  const [displayedCombinationPlayer, setDisplayedCombinationPlayer] =
    useState<string>("");

  const drawPicture = () => {
    if (storeForDefault.stateOfPlayer === "Rock") {
      setDisplayedCombinationPlayer(rockImage);
    } else if (storeForDefault.stateOfPlayer === "Paper") {
      setDisplayedCombinationPlayer(paperImage);
    } else if (storeForDefault.stateOfPlayer === "Cut") {
      setDisplayedCombinationPlayer(imageCut);
    }
  };

  useEffect(() => {
    drawPicture();
  }, [storeForDefault.changeStoreOfPlayer, storeForDefault.stateOfPlayer]);

  return (
    <div className="player_menu">
      <p className="pick">Выбор Игрока</p>
      <img src={`${displayedCombinationPlayer}`} />
    </div>
  );
});

export default PlayerVariant;

