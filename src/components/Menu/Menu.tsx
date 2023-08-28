import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoIcon from "../../assets/img/header_icon.png";

import style from "./style/style.module.scss";

const Menu = () => {
  const [menuLi] = useState([
    {
      name: "Main",
      path: "#StartInfo",
    },
    {
      name: "Convert Crypto",
      path: "#ConvertCrypto",
    },
    {
      name: "Cryptocurrencies",
      path: "#All_coins",
    },
    {
      name: "Info",
      path: "#InfoBlock",
    },
    {
      name: "Contact",
      path: "#Contact",
    },
  ]);

  return (
    <header className={style.header_block}>
      <Link to={"/"}>
        <div className={style.logo_block}>
          <a href="#StartInfo">
            <img src={logoIcon} alt="logoIcon" />
          </a>
        </div>
      </Link>

      <ul className={style.ul_menu}>
        {menuLi.map((i) => (
          <a href={i.path}>
            <li>{i.name}</li>
          </a>
        ))}
      </ul>
    </header>
  );
};

export default Menu;
