import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "../features/cart/cartSlice";
import filterReducer from "../features/filter/filterSlice";
import productReducer from '../features/products/productsSlice'
import logger from 'redux-logger';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        filter: filterReducer,
        products: productReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})