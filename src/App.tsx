import "./App.css";
import { Route, Routes, useLocation } from "react-router";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import { lazy, Suspense } from "react";

const MainPage = lazy(() => import("./page/MainPage/MainPage"));
const SingleCoinPage = lazy(() => import("./page/SingleCoinPage/SingleCoinPage"));
const FavoritePage = lazy(() => import("./page/FavoritePage/FavoritePage"));
const LogIn = lazy(() => import("./components/LogIn/LogIn"));
const SignUp = lazy(() => import("./components/SingUp/SignUp"));
const ConfirmEmail = lazy(() => import("./components/ConfirmEmail/ConfirmEmail"));

function App() {
  const singlId = useLocation();
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense>
              <MainPage />
            </Suspense>
          }
        />
        <Route
          path={`/single_coin_${singlId.pathname.split("_").reverse()[0]}`}
          element={
            <Suspense>
              <SingleCoinPage />
            </Suspense>
          }
        />
        <Route
          path="/favorite-page"
          element={
            <Suspense>
              <FavoritePage />
            </Suspense>
          }
        />
        <Route
          path="/log_in"
          element={
            <Suspense>
              <LogIn />
            </Suspense>
          }
        />
        <Route
          path="/sign_up"
          element={
            <Suspense>
              <SignUp />
            </Suspense>
          }
        />
        <Route
          path="/verification_email"
          element={
            <Suspense>
              <ConfirmEmail />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
