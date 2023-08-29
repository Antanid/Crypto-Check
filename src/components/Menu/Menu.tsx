import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoIcon from "../../assets/img/header_icon.png";
import burgerImg from "../../assets/img/burgerImg.png";
import closeBurgerImg from "../../assets/img/closeBurgerMenu.png";

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
    {
      name: "Favorite",
      path: "favorite-page",
    },
  ]);
  const [burgerOpen, setBurgerOpen] = useState(false);

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
          <>
            <a href={i.path}>
              <li>{i.name !== "Favorite" && i.name}</li>
            </a>
            <Link to={"favorite-page"}>
              <li>{i.name === "Favorite" && i.name}</li>
            </Link>
          </>
        ))}
      </ul>

      <div onClick={() => setBurgerOpen((prev) => !prev)} className={style.burger_icon}>
        <img src={burgerOpen ? closeBurgerImg : burgerImg} alt="burger" />
      </div>

      <div className={style.burger_menu}>
        <ul  className={burgerOpen ? style.burger_ul : style.burger_close}>
          {menuLi.map((i) => (
            <>
              <a href={i.path}>
                <li onClick={() => setBurgerOpen(prev => false)}>{i.name !== "Favorite" && i.name}</li>
              </a>
              <Link to={"favorite-page"}>
                <li onClick={() => setBurgerOpen(prev => false)}>{i.name === "Favorite" && i.name}</li>
              </Link>
            </>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Menu;
