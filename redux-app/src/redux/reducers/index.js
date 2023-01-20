import { combineReducers } from "redux";
import { productReducer, selectedProductReducers } from "./productReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducers,
});

export default reducers;
