import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart-selector";
import { addItemToCart } from "../../store/cart/cart-actions";
import Button from "../button/button";
import "./product-card.scss";

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const cartItems = useSelector(selectCartItems);

    const dispatch = useDispatch();

    const handleAddItemToCart = () => dispatch(addItemToCart(cartItems, product));

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
