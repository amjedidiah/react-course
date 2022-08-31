import styles from "routes/components/shop/components/cart/components/cart-icon/cart-icon.module.scss";
import { ReactComponent as ShoppingIcon } from "assets/shopping-bag.svg";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartIsOpen,
  selectCartItemsCount,
} from "redux/selectors/cart.selector";
import { toggleCart } from "redux/actions/cart.action";

export default function CartIcon() {
  const isCartOpen = useSelector(selectCartIsOpen);
  const cartItemsCount = useSelector(selectCartItemsCount);
  const dispatch = useDispatch();

  const toggleCartDropdown = useCallback(() => {
    dispatch(toggleCart(!isCartOpen));
    // Disabled because dispatch is never updated throughout the React app lifecycle
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCartOpen]);

  return (
    <div className={styles["cart-icon-container"]} onClick={toggleCartDropdown}>
      <ShoppingIcon className={styles["shopping-icon"]} />
      <span className={styles["item-count"]}>{cartItemsCount}</span>
    </div>
  );
}
