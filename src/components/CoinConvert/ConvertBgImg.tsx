import { MouseParallax } from "react-just-parallax";

import style from "./style/style.module.scss";

type PropsConvertBgImg = {
  coinBG2: string;
  coingBG: string;
};

const ConvertBgImg: React.FC<PropsConvertBgImg> = ({ coingBG, coinBG2 }) => {
  return (
    <div className={style.convert_bg_coin1}>
      <MouseParallax enableOnTouchDevice isAbsolutelyPositioned>
        <img className={style.convert_first} src={coingBG} alt="bg_coin" />
        <img className={style.convert_second} src={coinBG2} alt="bg_coin" />
      </MouseParallax>
    </div>
  );
};

export default ConvertBgImg;
