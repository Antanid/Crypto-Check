import { useDispatch, useSelector } from "react-redux";
import style from "../../components/SingleCoin/style/style.module.scss";
import { setSingleCoin, setSingleStatus } from "../../redux/SingleCoin/SingleCoinSlice";
import Loader from "../../components/Loader/Loader";
import singleArrowImg from "../../assets/img/singleArrow.png";
import { useLocation } from "react-router-dom";
import addFavoriteImg from "../../assets/img/addFavorite.png";
import unFavoriteImg from "../../assets/img/unFavorite.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { fetchSingleCoin } from "../../redux/SingleCoin/asyncSingleCoin";
import SingleCoinHead from "../../components/SingleCoin/SingleCoinHead";
import SingleCoinPrice from "../../components/SingleCoin/SingleCoinPrice";
import SingleTableInfo from "../../components/SingleCoin/SingleTableInfo";
import SingleCoinMarketCup from "../../components/SingleCoin/SingleCoinMarketCup";
import SingleCoinInfo from "../../components/SingleCoin/SingleCoinInfo";

const SingleCoinPage = () => {
  const dispatch = useDispatch();
  const singleStatus = useSelector(setSingleStatus);
  const singlData: any = useSelector(setSingleCoin);
  const [img, setImg] = useState(false);
  const [favorite, setFavorite] = useState<any>([]);
  const imgStatus = favorite.filter((i: any) => i.name === singlData["id"]).length;

  const urlId = useLocation();
  console.log(setSingleCoin, 'SINGLE COING')

  useEffect(() => {
    try {
      const id = urlId.pathname.split("_").reverse()[0];
      // @ts-ignore: Unreachable code error
      dispatch(fetchSingleCoin({ id }));
    } catch (error) {
      console.log(error);
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const resData = await axios.get("https://64ecb8f8f9b2b70f2bfad7a8.mockapi.io/crypto");
        setFavorite(resData.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [setFavorite]);

  const onAddFavorite = (
    str: string,
    symbol: string,
    market_cap_rank: number,
    current_price: number,
    market_cap: number,
    image: string
  ) => {
    const obj = {
      name: str,
      symbol: symbol,
      market_cap_rank: market_cap_rank,
      current_price: current_price,
      market_cap: market_cap,
      image: image,
    };
    if (imgStatus === 0) {
      try {
        axios.post("https://64ecb8f8f9b2b70f2bfad7a8.mockapi.io/crypto", obj);
        setImg(true);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const onRemoveFavorite = (str: string) => {
    const ID = favorite.find(({name}: { name: string }) => name === str).id;
    try {
      axios.delete(`https://64ecb8f8f9b2b70f2bfad7a8.mockapi.io/crypto/${ID}`);
      setFavorite(favorite.filter(({name}: { name: string }) => name !== str));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.single_mainBlock}>
      {/* <SingleCoin /> */}
      {singleStatus === "loading" ? (
        <Loader />
      ) : (
        <div className={style.coin_container}>
          <SingleCoinHead
            singleArrowImg={singleArrowImg}
            imgStatus={imgStatus}
            img={img}
            onRemoveFavorite={onRemoveFavorite}
            name={singlData.name}
            headId={singlData["id"]}
            unFavoriteImg={unFavoriteImg}
            addFavoriteImg={addFavoriteImg}
            onAddFavorite={onAddFavorite}
            symbol={singlData["symbol"]}
            marketCapRank={singlData["market_cap_rank"]}
            marketDataUsd={singlData["market_data"].current_price.usd.toLocaleString()}
            marketDataBmd={singlData["market_data"].market_cap.bmd}
            smallImg={singlData["image"].small}
          />

          <SingleCoinPrice
            marketCapRank={singlData["market_cap_rank"]}
            checkImg={singlData["image"]}
            smallImg={singlData["image"].small}
            name={singlData["name"]}
            symbol={singlData["symbol"]}
            checkMarketData={singlData["market_data"]}
            currentPrice={singlData["market_data"].current_price.usd}
          />

          <SingleTableInfo
            checkMarketData={singlData["market_data"]}
            marketDataCurrynce1H={
              singlData["market_data"].price_change_percentage_1h_in_currency.usd
            }
            marketDataCurrynce24h={
              singlData["market_data"].price_change_percentage_24h_in_currency.usd
            }
            marketDataCurrynce7d={
              singlData["market_data"].price_change_percentage_7d_in_currency.usd
            }
            marketDataCurrynce14d={
              singlData["market_data"].price_change_percentage_14d_in_currency.usd
            }
            marketDataCurrynce30d={
              singlData["market_data"].price_change_percentage_30d_in_currency.usd
            }
            marketDataCurrynce1y={
              singlData["market_data"].price_change_percentage_1y_in_currency.usd
            }
          />

          <SingleCoinMarketCup
            checkMarketData={singlData["market_data"]}
            marketDataCurrynce24hLow={singlData["market_data"].low_24h.usd}
            marketDataCurrynce24hHight={singlData["market_data"].high_24h.usd}
            marketCapUsd={singlData["market_data"].market_cap.usd}
            marketCapCirculating={singlData["market_data"].circulating_supply}
          />

          <SingleCoinInfo 
          descriptionEN={singlData["description"].en}
          descriptionCheck={singlData["description"]}
          />
        </div>
      )}
    </div>
  );
};

export default SingleCoinPage;
