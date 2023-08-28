import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Status } from "../types";
import { fetchSingleCoin } from "./asyncSingleCoin";

const initialState = {
    status: Status.LOADING,
    single: []
}

const SingleCoinSlice = createSlice({
    name: 'SingleCoinSlice',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchSingleCoin.pending, (state) => {
            state.status = Status.LOADING;
            state.single = [];
        });
        builder.addCase(fetchSingleCoin.fulfilled, (state, action) => {
            state.status = Status.SUCCESS;
            state.single = action.payload;
        });
        builder.addCase(fetchSingleCoin.rejected, (state) => {
            state.status = Status.ERROR;
            state.single = [];
        });
    }
});

export const setSingleCoin = (state: RootState) => state.SingleCoinSlice.single;
export const setSingleStatus= (state: RootState) => state.SingleCoinSlice.status;


export default SingleCoinSlice.reducer;