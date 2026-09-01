import { useDispatch } from "react-redux";
import {
    addItemToCart,
    clearItemFromCart,
    removeItemFromCart,
} from "../../store/cart/cart-reducer";
import { type CartItem } from "../../store/cart/cart-reducer";
import "./check-out-item.scss";

type CheckoutItemProps = {
    cartItem: CartItem;
};

const CheckOutItem = ({ cartItem }: CheckoutItemProps) => {
    const { name, quantity, imageUrl, price } = cartItem;

    const dispatch = useDispatch();

    const addItemHandler = () => dispatch(addItemToCart(cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItem));
    const clearItemHandler = () => dispatch(clearItemFromCart(cartItem));

    return (
        <div className="check-out-item-container">
            <div className="image-container">
                <img
                    src={imageUrl}
                    alt={`${name}`}
                />
            </div>
            <span className="name"> {name} </span>
            <span className="quantity">
                <div
                    className="arrow"
                    onClick={removeItemHandler}
                >
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div
                    className="arrow"
                    onClick={addItemHandler}
                >
                    &#10095;
                </div>
            </span>
            <span className="price">${price}</span>
            <div
                className="remove-button"
                onClick={clearItemHandler}
            >
                &#10005;
            </div>
        </div>
    );
};

export default CheckOutItem;
