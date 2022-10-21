import { gql, useQuery } from "@apollo/client";
import { createContext, useEffect, useState } from "react";

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

export type CollectionData = {
  collections: Category[];
};

const COLLECTIONS = gql`
  query GetCollections {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

export const CategoryContext = createContext({
  categoryMap: {} as CategoryMap,
  categoryIsLoading: true,
});

export const CategoryProvider = ({ children }: ContextProvider) => {
  const [categoryMap, setCategoryMap] = useState<CategoryMap>({});
  const [categoryIsLoading, setCategoryIsLoading] = useState(true);
  const { loading, data } = useQuery<CollectionData>(COLLECTIONS);

  useEffect(() => {
    if (data) {
      const collectionMap = data?.collections.reduce(
        (acc: CategoryMap, category: Category) => {
          const { title, items } = category;
          acc[title.toLowerCase()] = items.map((item) => ({
            ...item,
            category: title.toLowerCase(),
          }));
          return acc;
        },
        {}
      );

      setCategoryMap(collectionMap!);
      setCategoryIsLoading(loading);
    }

    /* Ought To Be Called One Time On The Backend */
    // const addCollection = async () => {
    //   await addCollectionAndDocuments('categories', PRODUCTS);
    // }
    // addCollection();
  }, [data, loading]);

  return (
    <CategoryContext.Provider value={{ categoryMap, categoryIsLoading }}>
      {children}
    </CategoryContext.Provider>
  );
};
