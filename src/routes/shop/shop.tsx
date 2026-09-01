import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";
import { setCategories } from "../../store/categories/categories-reducer";
import { type Category as CategoryObj } from "../../store/categories/categories-reducer";
import CategoriesPreview from "../categories-preview/categories-preview";
import Category from "../category/category";

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getCategories = async () => {
            const categoriesArray = (await getCategoriesAndDocuments()) as CategoryObj[];
            dispatch(setCategories(categoriesArray));
        };
        getCategories();
    }, [dispatch]);

    return (
        <Routes>
            <Route
                index
                element={<CategoriesPreview />}
            />
            <Route
                path=":category"
                element={<Category />}
            />
        </Routes>
    );
};

export default Shop;
