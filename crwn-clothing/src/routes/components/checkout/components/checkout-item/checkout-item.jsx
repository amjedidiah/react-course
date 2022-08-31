import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "redux/actions/cart.action";
import { selectCartItems } from "redux/selectors/cart.selector";
import { selectCategoryMap } from "redux/selectors/category.selector";
import styles from "routes/components/checkout/components/checkout-item/checkout-item.module.scss";

export default function CheckoutItem({
  id,
  name,
  imageUrl,
  price,
  quantity,
  category,
}) {
  const categoryMap = useSelector(selectCategoryMap);
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const removeItemFromCart = () => dispatch(removeFromCart({ id, cartItems }));
  const removeItemsFromCart = () =>
    dispatch(removeFromCart({ id, cartItems, removeAll: true }));
  const addItemToCart = () =>
    dispatch(addToCart({ id, category, categoryMap, cartItems }));

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

CheckoutItem.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
