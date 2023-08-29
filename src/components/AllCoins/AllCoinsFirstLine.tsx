import style from "./style/style.module.scss";

const AllCoinsFirstLine = () => {
  return (
    <div className={style.coins_heading}>
      <p>#</p>
      <p className={style.coin_name}>Coin</p>
      <p>Price</p>
      <p className={style.hide_mobile}>24h</p>
      <p className={style.hide_mobile}>Volume</p>
      <p className={style.hide_mobile_390px} >Mkt Cap</p>
    </div>
  );
};

export default AllCoinsFirstLine;
