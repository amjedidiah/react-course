import Proptypes from "prop-types";
import styles from  "routes/components/home/components/categories/components/category/category.module.scss";
import { useNavigateToCategory } from "routes/hooks/shop.hook";

export default function Category({ imageUrl, title }) {
  const navigateToCategory = useNavigateToCategory(title, true);

  return (
    <div className={styles["category-container"]} onClick={navigateToCategory}>
      <div
        className={styles["background-image"]}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={styles["category-body-container"]}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}

Category.propTypes = {
  imageUrl: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
};
