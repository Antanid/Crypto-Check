import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import ConvertCryptoSlice from './ConvertCrypto/ConvertCryptoSlice'

export const store = configureStore({
    reducer: {
        ConvertCryptoSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();