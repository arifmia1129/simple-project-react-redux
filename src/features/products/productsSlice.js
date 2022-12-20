import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchingProducts } from "./productsApi";

const initialState = {
    products: [],
    isPending: false,
    isError: false,
    postSuccess: false,
    error: ''
}

export const getProducts = createAsyncThunk('products/getProducts', async () => {
    const products = fetchingProducts();
    return products;
})
export const postProduct = createAsyncThunk('products/postProduct', async (product) => {
    return product;
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
            .addCase(postProduct.pending, (state, action) => {
                state.isError = false;
                state.error = '';
                state.postSuccess = false;
                state.isPending = true
            })
            .addCase(postProduct.fulfilled, (state, action) => {
                state.products.push(action.payload);
                state.isError = false;
                state.error = '';
                state.postSuccess = true;
                state.isPending = false
            })
            .addCase(postProduct.rejected, (state, action) => {
                state.isError = true;
                state.error = action.error.message;
                state.isPending = false;
                state.postSuccess = false;
            })
    }
})


export default productsSlice.reducer;