import "./App.css";
import { Route, Routes } from "react-router";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import MainPage from "./page/MainPage/MainPage";
import SingleCoinPage from "./page/SingleCoinPage/SingleCoinPage";

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path={`single_coin`} element={<SingleCoinPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
