import style from "./style/style.module.scss";

type PropsInfoText = {
  text: {
    text: string;
    img: string;
  }[];
  infoBigImg: string
};

const InfoText: React.FC<PropsInfoText> = ({ text, infoBigImg}) => {
  return (
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
  );
};

export default InfoText;
