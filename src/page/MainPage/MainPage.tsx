import React from "react";
import AllCoins from "../../components/AllCoins/AllCoins";
import CoinCovert from "../../components/CoinConvert/CoinCovert";
import Contact from "../../components/Contact/Contact";
import InfoBlock from "../../components/InfoBlock/InfoBlock";
import StartInfo from "../../components/StartInfo/StartInfo";
import style from "./style/style.module.scss";

const MainPage = () => {
  return (
    <div>
      <div className={style.header_menu}>
        <StartInfo />
      </div>
      <CoinCovert />
      <AllCoins />
      <InfoBlock />
      <Contact />
    </div>
  );
};

export default MainPage;
