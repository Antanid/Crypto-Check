import "./App.css";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import MainPage from "./page/MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <Menu />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
