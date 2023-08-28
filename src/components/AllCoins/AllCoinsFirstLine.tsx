import style from "./style/style.module.scss";

const AllCoinsFirstLine = () => {
  return (
    <div className={style.coins_heading}>
      <p>#</p>
      <p className={style.coin_name}>Coin</p>
      <p>Price</p>
      <p>24h</p>
      <p className={style.hide_mobile}>Volume</p>
      <p className={style.hide_mobile}>Mkt Cap</p>
    </div>
  );
};

export default AllCoinsFirstLine;
