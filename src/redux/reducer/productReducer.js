import { ADD_TO_CART, LOAD_PRODUCTS, REMOVE_FROM_CART } from "../actionTypes/productActionTypes";

const initialState = {
    products: [],
    cart: [],
};

const productReducer = (state = initialState, action) => {

    const selectedProduct = state.cart.find(c => c.model === action.payload.model);

    switch (action.type) {
        case LOAD_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case ADD_TO_CART:
            if (selectedProduct) {
                const newCart = state.cart.filter(c => c.model !== selectedProduct.model);

                selectedProduct.quantity = selectedProduct.quantity + 1;
                return {
                    ...state,
                    cart: [...newCart, selectedProduct]
                }
            }
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }]
            }
        case REMOVE_FROM_CART:
            if (selectedProduct.quantity > 1) {
                const newCart = state.cart.filter(c => c.model !== selectedProduct.model);

                selectedProduct.quantity = selectedProduct.quantity - 1;
                return {
                    ...state,
                    cart: [...newCart, selectedProduct]
                }
            }
            return {
                ...state,
                cart: state.cart.filter(c => c.model !== action.payload.model)
            }
        default:
            return state;
    }
}

export default productReducer;