import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button from "../button/button";
import "./payment-form.scss";

export const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const paymentHandler = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) return;

        const response = await fetch("/.netlify/functions/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ amount: 10000 }),
        }).then((res) => res.json());

        const clientSecret = response.client_secret;
        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: "Test User",
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
    };

    return (
        <div className="payment-form-container">
            <form onSubmit={paymentHandler}>
                <h2>Credit Card Payment: </h2>
                <CardElement />
                <Button
                    type="submit"
                    buttonType="inverted"
                >
                    Pay Now
                </Button>
            </form>
        </div>
    );
};
