import { applyMiddleware, createStore } from "redux";
import productReducer from "./reducer/productReducer";
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from "./reducer/rootReuder";
import productCount from "./middleware/productCount";
import thunk from "redux-thunk";


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(productCount, thunk)));

export default store;