import { ADD_TO_CART } from "../actionTypes/productActionTypes";

const productCount = (store) => (next) => (action) => {
    const state = store.getState();
    const cart = state.product.cart;

    if (action.type === ADD_TO_CART) {
        const newAction = {
            ...action,
            payload: { ...action.payload, position: cart.length + 1 }
        }
        return next(newAction);
    }
    return next(action)
}

export default productCount;