import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [],
    isPending: false,
    isError: false,
    error: ''
}

export const getProducts = createAsyncThunk('products/getProducts', async () => {
    const res = await fetch("https://raw.githubusercontent.com/mir-hussain/moon-tech-starter-pack/version-2/public/products.json");

    const data = await res.json();
    return data;
})

const productsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.products = [];
                state.isError = false;
                state.error = '';
                state.isPending = true
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.isError = false;
                state.error = '';
                state.isPending = false
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.products = [];
                state.isError = true;
                state.error = action.error.message;
                state.isPending = false
            })
    }
})


export default productsSlice.reducer;