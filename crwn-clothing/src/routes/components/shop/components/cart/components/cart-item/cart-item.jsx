import styles from "routes/components/shop/components/cart/components/cart-item/cart-item.module.scss";
import PropTypes from "prop-types";

export default function CartItem({ name, quantity, price, imageUrl }) {
  return (
    <div className={styles["cart-item-container"]}>
      <img src={imageUrl} alt={name} />
      <div className={styles["item-details"]}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>
          {quantity} x {price}
        </span>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
