import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import ProductListing from "./components/ProductListing";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Link to={`/`}>
                    <Header />
                </Link>
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

/**
 * Reducers -> actual logic functions (how to do)
 * Actions -> what to do
 * Store -> Where to do
 */
