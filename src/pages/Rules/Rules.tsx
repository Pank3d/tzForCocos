import Footer from "../../shared/Footer/Footer";
import "./Rules.scss"
import rulesDefault from "../../shared/images/rules.jpeg"
const Rules = () => {
  return (
    <>
    <div className="rules">
      <img src={rulesDefault} alt="" />
    </div>
      <Footer
        text={"Бонус"}
        text1={"Обычная"}
        link={"bonus"}
        link1={""}
      ></Footer>
    </>
  );
};

export default Rules;
