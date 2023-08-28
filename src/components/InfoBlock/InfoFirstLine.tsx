import style from "./style/style.module.scss";

type PropsInfoFirstLine = {
  str: string;
};

const InfoFirstLine: React.FC<PropsInfoFirstLine> = ({ str }) => {
  return (
    <div className={style.info_mainH2}>
      <h2>{str}</h2>
    </div>
  );
};

export default InfoFirstLine;
