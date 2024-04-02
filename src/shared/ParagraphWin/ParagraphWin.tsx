import { observer } from "mobx-react-lite";
import storeForDefault from "../../app/store/store";

export const ParagraphWin = observer(() => {
  return (
    <>
      {storeForDefault.playerWin === true ? (
        <>
          <p className="end_paragraph">Вы победили</p>
        </>
      ) : (
        <></>
      )}
      {storeForDefault.botWin === true ? (
        <>
          <p className="end_paragraph">Вы Проиграли</p>
        </>
      ) : (
        <></>
      )}
      {storeForDefault.stateOfBot == storeForDefault.stateOfPlayer &&
      storeForDefault.stateOfBot !== "" &&
      storeForDefault.stateOfPlayer !== "" ? (
        <><p className="end_paragraph">Ничья</p></>
      ) : (
        <></>
      )}
    </>
  );
})
