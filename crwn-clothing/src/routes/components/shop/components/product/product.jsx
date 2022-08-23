import { useContext } from "react";
import PropTypes from "prop-types";
import Button from "components/button/button";
import { CartContext } from "context/cart.context";
import styles from "routes/components/shop/components/product/product.module.scss";

export default function Product({ name, price, imageUrl, id, category }) {
  const { addToCart } = useContext(CartContext);

  const addItemToCart = () => addToCart(id, category);

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
