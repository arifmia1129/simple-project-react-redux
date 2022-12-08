import { loadProducts } from "../../actionCreators/productAction";

const fetchProducts = () => {
    return async (dispatch, getState) => {
        const res = await fetch("https://raw.githubusercontent.com/mir-hussain/moon-tech-starter-pack/version-2/public/products.json");

        const data = await res.json();
        if (data.length) {
            dispatch(loadProducts(data));
        }
    }
}

export default fetchProducts;