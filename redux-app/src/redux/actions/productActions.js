import fakeStoreApi from "../../apis/fakeStoreApi";
import { ActionTypes } from "../constants/action-types";

export const fetchProducts = () => async (dispatch, getState) => {
    const response = await fakeStoreApi.get("/products");
    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
};
export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};
export const selected_Products = (products) => {
    return {
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: products,
    };
};
export const fetchSingleProduct = (productId) => async (dispatch) => {
    const res = await fakeStoreApi.get(`/products/${productId}`);
    dispatch({ type: ActionTypes.SELECTED_PRODUCTS, payload: res.data });
};
