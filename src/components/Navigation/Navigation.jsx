import { NavLink } from "react-router-dom";
import clsx from "clsx";
import style from "./Navigation.module.css";

export default function Navigation() {
  const getLinkClass = ({ isActive }) => {
    return clsx(style.link, isActive && style.active);
  };

  return (
    <div className={style.container}>
      <nav className={style.nav}>
        <NavLink to="/" className={getLinkClass}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={getLinkClass}>
          Catalog
        </NavLink>
      </nav>
    </div>
  );
}
