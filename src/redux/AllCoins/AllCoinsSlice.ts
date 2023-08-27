import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Status } from "../types";
import { fetchAllCoins } from "./asyncAllCoins";

const initialState = {
    status: Status.LOADING,
    coins: [],
    page: 1,
}

const AllCoinsSlice = createSlice({
    name: 'AllCoinsSlice',
    initialState,
    reducers: {
        addPage: (state, action) => {
            state.page = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllCoins.pending, (state) => {
            state.status = Status.LOADING;
            state.coins = []
        })
        builder.addCase(fetchAllCoins.fulfilled, (state, action) => {
            state.status = Status.SUCCESS;
            state.coins = action.payload;
        })
        builder.addCase(fetchAllCoins.rejected, (state) => {
            state.status = Status.ERROR;
            state.coins = [];
        })
    }
});

export const { addPage } = AllCoinsSlice.actions;

export const setAllCoins = (state: RootState) => state.AllCoinsSlice.coins;
export const setAllStatus = (state: RootState) => state.AllCoinsSlice.status;


export default AllCoinsSlice.reducer;
