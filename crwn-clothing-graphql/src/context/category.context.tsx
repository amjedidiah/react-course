import { createContext, useEffect, useState } from "react";
// import PRODUCTS from "data/shop-data"
// import { addCollectionAndDocuments } from "utils/firebase.utils";
import { getCategoriesAndDocuments } from "utils/firebase.utils";

export interface Product {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  category: string;
}

export type Category = {
  title: string;
  items: Product[];
};

export type CategoryMap = {
  [title: string]: Product[];
};

export type ContextProvider = {
  children: React.ReactNode;
};

export const CategoryContext = createContext({
  categoryMap: {} as CategoryMap,
  categoryIsLoading: true,
});

export const CategoryProvider = ({ children }: ContextProvider) => {
  const [categoryMap, setCategoryMap] = useState<CategoryMap>({});
  const [categoryIsLoading, setCategoryIsLoading] = useState(true);

  useEffect(() => {
    const getCategories = async () => {
      const categories = await getCategoriesAndDocuments("categories");
      const map = categories.reduce((acc: CategoryMap, category: Category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items.map((item) => ({
          ...item,
          category: title.toLowerCase(),
        }));
        return acc;
      }, {});
      setCategoryMap(map);
      setCategoryIsLoading(false);
    };
    getCategories();

    /* Ought To Be Called One Time On The Backend */
    // const addCollection = async () => {
    //   await addCollectionAndDocuments('categories', PRODUCTS);
    // }
    // addCollection();
  }, []);

  return (
    <CategoryContext.Provider
      value={{ categoryMap, categoryIsLoading }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
