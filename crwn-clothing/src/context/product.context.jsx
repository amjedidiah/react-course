import { createContext, useEffect, useState } from "react";
import PRODUCTS from "data/shop-data"
import { objectifyArray } from "utils/array.util";

export const ProductContext = createContext({
  products: {},
  setProducts: () => {},
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState({});

  useEffect(() => { 
    setProducts(objectifyArray(PRODUCTS));
  }, []);

  return (
    <ProductContext.Provider
      value={{ products, setProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};
