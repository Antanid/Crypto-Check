import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavoriteData } from "../../redux/Favorite/asyncFavorite";

import { setFavoriteData, setFavoriteStatus } from "../../redux/Favorite/FavoriteSlice";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

import style from "../../components/Favorite/style/style.module.scss";
import FavotiteFirstLine from "../../components/Favorite/FavotiteFirstLine";
import FavoriteList from "../../components/Favorite/FavoriteList";

const FavoritePage = () => {
  const dispatch = useDispatch();
  const favoriteData = useSelector(setFavoriteData);
  const favoriteStatus = useSelector(setFavoriteStatus);
  useEffect(() => {
    try {
      //@ts-ignore
      dispatch(fetchFavoriteData());
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className={style.favotite_mainBlock}>
      <FavotiteFirstLine />
      {favoriteStatus === "loading" ? <Loader /> : <FavoriteList favoriteData={favoriteData} />}
    </div>
  );
};

export default FavoritePage;
