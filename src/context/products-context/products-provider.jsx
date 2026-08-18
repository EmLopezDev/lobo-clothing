import { useState, useEffect } from "react";
import { ProductsContext } from "./products-context";
import PRODUCTS from "../../shop-data.json";

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const fetchShopData = () => {
            setProducts(PRODUCTS);
        };
        fetchShopData();
    }, []);

    const value = {
        products,
        setProducts,
    };

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
