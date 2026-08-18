import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/user-context/user-provider.jsx";
import { ProductsProvider } from "./context/products-context/products-provider.jsx";
import App from "./App.jsx";
import "./index.scss";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <UserProvider>
                <ProductsProvider>
                    <App />
                </ProductsProvider>
            </UserProvider>
        </BrowserRouter>
    </StrictMode>,
);
