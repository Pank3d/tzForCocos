import { useEffect, useState } from "react";
import storeForDefault from "../../../app/store/storeFotDefault";
import { observer } from "mobx-react-lite";

const PlayerVariant = observer(() => {
  const paperImage: string = "icon-paper.svg";
  const rockImage: string = "icon-rock.svg";
  const imageCut: string = "icon-scissors.svg";



  const [displayedCombinationPlayer, setDisplayedCombinationPlayer] = useState<string>("");

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
      <img src={`../../../../images/${displayedCombinationPlayer}`} />
    </div>
  );
});

export default PlayerVariant;
