import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPage, setAllCoins, setAllStatus } from "../../redux/AllCoins/AllCoinsSlice";
import { fetchAllCoins } from "../../redux/AllCoins/asyncAllCoins";
import AllCoinsFirstLine from "./AllCoinsFirstLine";
import AllCoinsInfo from "./AllCoinsInfo";
import AllCoinsText from "./AllCoinsText";

import style from "./style/style.module.scss";

const AllCoins = () => {
  const dispatch = useDispatch();
  const AllCoins = useSelector(setAllCoins);
  const AllCoinsStatus = useSelector(setAllStatus);

  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    // @ts-ignore: Unreachable code error
    dispatch(fetchAllCoins({ pageNumber }));
    dispatch(addPage(pageNumber));
  }, [pageNumber, setPageNumber]);

  const onPrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber((prev) => prev - 1);
    }
  };

  const onNextPage = () => {
    setPageNumber((prev) => prev + 1);
  };

 
  return (
    <div className={style.all_coins}>
      <AllCoinsText str="Price of cryptocurrencies" />
      <AllCoinsFirstLine />
      <AllCoinsInfo
        pageNumber={pageNumber}
        AllCoins={AllCoins}
        AllCoinsStatus={AllCoinsStatus}
        onNextPage={onNextPage}
        onPrevPage={onPrevPage}
      />
    </div>
  );
};

export default AllCoins;
