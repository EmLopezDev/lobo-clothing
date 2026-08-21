import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/user-context/user-provider.jsx";
import { CategoriesProvider } from "./context/categories-context/categories-provider.jsx";
import { CartProvider } from "./context/cart-context/cart-provider.jsx";
import App from "./App.jsx";
import "./index.scss";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <UserProvider>
                <CategoriesProvider>
                    <CartProvider>
                        <App />
                    </CartProvider>
                </CategoriesProvider>
            </UserProvider>
        </BrowserRouter>
    </StrictMode>,
);
