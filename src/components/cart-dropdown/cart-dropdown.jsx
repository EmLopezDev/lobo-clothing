import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart-selector";
import { useNavigate } from "react-router-dom";
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import "./cart-dropdown.scss";

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);

    const navigate = useNavigate();

    const gotToCheckoutHandler = () => navigate("/check-out");

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.length ? (
                    cartItems.map((item) => (
                        <CartItem
                            key={item.id}
                            cartItem={item}
                        />
                    ))
                ) : (
                    <span className="empty-message">Your cart is empty</span>
                )}
            </div>
            <Button onClick={gotToCheckoutHandler}>Go to checkout</Button>
        </div>
    );
};

export default CartDropdown;
