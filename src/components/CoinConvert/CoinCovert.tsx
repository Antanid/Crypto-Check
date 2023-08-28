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

import swapImg from "../../assets/img/swapImg.png";
import coingBG from "../../assets/img/coin_bg1.png";
import coinBG2 from "../../assets/img/coin_bg2.png";

import style from "./style/style.module.scss";
import ConvertFirstLine from "./ConvertFirstLine";
import ConvertInput from "./ConvertInput";
import CoinValue from "./CoinValue";
import ConvertBgImg from "./ConvertBgImg";

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
    if (event.key === "Enter") {
      console.log("HELLO");
    }
    // or you can send to backend
  };
  const onClickConvert = () => {
    setConvert((prev) => !prev);
    dispatch(addCoin1(firstCoin));
    dispatch(addCoin2(secendCoin));
    setOpenFiat(false);
    setOpenCrypto(false);
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
      <ConvertFirstLine str="Cryptocurrency Converter Calculator" />

      <ConvertInput
        onOpenCryptoList={onOpenCryptoList}
        firstCoin={firstCoin}
        setFirstCoin={setFirstCoin}
        openCrypto={openCrypto}
        cryptoList={cryptoList}
        onSelectCrypto={onSelectCrypto}
        onSwapCoin={onSwapCoin}
        swapImg={swapImg}
        onOpenFiatList={onOpenFiatList}
        secendCoin={secendCoin}
        setSecendCoin={setSecendCoin}
        openFiat={openFiat}
        fiatList={fiatList}
        onSelectFiat={onSelectFiat}
        howMuch={howMuch}
        onChangeHowMuch={onChangeHowMuch}
        handleSubmit={handleSubmit}
        onClickConvert={onClickConvert}
      />
      <CoinValue statusLoading={statusLoading} valueNum={valueNum} coin1={coin1} coin2={coin2} />

      <ConvertBgImg coingBG={coingBG} coinBG2={coinBG2} />
    </div>
  );
};

export default CoinCovert;
