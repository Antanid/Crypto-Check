import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

type FavoriteProp = {

}

export const fetchFavoriteData = createAsyncThunk('FaviriteSlice/fetchFavoriteData', async (params: FavoriteProp) => {
    const fetchData = await axios.get('https://64ecb8f8f9b2b70f2bfad7a8.mockapi.io/crypto');
    return fetchData.data;
})