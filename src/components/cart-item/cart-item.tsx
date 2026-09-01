import { type CartItem as Item } from "../../store/cart/cart-reducer";
import "./cart-item.scss";

type CartItemProps = {
    cartItem: Omit<Item, "id">;
};

const CartItem = ({ cartItem }: CartItemProps) => {
    const { name, price, imageUrl, quantity } = cartItem;
    return (
        <div className="cart-item-container">
            <img
                src={imageUrl}
                alt={`${name}`}
            />
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">
                    {quantity} x ${price}
                </span>
            </div>
        </div>
    );
};

export default CartItem;
