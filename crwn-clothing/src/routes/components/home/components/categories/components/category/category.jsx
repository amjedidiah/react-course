import Proptypes from "prop-types";
import "routes/components/home/components/categories/components/category/category.scss";
import { useNavigateToCategory } from "routes/hooks/shop.hook";

export default function Category({ imageUrl, title }) {
  const navigateToCategory = useNavigateToCategory(title, true);

  return (
    <div className="category-container" onClick={navigateToCategory}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
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
