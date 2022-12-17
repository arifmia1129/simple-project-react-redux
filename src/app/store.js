import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import cartReducer from "../features/cart/cartSlice";
import filterReducer from "../features/filter/filterSlice";
import logger from 'redux-logger';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        filter: filterReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})