import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoIcon from "../../assets/img/header_icon.png";
import burgerImg from "../../assets/img/burgerImg.png";
import closeBurgerImg from "../../assets/img/closeBurgerMenu.png";

import style from "./style/style.module.scss";
import { endSession, getSession } from "../../session";

const Menu = () => {
  const navigate = useNavigate();

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
      path: "/favorite-page",
    },
  ]);
  const [email, setEmail] = useState<string | null>("");

  useEffect(() => {
    let session = getSession();
    setEmail(session.email);
  }, [navigate, email]);

  const [burgerOpen, setBurgerOpen] = useState(false);

  const onLogOut = () => {
    endSession();
    setEmail('')
  }
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
        <ul className={burgerOpen ? style.burger_ul : style.burger_close}>
          {menuLi.map((i) => (
            <>
              <a href={i.path}>
                <li onClick={() => setBurgerOpen((prev) => false)}>
                  {i.name !== "Favorite" && i.name}
                </li>
              </a>
              <Link to={"/favorite-page"}>
                <li onClick={() => setBurgerOpen((prev) => false)}>
                  {i.name === "Favorite" && i.name}
                </li>
              </Link>
            </>
          ))}
        </ul>
      </div>

      <div className={style.authorization}>
        {email ? (
          <>
            <h5>{email.split('').slice(0, 10)}...</h5>
            <Link to='/'>
            <button onClick={onLogOut}>Log out</button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/log_in">
              <button>Log In</button>
            </Link>
            <Link to="/sign_up">
              <button>Sign Up</button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Menu;
