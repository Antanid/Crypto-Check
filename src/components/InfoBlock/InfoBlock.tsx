import { MouseParallax } from "react-just-parallax";
import { useState } from "react";

import infoProtectImg from "../../assets/img/info_protect.png";
import infoCurrencyImg from "../../assets/img/info_currency.png";
import infoChatSupportImg from "../../assets/img/info_chatSupport.png";
import infoBigImg from "../../assets/img/info_bigImg.png";

import info_bg1 from "../../assets/img/info_bg1.png";
import info_bg2 from "../../assets/img/info_bg2.png";
import info_bg3 from "../../assets/img/info_bg3.png";

import InfoFirstLine from "./InfoFirstLine";
import InfoText from "./InfoText";

import style from "./style/style.module.scss";
import InfoBgImg from "./InfoBgImg";

const InfoBlock = () => {
  const [text] = useState([
    {
      text: "Protect yourself, see current prices and protect yourself",
      img: infoProtectImg,
    },
    {
      text: "Find out the exchange rate of your cryptocurrency to fiat",
      img: infoCurrencyImg,
    },
    {
      text: "24/7 live chat support with our customer service specialists.",
      img: infoChatSupportImg,
    },
  ]);
  return (
    <div id="InfoBlock" className={style.info_block}>
      <InfoFirstLine str="Reliable cryptocurrency site" />
      <InfoText text={text} infoBigImg={infoBigImg} />
      <InfoBgImg info_bg1={info_bg1} info_bg2={info_bg2} info_bg3={info_bg3} />
    </div>
  );
};

export default InfoBlock;
