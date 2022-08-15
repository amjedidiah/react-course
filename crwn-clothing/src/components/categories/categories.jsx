import categories from "./data/categories.json";
import "./categories.scss";
import Category from "./components/category/category";

export default function Categories() {
    return (
        <div className="categories-container">
            {categories.map((category) => (
                <Category key={`category-${category.id}`} {...category} />
            ))}
        </div>
    );
}
