import { ActionTypes } from "../constants/action-types";

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
