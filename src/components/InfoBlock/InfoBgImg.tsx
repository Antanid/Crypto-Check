import { MouseParallax } from "react-just-parallax";
import style from "./style/style.module.scss";

type PropsInfoBgImg = {
  info_bg1: string;
  info_bg2: string;
  info_bg3: string;
};

const InfoBgImg: React.FC<PropsInfoBgImg> = ({ info_bg1, info_bg2, info_bg3 }) => {
  return (
    <div className={style.info_bgImg}>
      <MouseParallax enableOnTouchDevice isAbsolutelyPositioned>
        <img className={style.info_bgImg_1} src={info_bg1} alt="bg_img" />
        <img className={style.info_bgImg_2} src={info_bg2} alt="bg_img" />
        <img className={style.info_bgImg_3} src={info_bg3} alt="bg_img" />
      </MouseParallax>
    </div>
  );
};

export default InfoBgImg;
