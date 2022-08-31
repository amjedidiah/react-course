import classNames from "classnames";
import Button from "components/button/button";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCartIsOpen, selectCartItemsArray } from "redux/selectors/cart.selector";
import styles from "routes/components/shop/components/cart/components/cart-dropdown/cart-dropdown.module.scss";
import CartItem from "routes/components/shop/components/cart/components/cart-item/cart-item";

export default function CartDropdown() {
  const navigate = useNavigate();
  const isCartOpen = useSelector(selectCartIsOpen);
  const cartItemsArray = useSelector(selectCartItemsArray);

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
