import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";

import Rules from "../pages/Rules/Rules";
import Bonus from "../pages/Bonus/Bonus";
import RuleBonus from "../pages/RulesBonus/RuleBonus";

function App() {
  return (
    <section className="wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/bonus" element = {<Bonus/>} />
        <Route path="/rulesBonus" element = {<RuleBonus/>} />
      </Routes>
    </section>
  );
}

export default App;
