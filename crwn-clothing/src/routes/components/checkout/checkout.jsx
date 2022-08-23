import { CartContext } from "context/cart.context";
import { useContext } from "react";
import "routes/components/checkout/checkout.scss";
import { reverseObject } from "utils/array.util";
import CheckoutItem from "routes/components/checkout/components/checkout-item/checkout-item";

const headerBlocks = ["Product", "Description", "Quantity", "Price", "Remove"];

export default function Checkout() {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        {headerBlocks.map((headerBlock, i) => (
          <div className="header-block" key={`header-block-${i}`}>
            <span>{headerBlock}</span>
          </div>
        ))}
      </div>
      {reverseObject(cartItems).map((item) => (
        <CheckoutItem key={item.id} {...item} />
      ))}
      <div className="total">
        <span>TOTAL: ${cartTotal}</span>
      </div>
    </div>
  );
}
