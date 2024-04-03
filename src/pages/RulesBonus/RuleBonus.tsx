import Footer from "../../shared/Footer/Footer";
import "./RulesBonus.scss"


const RuleBonus = () => {
  return (
    <>
      <div className="rules_bonus">
        <img src="../../../images/B0nus.jpg" />
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