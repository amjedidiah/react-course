import styles from "routes/components/shop/components/cart/components/cart-icon/cart-icon.module.scss";
import { ReactComponent as ShoppingIcon } from "assets/shopping-bag.svg";
import { useCallback, useContext } from "react";
import { CartContext } from "context/cart.context";

export default function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartItemsCount } = useContext(CartContext);

  const toggleCartDropdown = useCallback(() => {
    setIsCartOpen(!isCartOpen);
  }, [isCartOpen, setIsCartOpen])

  return (
    <div className={styles["cart-icon-container"]} onClick={toggleCartDropdown}>
      <ShoppingIcon className={styles["shopping-icon"]} />
      <span className={styles["item-count"]}>{cartItemsCount}</span>
    </div>
  );
}
