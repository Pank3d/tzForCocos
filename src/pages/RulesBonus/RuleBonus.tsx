import Footer from "../../shared/Footer/Footer";
import "./RulesBonus.scss"
import BonusRules from "../../shared/images/B0nus.jpg"


const RuleBonus = () => {
  return (
    <>
      <div className="rules_bonus">
        <img src={BonusRules} />
      </div>
      <Footer
        text={"Обычная"}
        text1={"Бонус"}
        link={""}
        link1={"bonus"}
      ></Footer>
    </>
  );
}

export default RuleBonus