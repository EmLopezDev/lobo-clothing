import { useSelector } from "react-redux";
import { selectCartTotal, selectCartItems } from "../../store/cart/cart-selector";
import CheckOutItem from "../../components/check-out-item/check-out-item";
import { PaymentForm } from "../../components/payment-form/payment-form";
import "./check-out.scss";

const CheckOut = () => {
    const cartTotal = useSelector(selectCartTotal);
    const cartItems = useSelector(selectCartItems);
    return (
        <div className="check-out-container">
            <div className="check-out-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((cartItem) => (
                <CheckOutItem
                    key={cartItem.id}
                    cartItem={cartItem}
                />
            ))}
            <span className="total">{`Total: $${cartTotal}`}</span>
            <PaymentForm />
        </div>
    );
};

export default CheckOut;
