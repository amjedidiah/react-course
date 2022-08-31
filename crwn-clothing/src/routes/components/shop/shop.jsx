import { useEffect, useMemo, useState } from "react";
import styles from "routes/components/shop/shop.module.scss";
import CategoryPreview from "routes/components/shop/components/category-preview/category-preview";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCategoryMap } from "redux/selectors/category.selector";
import { getCategoriesAndDocuments } from "utils/firebase.utils";
import { setCategories } from "redux/actions/category.action";

export default function Shop() {
  const categoryMap = useSelector(selectCategoryMap);
  const [shouldSlice, setShouldSlice] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();
  const category = params["*"].split("/")[0];

  useEffect(() => {
    const getCategories = async () => {
      const categories = await getCategoriesAndDocuments("categories");
      return dispatch(setCategories(categories))
    };
    getCategories();

    /* Ought To Be Called One Time On The Backend */
    // const addCollection = async () => {
    //   await addCollectionAndDocuments('categories', PRODUCTS);
    // }
    // addCollection();
    // Disabled because dispatch is never updated throughout the React app lifecycle
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const categoryKeys = useMemo(() => {
    if (category) {
      if (categoryMap[category]) {
        setShouldSlice(false);
        return [category];
      }
      return [];
    } else {
      setShouldSlice(true);
      return Object.keys(categoryMap);
    }
  }, [category, categoryMap]);

  if (categoryMap && !categoryKeys.length && category) {
    return <h2>No products for category {category}</h2>;
  }

  return (
    <div className={styles["shop-container"]}>
      {categoryKeys.map((title) => (
        <CategoryPreview
          key={title}
          title={title}
          items={categoryMap[title]}
          shouldSlice={shouldSlice}
        />
      ))}
    </div>
  );
}
