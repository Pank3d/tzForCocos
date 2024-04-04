import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import storeForBonus from "../../app/store/StoreaForBonus";
import logoBonus from "../../shared/images/logo-bonus.svg"


const HeaderForBonus = observer(() => {
  const [counterDisplayed, setCounterDisplayed] = useState<number>(0);

  useEffect(() => {
    const localStorageCounter = localStorage.getItem("counter_bonus"); 
    if (localStorageCounter !== null) {
      setCounterDisplayed(parseInt(localStorageCounter));
    } else {
      setCounterDisplayed(storeForBonus.counterBonus); 
    }
  }, [storeForBonus.counterBonus]); 
  return (
    <header className="header">
      <div className="container">
        <img src={logoBonus} className="logo" />
        <div className="counter">
          <div className="counter_items">
            <p className="counter_item">Счет</p>
            <p className="counter_schet">{counterDisplayed}</p>
          </div>
        </div>
      </div>
    </header>
  );
});

export default HeaderForBonus;
