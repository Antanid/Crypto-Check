import { useSelector } from "react-redux";
import SingleCoin from "../../components/SingleCoin/SingleCoin";
import style from "../../components/SingleCoin/style/style.module.scss";
import { setSingleCoin, setSingleStatus } from "../../redux/SingleCoin/SingleCoinSlice";
import DOMPurify from "dompurify";
import Loader from "../../components/Loader/Loader";
import singleArrowImg from "../../assets/img/singleArrow.png";
import { Link } from "react-router-dom";
import addFavoriteImg from "../../assets/img/addFavorite.png";
import unFavoriteImg from "../../assets/img/unFavorite.png";
import axios from "axios";
import { useEffect, useState } from "react";

const SingleCoinPage = () => {
  const singleStatus = useSelector(setSingleStatus);
  const singlData: any = useSelector(setSingleCoin);
  const [img, setImg] = useState(false);
  const [favorite, setFavorite] = useState<any>([]);
  const imgStatus = favorite.filter((i: any) => i.name === singlData["id"]).length;

  console.log(favorite);

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

  const onAddFavorite = (str: string) => {
    const obj = {
      name: str,
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
    const ID = favorite.find((i: any) => i.name === str).id;
    try {
      axios.delete(`https://64ecb8f8f9b2b70f2bfad7a8.mockapi.io/crypto/${ID}`, );
      setFavorite(favorite.filter((item: any) => item.name !== str));
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
          <div className={style.content}>
            <Link to="/">
              <button className={style.content_button}>
                <img src={singleArrowImg} alt="arrowBack" />
                Back
              </button>
            </Link>
            <div className={style.content_textFav}>
              <h1>{singlData.name}</h1>
              <img
                onClick={imgStatus > 0 || img === true ? () => onRemoveFavorite(singlData["id"]) : () => onAddFavorite(singlData["id"])}
                src={imgStatus > 0 || img === true ? unFavoriteImg : addFavoriteImg}
                alt="addFavorite"
              />
            </div>
          </div>
          <div className={style.content}>
            <div className={style.rank}>
              <span className={style.rank_btn}>Rank # {singlData["market_cap_rank"]}</span>
            </div>
            <div className={style.info}>
              <div className={style.coin_heading}>
                <div className={style.coin_imgHeading_block}>
                {singlData["image"] ? <img src={singlData["image"].small} alt="" /> : null}
                </div>
                <p>{singlData["name"]}</p>
                {singlData["symbol"] ? <p>{singlData["symbol"].toUpperCase()}/USD</p> : null}
              </div>
              <div className={style.coin_price}>
                {singlData["market_data"]?.current_price ? (
                  <h1>${singlData["market_data"].current_price.usd.toLocaleString()}</h1>
                ) : null}
              </div>
            </div>
          </div>

          <div className={style.content}>
            <table>
              <thead>
                <tr>
                  <th>1h</th>
                  <th>24h</th>
                  <th>7d</th>
                  <th>14d</th>
                  <th>30d</th>
                  <th>1yr</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {singlData["market_data"]?.price_change_percentage_1h_in_currency ? (
                      <p>
                        {singlData[
                          "market_data"
                        ].price_change_percentage_1h_in_currency.usd.toFixed(1)}
                        %
                      </p>
                    ) : null}
                  </td>
                  <td>
                    {singlData["market_data"]?.price_change_percentage_24h_in_currency ? (
                      <p>
                        {singlData[
                          "market_data"
                        ].price_change_percentage_24h_in_currency.usd.toFixed(1)}
                        %
                      </p>
                    ) : null}
                  </td>
                  <td>
                    {singlData["market_data"]?.price_change_percentage_24h_in_currency ? (
                      <p>
                        {singlData[
                          "market_data"
                        ].price_change_percentage_7d_in_currency.usd.toFixed(1)}
                        %
                      </p>
                    ) : null}
                  </td>
                  <td>
                    {singlData["market_data"]?.price_change_percentage_24h_in_currency ? (
                      <p>
                        {singlData[
                          "market_data"
                        ].price_change_percentage_14d_in_currency.usd.toFixed(1)}
                        %
                      </p>
                    ) : null}
                  </td>
                  <td>
                    {singlData["market_data"]?.price_change_percentage_24h_in_currency ? (
                      <p>
                        {singlData[
                          "market_data"
                        ].price_change_percentage_30d_in_currency.usd.toFixed(1)}
                        %
                      </p>
                    ) : null}
                  </td>
                  <td>
                    {singlData["market_data"]?.price_change_percentage_24h_in_currency ? (
                      <p>
                        {singlData[
                          "market_data"
                        ].price_change_percentage_1y_in_currency.usd.toFixed(1)}
                        %
                      </p>
                    ) : null}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={style.content}>
            <div className={style.stats}>
              <div className="left">
                <div className={style.row}>
                  <h4>24 Hour Low</h4>
                  {singlData["market_data"]?.low_24h ? (
                    <p>${singlData["market_data"].low_24h.usd.toLocaleString()}</p>
                  ) : null}
                </div>
                <div className={style.row}>
                  <h4>24 Hour High</h4>
                  {singlData["market_data"]?.high_24h ? (
                    <p>${singlData["market_data"].high_24h.usd.toLocaleString()}</p>
                  ) : null}{" "}
                </div>
              </div>
              <div className="right">
                <div className="row">
                  <h4>Market Cap</h4>
                  {singlData["market_data"]?.market_cap ? (
                    <p>${singlData["market_data"].market_cap.usd.toLocaleString()}</p>
                  ) : null}
                </div>
                <div className="row">
                  <h4>Circulating Supply</h4>
                  {singlData["market_data"] ? (
                    <p>{singlData["market_data"].circulating_supply}</p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          <div className={style.content}>
            <div className={style.about}>
              <h3>About</h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    singlData["description"] ? singlData["description"].en : "Nothing"
                  ),
                }}
              ></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleCoinPage;
