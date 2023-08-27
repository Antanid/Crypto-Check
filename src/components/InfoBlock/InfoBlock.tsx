import { MouseParallax } from "react-just-parallax";

import style from "./style/style.module.scss";
import infoProtectImg from "../../assets/img/info_protect.png";
import infoCurrencyImg from "../../assets/img/info_currency.png";
import infoChatSupportImg from "../../assets/img/info_chatSupport.png";
import infoBigImg from "../../assets/img/info_bigImg.png";

import info_bg1 from "../../assets/img/info_bg1.png";
import info_bg2 from "../../assets/img/info_bg2.png";
import info_bg3 from "../../assets/img/info_bg3.png";
import { useState } from "react";

const InfoBlock = () => {
  const [text, setText] = useState([
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
      <div className={style.info_mainH2}>
        <h2>Reliable cryptocurrency site</h2>
      </div>
      <div className={style.info_block_main}>
        <div className={style.info_text}>
          {text.map((i) => (
            <div className={style.info_imgText_block}>
              <img src={i.img} alt="protect_img" />
              <div className={style.info_imgText_pBlock}>
                <p>{i.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={style.info_bigImg}>
          <img src={infoBigImg} alt="big_img" />
        </div>
      </div>

      <div className={style.info_bgImg}>
        <MouseParallax enableOnTouchDevice isAbsolutelyPositioned>
          <img className={style.info_bgImg_1} src={info_bg1} alt="bg_img" />
          <img className={style.info_bgImg_2} src={info_bg2} alt="bg_img" />
          <img className={style.info_bgImg_3} src={info_bg3} alt="bg_img" />
        </MouseParallax>
      </div>
    </div>
  );
};

export default InfoBlock;
