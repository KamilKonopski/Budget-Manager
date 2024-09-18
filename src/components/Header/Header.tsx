import Menu from "../Menu/Menu";

import avatar from "../../assets/avatar.png";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header>
      <div>
        <img src={logo} alt="logo budget manager app" />
        <span>Budget Manager</span>
      </div>
      <Menu />
      <div>
        <button>🌓</button>
        <img src={avatar} alt="avatar profilu" />
        <div>
          <button>Profil</button>
          <button>Ustawienia</button>
          <button>Wyloguj</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
