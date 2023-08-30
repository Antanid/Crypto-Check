import style from "./style/style.module.scss";


type PropsCoinMarketCup = {
    checkMarketData: any;
    marketDataCurrynce24hLow: number;
    marketDataCurrynce24hHight: number;
    marketCapUsd: number;
    marketCapCirculating: number;
}

const SingleCoinMarketCup: React.FC <PropsCoinMarketCup> = ({checkMarketData, marketDataCurrynce24hLow, marketDataCurrynce24hHight, marketCapUsd, marketCapCirculating}) => {
  return (
    <div className={style.content}>
    <div className={style.stats}>
      <div className="left">
        <div className={style.row}>
          <h4>24 Hour Low</h4>
          {checkMarketData?.low_24h ? (
            <p>${marketDataCurrynce24hLow.toLocaleString()}</p>
          ) : null}
        </div>
        <div className={style.row}>
          <h4>24 Hour High</h4>
          {checkMarketData?.high_24h ? (
            <p>${marketDataCurrynce24hHight.toLocaleString()}</p>
          ) : null}{" "}
        </div>
      </div>
      <div className="right">
        <div className="row">
          <h4>Market Cap</h4>
          {checkMarketData?.market_cap ? (
            <p>${marketCapUsd.toLocaleString()}</p>
          ) : null}
        </div>
        <div className="row">
          <h4>Circulating Supply</h4>
          {checkMarketData ? (
            <p>{marketCapCirculating}</p>
          ) : null}
        </div>
      </div>
    </div>
  </div>
  )
}

export default SingleCoinMarketCup