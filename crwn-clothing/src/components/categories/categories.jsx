import categories from "components/categories/data/categories.json";
import "components/categories/categories.scss";
import Category from "components/categories/components/category/category";

export default function Categories() {
    return (
        <div className="categories-container">
            {categories.map((category) => (
                <Category key={`category-${category.id}`} {...category} />
            ))}
        </div>
    );
}
