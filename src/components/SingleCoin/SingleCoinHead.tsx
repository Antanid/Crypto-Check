import { Link } from "react-router-dom";
import style from "./style/style.module.scss";

type PropsSingleHead = {
  singleArrowImg: string;
  imgStatus: any;
  img: boolean;
  onRemoveFavorite: (str: string) => void;
  name: string;
  headId: string;
  unFavoriteImg: string;
  addFavoriteImg: string;
  onAddFavorite: (str: string,
    symbol: string,
    market_cap_rank: number,
    current_price: number,
    market_cap: number,
    image: string) => void;
    symbol: string;
    marketCapRank: number;
    marketDataUsd: number;
    marketDataBmd: number;
    smallImg: string;
};

const SingleCoinHead: React.FC<PropsSingleHead> = ({ singleArrowImg, imgStatus, img, onRemoveFavorite, name, headId, unFavoriteImg, addFavoriteImg, onAddFavorite, symbol, marketCapRank, marketDataUsd, marketDataBmd, smallImg}) => {
  return (
    <div className={style.content}>
      <Link to="/">
        <button className={style.content_button}>
          <img src={singleArrowImg} alt="arrowBack" />
          Back
        </button>
      </Link>
      <div className={style.content_textFav}>
        <h1>{name}</h1>
        <img
          onClick={
            imgStatus > 0 || img === true
              ? () => onRemoveFavorite(headId)
              : () =>
                  onAddFavorite(
                    headId,
                    symbol,
                    marketCapRank,
                    marketDataUsd,
                    marketDataBmd,
                    smallImg
                  )
          }
          src={imgStatus > 0 || img === true ? unFavoriteImg : addFavoriteImg}
          alt="addFavorite"
        />
      </div>
    </div>
  );
};

export default SingleCoinHead;
