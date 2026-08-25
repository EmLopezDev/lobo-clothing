import { useSelector, useDispatch } from "react-redux";
import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart-selector";
import { setIsCartOpen } from "../../store/cart/cart-actions";
import ShoppingIcon from "../../assets/shopping-bag.svg?react";
import "./cart-icon.scss";

const CartIcon = () => {
    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);

    const toggleIsCarOpen = () => dispatch(setIsCartOpen(!isCartOpen));

    return (
        <div
            className="cart-icon-container"
            onClick={toggleIsCarOpen}
        >
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{cartCount}</span>
        </div>
    );
};

export default CartIcon;
