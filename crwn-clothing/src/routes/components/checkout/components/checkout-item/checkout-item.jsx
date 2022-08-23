import { CartContext } from "context/cart.context";
import PropTypes from "prop-types";
import { useContext } from "react";
import styles from "routes/components/checkout/components/checkout-item/checkout-item.module.scss";

export default function CheckoutItem({ id, name, imageUrl, price, quantity }) {
  const { removeFromCart, addToCart } = useContext(CartContext);
  const removeItemFromCart = () => removeFromCart(id);
  const removeItemsFromCart = () => removeFromCart(id, true);
  const addItemToCart = () => addToCart(id);

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
      <div className={styles["remove-button"]} onClick={removeItemsFromCart}>&#10005;</div>
    </div>
  );
}

CheckoutItem.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
