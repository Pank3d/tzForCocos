import "./Header.scss";
import storeForDefault from "../../app/store/storeFotDefault";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";

const Header = observer(() => {
  const [counterDisplayed, setCounterDisplayed] = useState<number>(0);

  useEffect(() => {
    const localStorageCounter = localStorage.getItem("counter");
    if (localStorageCounter !== null) {
      setCounterDisplayed(parseInt(localStorageCounter));
    } else {
      setCounterDisplayed(storeForDefault.counter);
    }
  }, [storeForDefault.counter]);

  return (
    <header className="header">
      <div className="container">
        <img src="../../../images/logo.svg" className="logo" />
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

export default Header;
