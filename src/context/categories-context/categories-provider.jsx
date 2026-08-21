import { useState, useEffect } from "react";
import { CategoriesContext } from "./categories-context";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";

export const CategoriesProvider = ({ children }) => {
    const [categories, setCategories] = useState({});

    useEffect(() => {
        const getCategories = async () => {
            const categories = await getCategoriesAndDocuments();
            setCategories(categories);
        };
        getCategories();
    }, []);

    const value = {
        categories,
        setCategories,
    };

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};
