import React from "react";
import CoinCovert from "../../components/CoinConvert/CoinCovert";
import Menu from "../../components/Menu/Menu";
import StartInfo from "../../components/StartInfo/StartInfo";
import style from "./style/style.module.scss";

const MainPage = () => {
  return (
    <div>
      <div className={style.header_menu}>
        <Menu />
        <StartInfo />
      </div>
      <CoinCovert />
    </div>
  );
};

export default MainPage;
