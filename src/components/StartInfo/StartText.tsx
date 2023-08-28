import style from "./style/style.module.scss";

type PropsStartText = {
  text: string;
};

const StartText: React.FC<PropsStartText> = ({ text }) => {
  return (
    <div className={style.info_text}>
      <h1>
        You can always check <br />
        {text}
        <span>|</span>
      </h1>
    </div>
  );
};

export default StartText;
