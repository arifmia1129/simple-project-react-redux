import { ADD_TO_CART, LOAD_PRODUCTS, REMOVE_FROM_CART } from "../actionTypes/productActionTypes"

export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export const removeFromCart = (product) => {
    return {
        type: REMOVE_FROM_CART,
        payload: product
    }
}

export const loadProducts = (data) => {
    return {
        type: LOAD_PRODUCTS,
        payload: data
    }
}