import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type PropsAllCoins = {
    pageNumber: number;
};

export const fetchAllCoins = createAsyncThunk('AllCoinsSlice/fetchAllCoins', async (params: PropsAllCoins) => {
    const { pageNumber } = params;
    const fetchData = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${pageNumber}&sparkline=false`);
    return fetchData.data;
});