import { useContext } from "react";
import { CategoriesContext } from "../../context/categories-context/categories-context";
import CategoryPreview from "../../components/category-preview/category-preview";

const CategoriesPreview = () => {
    const { categories } = useContext(CategoriesContext);

    return (
        <>
            {Object.keys(categories).map((title) => {
                const products = categories[title];
                return (
                    <CategoryPreview
                        key={title}
                        title={title}
                        products={products}
                    />
                );
            })}
        </>
    );
};

export default CategoriesPreview;
