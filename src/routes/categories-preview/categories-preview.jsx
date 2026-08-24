import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/categories-selector";
import CategoryPreview from "../../components/category-preview/category-preview";

const CategoriesPreview = () => {
    const categories = useSelector(selectCategories);

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
