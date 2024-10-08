import Logo from "../Logo/Logo.jsx";
import Navigation from "../Navigation/Navigation.jsx";
import style from "./Header.module.css";

export default function Header() {
  return (
    <header className={style.header}>
      <Logo />
      <Navigation />
    </header>
  );
}
