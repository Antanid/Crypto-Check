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

  const [openCrypto, setOpenCrypto] = useState(false);
  const [cryptoList] = useState([
    {
      name: "BTC",
    },
    {
      name: "ETH",
    },
    {
      name: "BNB",
    },
    {
      name: "BUSD",
    },
    {
      name: "ADA",
    },
    {
      name: "SOL",
    },
  ]);

  const [openFiat, setOpenFiat] = useState(false);
  const [fiatList] = useState([
    {
      name: "USDT",
    },
    {
      name: "USD",
    },
    {
      name: "KRW",
    },
    {
      name: "JPY",
    },
    {
      name: "EUR",
    },
    {
      name: "GBP",
    },
  ]);

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

  const handleSubmit = (event: any) => {

    if (event.key === 'Enter') {
      console.log('HELLO')
    }
    // or you can send to backend
  };
  const onClickConvert = () => {
    setConvert((prev) => !prev);
    dispatch(addCoin1(firstCoin));
    dispatch(addCoin2(secendCoin));
    setOpenFiat(false);
    setOpenCrypto(false)
  };

  const onSwapCoin = () => {
    setSwapConvert((prev) => !prev);
  };

  const onOpenCryptoList = () => {
    setOpenCrypto((prev) => !prev);
  };

  const onOpenFiatList = () => {
    setOpenFiat((prev) => !prev);
  };

  const onSelectCrypto = (str: string) => {
    setFirstCoin(str);
    setOpenCrypto(false);
  };

  const onSelectFiat = (str: string) => {
    setSecendCoin(str);
    setOpenFiat(false);
  };

  return (
    <div id="ConvertCrypto" className={style.convert_block}>
      <div className={style.convert_text}>
        <h3>Cryptocurrency Converter Calculator</h3>
      </div>

      <div className={style.convert_input}>
        <div className={style.convert_value}>
          <input
            onClick={onOpenCryptoList}
            type="text"
            value={firstCoin}
            onChange={(e) => setFirstCoin(e.target.value.toUpperCase())}
          />
          {openCrypto && (
            <ul className={style.conver_crypto_popUp}>
              {cryptoList.map((i) => (
                <li
                  key={i.name}
                  className={firstCoin === i.name ? style.selected_li : ""}
                  onClick={() => onSelectCrypto(i.name)}
                >
                  {i.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={style.convert_swap}>
          <button onClick={onSwapCoin}>
            <img src={swapImg} alt="swapCoin" />
          </button>
        </div>

        <div className={style.convert_value}>
          <input
            onClick={onOpenFiatList}
            type="text"
            value={secendCoin}
            onChange={(e) => setSecendCoin(e.target.value.toUpperCase())}
          />
          {openFiat && (
            <ul className={style.conver_crypto_popUp}>
              {fiatList.map((i) => (
                <li
                  key={i.name}
                  className={secendCoin === i.name ? style.selected_li : ""}
                  onClick={() => onSelectFiat(i.name)}
                >
                  {i.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={style.convert_howMuch}>
          <input type="number" value={howMuch} onChange={(e) => onChangeHowMuch(e)} />
        </div>
        <div     
         tabIndex={0}
           onKeyDown={handleSubmit}>
          <button  
          className={style.convert_buttonSearch} 
          onClick={onClickConvert}
          >
            Convert
          </button>
        </div>
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
