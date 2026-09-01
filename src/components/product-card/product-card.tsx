import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart/cart-reducer";
import { type CategoryItem } from "../../store/categories/categories-reducer";
import Button from "../button/button";
import "./product-card.scss";

type ProductCardProps = {
    product: CategoryItem;
};

const ProductCard = ({ product }: ProductCardProps) => {
    const { name, price, imageUrl } = product;

    const dispatch = useDispatch();

    const handleAddItemToCart = () => dispatch(addItemToCart(product));

    return (
        <div className="product-card-container">
            <img
                src={imageUrl}
                alt={`${name}`}
            />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button
                buttonType="inverted"
                onClick={handleAddItemToCart}
            >
                Add to cart
            </Button>
        </div>
    );
};

export default ProductCard;
