import Button from "components/button/button";
import styles from "routes/components/shop/components/product/product.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectCategoryMap } from "redux/slices/category.slice";
import { selectCartItems, addToCart } from "redux/slices/cart.slice";
import { Product as ProductProps } from "redux/redux.types";
import { useCallback, memo } from "react";

export function Product({
  name,
  price,
  imageUrl,
  id,
  category,
}: ProductProps) {
  const categoryMap = useSelector(selectCategoryMap);
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const addItemToCart = useCallback(
    () => dispatch(addToCart({ id, category, categoryMap, cartItems })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [cartItems, category, categoryMap, id]
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

export default memo(Product);