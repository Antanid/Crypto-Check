import style from "./style/style.module.scss";

type PropsAllCoinsText = {
  str: string;
};

const AllCoinsText: React.FC<PropsAllCoinsText> = ({ str }) => {
  return (
    <div id="All_coins" className={style.all_coins_h2}>
      <h2>{str}</h2>
    </div>
  );
};

export default AllCoinsText;
