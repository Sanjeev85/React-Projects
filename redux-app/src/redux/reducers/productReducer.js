import { Action } from "@remix-run/router";
import { ActionTypes } from "../constants/action-types";

const initialState = {
    products: [],
};
export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };
        case ActionTypes.FETCH_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    }
};

export const selectedProductReducers = (state = {}, { type, payload }) => {
    console.log("from reducer ", payload);
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return { ...state, ...payload };
        case ActionTypes.FETCH_PRODUCTS:
            return { ...state, ...payload };
        default:
            return state;
    }
};
