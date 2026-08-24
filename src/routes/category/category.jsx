import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/categories-selector";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card";
import "./category.scss";

const Category = () => {
    const { category } = useParams();
    const categories = useSelector(selectCategories);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = () => {
            setProducts(categories[category]);
        };
        getProducts();
    }, [categories, category]);

    return (
        <>
            <h2 className="category-title">{category.toUpperCase()}</h2>
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
