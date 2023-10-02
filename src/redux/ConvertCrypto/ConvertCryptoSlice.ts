import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store"
import { Status } from "../types"
import { FetchConvertData } from "./asyncConvertCrypto"

const initialState = {
    coin1: 'BTC',
    coin2: 'USDT',
    status: Status.LOADING,
    value: []
}

const ConvertCryptoSlice = createSlice({
    name: 'ConvertCrypto',
    initialState,
    reducers: {
        addCoin1: (state, action) => {
            state.coin1 = action.payload;
        },
        addCoin2: (state, action) => {
            state.coin2 = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(FetchConvertData.pending, (state) => {
            state.status = Status.LOADING;
            state.value = [];
        })
        builder.addCase(FetchConvertData.fulfilled, (state, action) => {
            state.status = Status.SUCCESS;
            state.value = action.payload;
        })
        builder.addCase(FetchConvertData.rejected, (state) => {
            state.status = Status.ERROR;

        })
    }
});

export const { addCoin1, addCoin2 } = ConvertCryptoSlice.actions;

export const setConvertValue = (state: RootState) => state.ConvertCryptoSlice.value;
export const setCoin1 = (state: RootState) => state.ConvertCryptoSlice.coin1;
export const setCoin2 = (state: RootState) => state.ConvertCryptoSlice.coin2;
export const setConvertStatus = (state: RootState) => state.ConvertCryptoSlice.status;

export default ConvertCryptoSlice.reducer;