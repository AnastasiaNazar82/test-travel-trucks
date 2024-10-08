import logo from "../../image/Logo.png";
import { Link } from "react-router-dom";
import style from "./Logo.module.css";

const Logo = () => {
  return (
    <Link to="/" className={style.logo}>
      <img src={logo} width="136" height="16" alt="Logo" />
    </Link>
  );
};
export default Logo;
