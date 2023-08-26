import style from "./style/style.module.scss";
import { LineWave } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className={style.loader}>
      <LineWave
        height="100"
        width="100"
        color="red"
        firstLineColor="green"
        ariaLabel="line-wave"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        middleLineColor="red"
        lastLineColor="green"
      />
    </div>
  );
};

export default Loader;
