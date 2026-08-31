import "./cart-item.scss";

export type Item = {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    quantity: number;
};

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
