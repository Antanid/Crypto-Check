import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavoriteData } from "../../redux/Favorite/asyncFavorite";

import style from "../../components/Favorite/style/style.module.scss";
import { setFavoriteData, setFavoriteStatus } from "../../redux/Favorite/FavoriteSlice";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const FavoritePage = () => {
  const dispatch = useDispatch();
  const favoriteData = useSelector(setFavoriteData);
  const favoriteStatus = useSelector(setFavoriteStatus);
  useEffect(() => {
    //@ts-ignore
    dispatch(fetchFavoriteData());
  }, []);
  return (
    <div className={style.favotite_mainBlock}>
      <div className={style.coins_heading}>
        <p>Rank</p>
        <p className={style.coin_name}>Coin</p>
        <p>Price</p>
        <p className={style.hide_mobile}>Volume</p>
      </div>
      {favoriteStatus === "loading" ? (
        <Loader />
      ) : (
        favoriteData.map((i: any) => (
          <Link to={`/single_coin_${i.name}`}>
            <div key={i.id} className={style.coin_row}>
              <p>{i.market_cap_rank}</p>
              <div className={style.img_symbol}>
                <img src={i.image} alt="" />
                <p>{i.symbol.toUpperCase()}</p>
              </div>
              <p>${i.current_price.toLocaleString()}</p>

              <p className={style.hide_mobile}>${i.market_cap.toLocaleString()}</p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default FavoritePage;
