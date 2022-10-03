import { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Button from "components/button/button";
import { useSelector } from "react-redux";
import styles from "./payment-form.module.scss";
import { selectCartTotal } from "redux/slices/cart.slice";
import { selectCurrentUser } from "redux/slices/user.slice";

export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isPaymentOngoing, setIsPaymentOngoing] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!(stripe && elements)) {
      return;
    }

    setIsPaymentOngoing(true);

    const res = await fetch("/.netlify/functions/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({ amount: amount * 100 }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret: clientSecret },
    } = res;
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setIsPaymentOngoing(false);

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else if (paymentResult.paymentIntent.status === "succeeded") {
      alert("Payment succeeded");
    }
  };

  return (
    <div className={styles["payment-form-container"]}>
      <form className={styles["form-container"]} onSubmit={paymentHandler}>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <Button
          className={styles["payment-button"]}
          loading={isPaymentOngoing}
          type="submit"
          value="Pay Now"
          buttonType="inverted"
        />
      </form>
    </div>
  );
}
