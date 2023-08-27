import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPage, setAllCoins, setAllStatus } from "../../redux/AllCoins/AllCoinsSlice";
import { fetchAllCoins } from "../../redux/AllCoins/asyncAllCoins";
import Loader from "../Loader/Loader";

import style from "./style/style.module.scss";

const AllCoins = () => {
  const dispatch = useDispatch();
  const AllCoins = useSelector(setAllCoins);
  const AllCoinsStatus = useSelector(setAllStatus);

  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    // @ts-ignore: Unreachable code error
    dispatch(fetchAllCoins({ pageNumber }));
    dispatch(addPage(pageNumber));
  }, [pageNumber, setPageNumber]);

  const onPrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber((prev) => prev - 1);
    }
  };

  const onNextPage = () => {
    setPageNumber((prev) => prev + 1);
  };

  return (
    <div className={style.all_coins}>
      <div  id="All_coins" className={style.all_coins_h2}>
        <h2>Price of cryptocurrencies</h2>
      </div>

      <div className={style.coins_heading}>
        <p>#</p>
        <p className={style.coin_name}>Coin</p>
        <p>Price</p>
        <p>24h</p>
        <p className={style.hide_mobile}>Volume</p>
        <p className={style.hide_mobile}>Mkt Cap</p>
      </div>
      {AllCoinsStatus === "loading" ? (
        <Loader />
      ) : AllCoinsStatus === "error" ? (
        <div className={style.coins_error}>
          <h1>
            Too many requests. <br /> Try later, please.
          </h1>
          <img
            src="https://media2.giphy.com/media/Pgve7tpGTLeeKzBXzV/giphy.gif?cid=ecf05e479thghf9e8dbxj3kqdq933q3nfv2ilxfg5j0e1hrj&ep=v1_gifs_related&rid=giphy.gif&ct=g"
            alt="errorGif"
          />
        </div>
      ) : (
        <>
          {AllCoins.map((i: any) => (
            <div className={style.coin_row}>
              <p>{i.market_cap_rank}</p>
              <div className={style.img_symbol}>
                <img src={i.image} alt="" />
                <p>{i.symbol.toUpperCase()}</p>
              </div>
              <p>${i.current_price.toLocaleString()}</p>
              <p>{i.price_change_percentage_24h.toFixed(2)}%</p>
              <p className={style.hide_mobile}>${i.total_volume.toLocaleString()}</p>
              <p className={style.hide_mobile}>${i.market_cap.toLocaleString()}</p>
            </div>
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

export default AllCoins;
