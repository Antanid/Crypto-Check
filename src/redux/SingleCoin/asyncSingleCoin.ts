import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type PropsSingleCoin = {
    id: string;
    urlId: string;
};

export const fetchSingleCoin = createAsyncThunk('SingleCoinSlice/fetchSingleCoin', async (params: PropsSingleCoin) => {
    const { id } = params;
    const fetchData = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
    return fetchData.data;
  
})