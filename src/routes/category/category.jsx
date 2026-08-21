import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../context/categories-context/categories-context";
import ProductCard from "../../components/product-card/product-card";
import "./category.scss";

const Category = () => {
    const { category } = useParams();
    const { categories } = useContext(CategoriesContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = () => {
            setProducts(categories[category]);
        };
        getProducts();
    }, [categories, category]);

    return (
        <div className="category-container">
            {products &&
                products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
        </div>
    );
};

export default Category;
