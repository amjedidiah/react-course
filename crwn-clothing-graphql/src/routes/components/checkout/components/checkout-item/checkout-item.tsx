import { CartContext } from "context/cart.context";
import { useCallback, useContext, memo } from "react";
import styles from "routes/components/checkout/components/checkout-item/checkout-item.module.scss";
import { CartItemProps } from "routes/components/shop/components/cart/components/cart-item/cart-item";

export function CheckoutItem({
  id,
  name,
  imageUrl,
  price,
  quantity,
  category,
}: CartItemProps) {
  const { removeFromCart, addToCart } = useContext(CartContext);

  const removeItemFromCart = useCallback(
    () => removeFromCart(id),
    [id, removeFromCart]
  );
  const removeItemsFromCart = useCallback(
    () => removeFromCart(id, true),
    [id, removeFromCart]
  );
  const addItemToCart = useCallback(
    () => addToCart(id, category),
    [addToCart, category, id]
  );

  return (
    <div className={styles["checkout-item-container"]}>
      <div className={styles["image-container"]}>
        <img src={imageUrl} alt={name} />
      </div>
      <div className={styles.name}>{name}</div>
      <div className={styles.quantity}>
        <span className={styles.arrow} onClick={removeItemFromCart}>
          &#10094;
        </span>
        <span className={styles.value}>{quantity}</span>
        <span className={styles.arrow} onClick={addItemToCart}>
          &#10095;
        </span>
      </div>
      <div className={styles.price}>{price}</div>
      <div className={styles["remove-button"]} onClick={removeItemsFromCart}>
        &#10005;
      </div>
    </div>
  );
}

export default memo(CheckoutItem);