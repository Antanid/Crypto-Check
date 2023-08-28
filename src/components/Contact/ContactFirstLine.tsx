import style from "./style/style.module.scss";

type PropsContactFirstLine = {
  str: string;
};

const ContactFirstLine: React.FC<PropsContactFirstLine> = ({ str }) => {
  return (
    <div className={style.contact_main_h2}>
      <h2>{str}</h2>
    </div>
  );
};

export default ContactFirstLine;
