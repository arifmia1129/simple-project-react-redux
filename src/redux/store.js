import { createStore } from "redux";
import productReducer from "./reducer/productReducer";
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from "./reducer/rootReuder";


const store = createStore(rootReducer, composeWithDevTools());

export default store;