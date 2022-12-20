import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "../features/cart/cartSlice";
import filterReducer from "../features/filter/filterSlice";
import productReducer from '../features/products/productsSlice'
import logger from 'redux-logger';
import { productApi } from '../features/api/apiSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        filter: filterReducer,
        products: productReducer,
        [productApi.reducerPath]: productApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware)
})