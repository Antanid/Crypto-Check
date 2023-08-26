import React, { useState } from "react";
import logoIcon from '../../assets/img/icon.png';

import style from './style/style.module.scss'

const Menu = () => {
  const [menuLi] = useState([
    {
      name: "CryproInfo",
    },
    {
      name: "Contact",
    },
  ]);

  return (
      <header className={style.header_block}>
        <div className={style.logo_block}>
          <img src={logoIcon} alt="logoIcon" />
        </div>
        <ul className={style.ul_menu}>
          {menuLi.map((i) => (
            <li>{i.name}</li>
          ))}
        </ul>
      </header>
  );
};

export default Menu;
