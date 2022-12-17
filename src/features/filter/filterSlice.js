import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    stock: false,
    brand: [],
    keyword: ""
}

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        toggleStock: (state) => {
            state.stock = !state.stock;
        },
        toggleBrand: (state, action) => {
            if (!state.brand.includes(action.payload)) {
                state.brand.push(action.payload);
            } else {
                state.brand = state.brand.filter(brand => brand !== action.payload)
            }
        }
    }
})

export const { toggleStock, toggleBrand } = filterSlice.actions;

export default filterSlice.reducer;