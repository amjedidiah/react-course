import { useContext, useMemo, useState } from "react";
import { CategoryContext } from "context/category.context";
import "routes/components/shop/shop.scss";
import CategoryPreview from "routes/components/shop/components/category-preview/category-preview";
import { useParams } from "react-router-dom";

export default function Shop() {
  const { categoryMap } = useContext(CategoryContext);
  const params = useParams();
  const category = params["*"].split("/")[0];
  const [shouldSlice, setShouldSlice] = useState(false);

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
    <div className="shop-container">
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
