import { useContext } from "react";
import { CartContext } from "../../context/cart-context/cart-context";
import ShoppingIcon from "../../assets/shopping-bag.svg?react";

import "./cart-icon.scss";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);

    const toggleIsCarOpen = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <div
            className="cart-icon-container"
            onClick={toggleIsCarOpen}
        >
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    );
};

export default CartIcon;
