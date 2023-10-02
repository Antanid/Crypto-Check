import style from "./style/style.module.scss";

type PropConvertInput = {
  onOpenCryptoList: () => void;
  firstCoin: string;
  setFirstCoin: (type: string | ((prevState: string) => string)) => void;
  openCrypto: boolean;
  cryptoList: {
    name: string;
  }[];
  onSelectCrypto: (str: string) => void;
  onSwapCoin: () => void;
  swapImg: string;
  onOpenFiatList: () => void;
  secendCoin: string;
  setSecendCoin: (str: string) => void;
  openFiat: boolean;
  fiatList: {
    name: string;
  }[];
  onSelectFiat: (str: string) => void;
  howMuch: number;
  onChangeHowMuch: (e: React.FormEvent<HTMLInputElement>) => void;
  handleSubmit: (event: any) => void;
  onClickConvert: () => void;
};

const ConvertInput: React.FC<PropConvertInput> = ({
  onOpenCryptoList,
  firstCoin,
  setFirstCoin,
  openCrypto,
  cryptoList,
  onSelectCrypto,
  onSwapCoin,
  swapImg,
  onOpenFiatList,
  secendCoin,
  setSecendCoin,
  openFiat,
  fiatList,
  onSelectFiat,
  howMuch,
  onChangeHowMuch,
  handleSubmit,
  onClickConvert,
}) => {
  return (
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
      <div tabIndex={0} onKeyDown={handleSubmit}>
        <button className={style.convert_buttonSearch} onClick={onClickConvert}>
          Convert
        </button>
      </div>
    </div>
  );
};

export default ConvertInput;
