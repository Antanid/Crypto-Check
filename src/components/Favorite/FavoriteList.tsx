import React from "react";
import { Link } from "react-router-dom";


import style from './style/style.module.scss'

type PropsFavoriteList = {
  favoriteData: {
    id: string;
    name: string;
    symbol: string;
    market_cap_rank: number;
    current_price: string;
    market_cap: number;
    image: string;
  }[];
};

type FavorileMap = {
  id: string;
  name: string;
  symbol: string;
  market_cap_rank: number;
  current_price: string;
  market_cap: number;
  image: string;
}

const FavoriteList: React.FC<PropsFavoriteList> = ({ favoriteData }) => {
  console.log(favoriteData)
  return (
 
    <div>
      {favoriteData.map((i: FavorileMap) => (
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
      ))}
    </div>
  );
};

export default FavoriteList;
