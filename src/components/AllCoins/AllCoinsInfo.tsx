import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import style from "./style/style.module.scss";

interface PropsAllCoins {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: any;
  last_updated: string;
};

interface PropsAllCoinsInfo {
  AllCoins: {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    fully_diluted_valuation: number;
    total_volume: number;
    high_24h: number;
    low_24h: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    ath: number;
    ath_change_percentage: number;
    ath_date: string;
    atl: number;
    atl_change_percentage: number;
    atl_date: string;
    roi: any;
    last_updated: string;
  }[];
  pageNumber: number;
  onPrevPage: () => void;
  onNextPage: () => void;
  AllCoinsStatus: string;

};

const AllCoinsInfo: React.FC<PropsAllCoinsInfo> = ({
  AllCoins,
  AllCoinsStatus,
  pageNumber,
  onPrevPage,
  onNextPage,

}) => {
  console.log(onPrevPage, 'PREV!!')
  return (
    <div>
      {AllCoinsStatus === "loading" ? (
        <Loader />
      ) : AllCoinsStatus === "error" ? (
        <div className={style.coins_error}>
          <h1>
            Too many requests. <br /> Try again after few minutes.
          </h1>
          <img
            src="https://media2.giphy.com/media/Pgve7tpGTLeeKzBXzV/giphy.gif?cid=ecf05e479thghf9e8dbxj3kqdq933q3nfv2ilxfg5j0e1hrj&ep=v1_gifs_related&rid=giphy.gif&ct=g"
            alt="errorGif"
          />
        </div>
      ) : (
        <>
          {AllCoins.map((i: PropsAllCoins) => (
            <Link to={`single_coin_${i.id}`}>
              <div key={i.id} className={style.coin_row}>
                <p>{i.market_cap_rank}</p>
                <div className={style.img_symbol}>
                  <img src={i.image} alt="" />
                  <p>{i.symbol.toUpperCase()}</p>
                </div>
                <p>${i.current_price.toLocaleString()}</p>
                <p className={style.hide_mobile}>{i.price_change_percentage_24h.toFixed(2)}%</p>
                <p className={style.hide_mobile}>${i.total_volume.toLocaleString()}</p>
                <p className={style.hide_mobile_390px}>${i.market_cap.toLocaleString()}</p>
              </div>
            </Link>
          ))}

          <div className={style.coins_button}>
            <a href="#All_coins">
              <button className={pageNumber === 1 ? style.button_disable : ""} onClick={onPrevPage}>
                Prev
              </button>
            </a>
            <a href="#All_coins">
              <button onClick={onNextPage}>Next</button>
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default AllCoinsInfo;
