import PropTypes from "prop-types";
import Button from "components/button/button";
import styles from "routes/components/shop/components/product/product.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectCategoryMap } from "redux/selectors/category.selector";
import { selectCartItems } from "redux/selectors/cart.selector";
import { addToCart } from "redux/actions/cart.action";

export default function Product({ name, price, imageUrl, id, category }) {
  const categoryMap = useSelector(selectCategoryMap);
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const addItemToCart = () =>
    dispatch(addToCart({ id, category, categoryMap, cartItems }));

  return (
    <div className={styles["product-card-container"]}>
      <img src={imageUrl} alt={name} />
      <div className={styles.footer}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>{price}</span>
      </div>
      <Button
        buttonType="inverted"
        value="Add to cart"
        onClick={addItemToCart}
      />
    </div>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  id: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
};

Product.defaultProps = {
  imageUrl: "",
};
