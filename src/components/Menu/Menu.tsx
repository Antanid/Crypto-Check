import React, { useState } from "react";
import logoIcon from '../../assets/img/icon.png';

import style from './style/style.module.scss'

const Menu = () => {
  const [menuLi] = useState([
    {
      name: "Main",
      path: '#StartInfo'
     
    },
    {
      name: "Convert Crypto",
      path: '#ConvertCrypto'
    },
    {
      name: "Cryptocurrencies",
      path: '#All_coins'
    },
    {
      name: "Info",
      path: '#InfoBlock'
    },
    {
      name: "Contact",
      path: '#Contact'
    },
  ]);

  return (
      <header className={style.header_block}>
        <div className={style.logo_block}>
          <img src={logoIcon} alt="logoIcon" />
        </div>
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
