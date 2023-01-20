import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";

function ProductListing() {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const res = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log(`Error ${err}`);
            });
        dispatch(setProducts(res.data));
        // console.log("Fetched data", res.data);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    console.log("Products : ", products);
    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    );
}

export default ProductListing;
