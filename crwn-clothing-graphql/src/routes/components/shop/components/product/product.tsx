import Button from "components/button/button";
import styles from "routes/components/shop/components/product/product.module.scss";
import { Product as ProductProps } from "context/category.context";
import { useCallback, useContext } from "react";
import { CartContext } from "context/cart.context";

export default function Product({
  name,
  price,
  imageUrl,
  id,
  category,
}: ProductProps) {
  const { addToCart } = useContext(CartContext);

  const addItemToCart = useCallback(
    () => addToCart(id, category),
    [addToCart, category, id]
  );

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
        className={styles["product-button"]}
      />
    </div>
  );
}
