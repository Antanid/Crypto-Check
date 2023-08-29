import "./App.css";
import { Route, Routes, useLocation } from "react-router";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import MainPage from "./page/MainPage/MainPage";
import SingleCoinPage from "./page/SingleCoinPage/SingleCoinPage";
import FavoritePage from "./page/FavoritePage/FavoritePage";

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
