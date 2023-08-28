import Loader from "../Loader/Loader";

import style from "./style/style.module.scss";

type PropsCoinValue = {
  statusLoading: string;
  valueNum: any;
  coin1: string;
  coin2: string;
};

const CoinValue: React.FC<PropsCoinValue> = ({ statusLoading, valueNum, coin1, coin2}) => {
  return (
    <div className={style.convert_result}>
      {statusLoading === "loading" ? (
        <Loader />
      ) : (
        <h1>
          {valueNum[coin1]} {coin1} = {valueNum[coin2]} {coin2}
        </h1>
      )}
    </div>
  );
};

export default CoinValue;
