import style from "./style/style.module.scss";

type PropsCoinPrice = {
    marketCapRank: string;
    checkImg: string;
    smallImg: string;
    name: string;
    symbol: string;
    checkMarketData: any;
    currentPrice: number;
}

const SingleCoinPrice: React.FC <PropsCoinPrice> = ({marketCapRank, checkImg, smallImg, name, symbol, checkMarketData, currentPrice}) => {
  return (
    <div className={style.content}>
    <div className={style.rank}>
      <span className={style.rank_btn}>Rank # {marketCapRank}</span>
    </div>
    <div className={style.info}>
      <div className={style.coin_heading}>
        <div className={style.coin_imgHeading_block}>
          {checkImg ? <img src={smallImg} alt="" /> : null}
        </div>
        <p>{name}</p>
        {symbol ? <p>{symbol.toUpperCase()}/USD</p> : null}
      </div>
      <div className={style.coin_price}>
        {checkMarketData?.current_price ? (
          <h1>${currentPrice.toLocaleString()}</h1>
        ) : null}
      </div>
    </div>
  </div>
  )
}

export default SingleCoinPrice