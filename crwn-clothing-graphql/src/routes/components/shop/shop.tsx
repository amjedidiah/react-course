import { useContext, useMemo, useState } from "react";
import styles from "routes/components/shop/shop.module.scss";
import CategoryPreview from "routes/components/shop/components/category-preview/category-preview";
import { useParams } from "react-router-dom";
import Spinner from "components/spinner/spinner";
import { CategoryContext } from "context/category.context";

export default function Shop() {
  const { categoryMap, categoryIsLoading } = useContext(CategoryContext);
  const [shouldSlice, setShouldSlice] = useState(false);
  const params = useParams();
  const category = params["*"]?.split("/")[0];

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
