import PropTypes from "prop-types";
import { useMemo } from "react";
import "routes/components/shop/components/category-preview/category-preview.scss";
import Product from "routes/components/shop/components/product/product";
import { useNavigateToCategory } from "routes/hooks/shop.hook";

export default function CategoryPreview({ title, items, shouldSlice }) {
  const navigateToCategory = useNavigateToCategory(title, shouldSlice);

  const products = useMemo(() => {
    return shouldSlice ? items.slice(0, 4) : items;
  }, [items, shouldSlice]);

  return (
    <div className="category-preview-container">
      <h2 className="title" onClick={navigateToCategory}>
        <span>{title}</span>
      </h2>
      <div className={`preview ${shouldSlice ? "" : "wider"}`}>
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
