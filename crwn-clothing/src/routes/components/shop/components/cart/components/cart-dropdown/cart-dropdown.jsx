import classNames from "classnames";
import Button from "components/button/button";
import { CartContext } from "context/cart.context";
import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "routes/components/shop/components/cart/components/cart-dropdown/cart-dropdown.module.scss";
import CartItem from "routes/components/shop/components/cart/components/cart-item/cart-item";

export default function CartDropdown() {
  const { isCartOpen, cartItemsArray } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckout = useCallback(() => navigate("/checkout"), [navigate]);

  return (
    <div className={classNames(styles["cart-dropdown-container"], {
        [styles.hide]: !isCartOpen,
      })}
    >
      <div className={styles["cart-items"]}>
        {cartItemsArray.length ? (
          cartItemsArray.map((cartItem) => (
            <CartItem key={`cartItem-${cartItem.id}`} {...cartItem} />
          ))
        ) : (
          <span className={styles["empty-message"]}>Your cart is empty</span>
        )}
      </div>
      <Button
        value="GO TO CHECKOUT"
        onClick={goToCheckout}
        disabled={!cartItemsArray.length}
      />
    </div>
  );
}
