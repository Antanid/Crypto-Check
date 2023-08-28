import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import ConvertCryptoSlice from './ConvertCrypto/ConvertCryptoSlice'
import AllCoinsSlice from "./AllCoins/AllCoinsSlice";
import SingleCoinSlice from "./SingleCoin/SingleCoinSlice";

export const store = configureStore({
    reducer: {
        ConvertCryptoSlice,
        AllCoinsSlice,
        SingleCoinSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();