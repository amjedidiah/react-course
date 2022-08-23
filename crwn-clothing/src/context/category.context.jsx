import { createContext, useEffect, useState } from "react";
// import PRODUCTS from "data/shop-data"
// import { addCollectionAndDocuments } from "utils/firebase.utils";
import { getCategoriesAndDocuments } from "utils/firebase.utils";

export const CategoryContext = createContext({
  categoryMap: {},
  setCategoryMap: () => {},
});

export const CategoryProvider = ({ children }) => {
  const [categoryMap, setCategoryMap] = useState({});

  useEffect(() => { 
    const getCategories = async () => {
      const categories = await getCategoriesAndDocuments("categories");
      setCategoryMap(categories);
    }
    getCategories();

    /* Ought To Be Called One Time On The Backend */
    // const addCollection = async () => {
    //   await addCollectionAndDocuments('categories', PRODUCTS);
    // }
    // addCollection();
  }, []);

  return (
    <CategoryContext.Provider
      value={{ categoryMap, setCategoryMap }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
