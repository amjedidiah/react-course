import { useContext } from "react";
import { ProductContext } from "context/product.context";
import { reverseObject } from "utils/array.util";
import Product from "routes/components/shop/components/product/product";
import "routes/components/shop/shop.scss"

export default function Shop() {
  const { products } = useContext(ProductContext);
  return (
    <div className="products-container">
      {reverseObject(products).map((product) => (
        <Product key={`product-${product.id}`} {...product} />
      ))}
    </div>
  );
}
