import { TOGGLE_BRAND, TOGGLE_STOCK } from "../actionTypes/filterActionTypes";

const initialState = {
    filter: {
        brand: [],
        stock: false
    }
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_BRAND:
            if (!state.filter.brand.includes(action.payload)) {
                return {
                    ...state,
                    filter: {
                        ...state.filter,
                        brand: [...state.filter.brand, action.payload]
                    }
                }
            } else {
                return {
                    ...state,
                    filter: {
                        ...state.filter,
                        brand: state.filter.brand.filter(brand => brand.id !== action.payload.id)
                    }
                }
            }
        case TOGGLE_STOCK:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    stock: !state.filter.stock
                }
            }
        default:
            return state
    }
}

export default filterReducer;