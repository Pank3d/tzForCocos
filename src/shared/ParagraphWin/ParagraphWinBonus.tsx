import { observer } from "mobx-react-lite";
import storeForBonus from "../../app/store/StoreaForBonus";


export const ParagraphWinBonus = observer(() => {
  return (
    <>
      {storeForBonus.playerWinBonus && (
        <p className="end_paragraph">Вы победили</p>
      )}
      {storeForBonus.botWinBonus && (
        <p className="end_paragraph">Вы Проиграли</p>
      )}
      {storeForBonus.stateOfBotBonus === storeForBonus.stateOfPlayerBonus &&
        storeForBonus.stateOfBotBonus !== "" &&
        storeForBonus.stateOfPlayerBonus !== "" && (
          <p className="end_paragraph">Ничья</p>
        )}
    </>
  );
});
