import "./App.css";
import { Route, Routes, useLocation } from "react-router";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import { lazy } from "react";

const MainPage = lazy(() => import ("./page/MainPage/MainPage"));
const SingleCoinPage = lazy(() => import ("./page/MainPage/MainPage"));
const FavoritePage = lazy(() => import ("./page/FavoritePage/FavoritePage"));



function App() {
  const singlId = useLocation();
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path={`/single_coin_${singlId.pathname.split('_').reverse()[0]}`} element={<SingleCoinPage />} />
        <Route path="favorite-page" element={<FavoritePage/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
