import classNames from "classnames";
import PropTypes from "prop-types";
import { useMemo } from "react";
import styles from "routes/components/shop/components/category-preview/category-preview.module.scss";
import Product from "routes/components/shop/components/product/product";
import { useNavigateToCategory } from "routes/hooks/shop.hook";

export default function CategoryPreview({ title, items, shouldSlice }) {
  const navigateToCategory = useNavigateToCategory(title, shouldSlice);

  const products = useMemo(() => {
    return shouldSlice ? items.slice(0, 4) : items;
  }, [items, shouldSlice]);

  return (
    <div className={styles["category-preview-container"]}>
      <h2
        className={classNames(styles.title, {
          [styles.isLink]: shouldSlice,
        })}
        onClick={navigateToCategory}
      >
        <span>{title}</span>
        {shouldSlice && <span className={styles["link-arrow"]}>&#10095;</span>}
      </h2>
      <div
        className={classNames(styles.preview, {
          [styles.wider]: !shouldSlice,
        })}
      >
        {products.map((product) => (
          <Product key={`product-${product.id}`} {...product} />
        ))}
      </div>
    </div>
  );
}

CategoryPreview.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  shouldSlice: PropTypes.bool.isRequired,
};
