import style from "./style/style.module.scss";

type PropConvertFirstLine = {
  str: string;
};

const ConvertFirstLine: React.FC<PropConvertFirstLine> = ({ str }) => {
  return (
    <div className={style.convert_text}>
      <h3>{str}</h3>
    </div>
  );
};

export default ConvertFirstLine;
