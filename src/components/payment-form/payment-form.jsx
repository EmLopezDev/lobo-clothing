import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart-selector";
import { selectCurrentUser } from "../../store/user/user-selector";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button from "../button/button";
import "./payment-form.scss";

export const PaymentForm = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    const amount = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);

    const paymentHandler = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) return;
        setIsProcessing(true);
        try {
            const response = await fetch("/.netlify/functions/create-payment-intent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ amount: amount * 100 }),
            }).then((res) => res.json());

            const clientSecret = response.client_secret;
            const paymentResult = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                    billing_details: {
                        name: currentUser ? currentUser.displayName : "Guest",
                    },
                },
            });

            if (paymentResult.error) {
                alert(paymentResult.error.message);
            } else {
                if (paymentResult.paymentIntent.status === "succeeded") {
                    alert("Payment Successful");
                }
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="payment-form-container">
            <form onSubmit={paymentHandler}>
                <h2>Credit Card Payment: </h2>
                <CardElement />
                <Button
                    type="submit"
                    buttonType="inverted"
                    isLoading={isProcessing}
                >
                    Pay Now
                </Button>
            </form>
        </div>
    );
};
