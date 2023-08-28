import style from "./style/style.module.scss";

type PropsStartImg = {
  infoImg: string;
};

const StartImg: React.FC<PropsStartImg> = ({ infoImg }) => {
  return (
    <div className={style.info_img}>
      <img src={infoImg} alt="cryptoImg" />
    </div>
  );
};

export default StartImg;
