import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchConvertData } from "../../redux/ConvertCrypto/asyncConvertCrypto";
import {
  addCoin1,
  addCoin2,
  setCoin1,
  setCoin2,
  setConvertStatus,
  setConvertValue,
} from "../../redux/ConvertCrypto/ConvertCryptoSlice";
import Loader from "../Loader/Loader";
import { MouseParallax } from "react-just-parallax";

import swapImg from "../../assets/img/swapImg.png";
import coingBG from "../../assets/img/coin_bg1.png";
import coinBG2 from "../../assets/img/coin_bg2.png";

import style from "./style/style.module.scss";

const CoinCovert = () => {
  const dispatch = useDispatch();
  const [firstCoin, setFirstCoin] = useState<string>(`BTC`);
  const [secendCoin, setSecendCoin] = useState<string>(`USDT`);
  const [howMuch, setHowMuch] = useState<number>(1);
  const [convert, setConvert] = useState(false);
  const [swapConvert, setSwapConvert] = useState(false);

  const valueNum: any = useSelector(setConvertValue);
  const coin1 = useSelector(setCoin1);
  const coin2 = useSelector(setCoin2);
  const statusLoading = useSelector(setConvertStatus);

  useEffect(() => {
    // @ts-ignore: Unreachable code error
    dispatch(FetchConvertData({ firstCoin, secendCoin, howMuch, swapConvert }));
  }, [convert, swapConvert]);

  const onChangeHowMuch = (e: any) => {
    const num = e.target.value;
    if (+num > 0 || num === "") setHowMuch(num);
  };

  const onClickConvert = () => {
    setConvert((prev) => !prev);
    dispatch(addCoin1(firstCoin));
    dispatch(addCoin2(secendCoin));
  };

  const onSwapCoin = () => {
    setSwapConvert((prev) => !prev);
  };

  return (
    <div className={style.convert_block}>
      <div className={style.convert_text}>
        <h3>Cryptocurrency Converter Calculator</h3>
      </div>

      <div className={style.convert_input}>
        <div>
          <input
            type="text"
            value={firstCoin}
            onChange={(e) => setFirstCoin(e.target.value.toUpperCase())}
          />
        </div>

        <div className={style.convert_swap}>
          <button onClick={onSwapCoin}>
            <img src={swapImg} alt="swapCoin" />
          </button>
        </div>

        <div>
          <input
            type="text"
            value={secendCoin}
            onChange={(e) => setSecendCoin(e.target.value.toUpperCase())}
          />
        </div>

        <div className={style.convert_howMuch}>
          <input type="number" value={howMuch} onChange={(e) => onChangeHowMuch(e)} />
        </div>
        <button className={style.convert_buttonSearch} onClick={onClickConvert}>
          Convert
        </button>
      </div>

      <div className={style.convert_result}>
        {statusLoading === "loading" ? (
          <Loader />
        ) : (
          <h1>
            {valueNum[coin1]} {coin1} = {valueNum[coin2]} {coin2}
          </h1>
        )}
      </div>

      <div className={style.convert_bg_coin1}>
        <MouseParallax enableOnTouchDevice isAbsolutelyPositioned>
          <img className={style.convert_first} src={coingBG} alt="bg_coin" />
          <img className={style.convert_second} src={coinBG2} alt="bg_coin" />
        </MouseParallax>
      </div>
    </div>
  );
};

export default CoinCovert;
