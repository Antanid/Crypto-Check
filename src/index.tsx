import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ParallaxProvider } from "react-scroll-parallax";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <ParallaxProvider>
    <App />
    </ParallaxProvider>
  </Provider>
);
