import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import ProductListing from "./components/ProductListing";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route
                        path="/"
                        exact
                        element={<ProductListing />}
                    />
                    <Route
                        path="/product/:productId"
                        element={<ProductDetails />}
                    />
                    <Route>404 Not Found!</Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
