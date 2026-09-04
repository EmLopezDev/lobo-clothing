import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCategoriesArray } from "../../store/categories/categories-selector";
import { useParams } from "react-router-dom";
import { type CategoryItem } from "../../store/categories/categories-reducer";
import ProductCard from "../../components/product-card/product-card";
import "./category.scss";

type CategoryRouteParams = {
    category: string;
};

const Category = () => {
    const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
    const categories = useSelector(selectCategoriesArray);
    const [products, setProducts] = useState<CategoryItem[]>([]);

    useEffect(() => {
        const getProducts = () => {
            setProducts(categories[category] ?? []);
        };
        getProducts();
    }, [categories, category]);

    return (
        <>
            <h2 className="category-title">{category?.toUpperCase()}</h2>
            <div className="category-container">
                {products &&
                    products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
            </div>
        </>
    );
};

export default Category;
