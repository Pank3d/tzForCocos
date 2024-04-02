import { Link } from "react-router-dom";
import "./Footer.scss"

const Footer = ({text, text1, link, link1} : {text:string, text1:string, link:string, link1:string}) => {
  return (
    <footer className="footer">
      <div className="button_container">
        <Link to={`/${link}`} className="bonus_game">
          {text}
        </Link>
        <Link to={`/${link1}`} className="rules">{text1}</Link>
      </div>
    </footer>
  );
};

export default Footer;
