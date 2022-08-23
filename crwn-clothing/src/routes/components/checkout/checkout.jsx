import { CartContext } from "context/cart.context";
import { useContext } from "react";
import styles from "routes/components/checkout/checkout.module.scss";
import { reverseObject } from "utils/array.util";
import CheckoutItem from "routes/components/checkout/components/checkout-item/checkout-item";

const headerBlocks = ["Product", "Description", "Quantity", "Price", "Remove"];

export default function Checkout() {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className={styles["checkout-container"]}>
      <div className={styles["checkout-header"]}>
        {headerBlocks.map((headerBlock, i) => (
          <div className={styles["header-block"]} key={`header-block-${i}`}>
            <span>{headerBlock}</span>
          </div>
        ))}
      </div>
      {reverseObject(cartItems).map((item) => (
        <CheckoutItem key={item.id} {...item} />
      ))}
      <div className={styles.total}>
        <span>TOTAL: ${cartTotal}</span>
      </div>
    </div>
  );
}
