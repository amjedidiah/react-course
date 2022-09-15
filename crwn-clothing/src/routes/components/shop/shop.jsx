import { useEffect, useMemo, useState } from "react";
import styles from "routes/components/shop/shop.module.scss";
import CategoryPreview from "routes/components/shop/components/category-preview/category-preview";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCategoryLoading,
  selectCategoryMap,
} from "redux/selectors/category.selector";
import { fetchCategoriesStart } from "redux/actions/category.action";
import Spinner from "components/spinner/spinner";

export default function Shop() {
  const categoryMap = useSelector(selectCategoryMap);
  const categoryIsLoading = useSelector(selectCategoryLoading);
  const [shouldSlice, setShouldSlice] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();
  const category = params["*"].split("/")[0];

  useEffect(() => {
    dispatch(fetchCategoriesStart());

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

  if (categoryIsLoading) {
    return <Spinner />;
  }

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
