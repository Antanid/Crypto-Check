import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TypeFetchConvert = {
    firstCoin: string,
    secendCoin: string,
    howMuch: string,
    swapConvert: boolean,
};

export const FetchConvertData = createAsyncThunk('TypeFetchConvert/ConvertCryptoSlice', async (params: TypeFetchConvert) => {
    const { firstCoin, secendCoin, howMuch, swapConvert } = params;
    const fetchData = await axios.get(swapConvert ? `https://api.coinconvert.net/convert/${secendCoin}/${firstCoin}?amount=${howMuch}` :
        `https://api.coinconvert.net/convert/${firstCoin}/${secendCoin}?amount=${howMuch}`
    )
   
    return fetchData.data;
})