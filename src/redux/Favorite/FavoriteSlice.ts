import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Status } from "../types";
import { fetchFavoriteData } from "./asyncFavorite";

const initialState = {
    status: Status.LOADING,
    favorite: []
};

const FaviriteSlice = createSlice({
    name: 'FaviriteSlice',
    initialState,
    reducers: {

    },
extraReducers: (builder) => {
    builder.addCase(fetchFavoriteData.pending, (state) => {
        state.status = Status.LOADING;
        state.favorite = []
    });
    builder.addCase(fetchFavoriteData.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        state.favorite = action.payload;
    });
    builder.addCase(fetchFavoriteData.rejected, (state) => {
        state.status = Status.ERROR;
        state.favorite = []
    });
}
});

export const setFavoriteData = (state: RootState) => state.FavoriteSlice.favorite;
export const setFavoriteStatus = (state: RootState) => state.FavoriteSlice.status;

export default FaviriteSlice.reducer;