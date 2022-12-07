import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes/productActionTypes";

const initialState = {
    cart: [],
};

const productReducer = (state = initialState, action) => {

    const selectedProduct = state.cart.find(c => c.model === action.payload.model);

    switch (action.type) {
        case ADD_TO_CART:
            if (selectedProduct) {
                return state
            }
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }]
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(c => c.model !== action.payload.model)
            }
        default:
            return state;
    }
}

export default productReducer;