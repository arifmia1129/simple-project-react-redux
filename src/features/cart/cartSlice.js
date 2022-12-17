import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const selectedProduct = state.cart.find(cartProduct => cartProduct._id === product._id);

            if (!selectedProduct) {
                product.quantity = 1;
                state.cart.push(product);
            } else {
                const restProducts = state.cart.filter(product => product._id !== selectedProduct._id);
                selectedProduct.quantity += 1;
                restProducts.push(selectedProduct);
            }
        },
        removeFromCart: (state, action) => {
            if (action.payload.quantity > 1) {
                const product = {
                    ...action.payload,
                    quantity: action.payload.quantity - 1
                }
                state.cart = state.cart.filter(p => p._id !== product._id);
                state.cart.push(product);
            } else {
                state.cart = state.cart.filter(p => p._id !== action.payload._id)
            }
        }
    }
})

export default cartSlice.reducer;

export const { addToCart, removeFromCart } = cartSlice.actions;