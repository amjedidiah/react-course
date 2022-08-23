import categories from "routes/components/home/components/categories/data/categories.json";
import "routes/components/home/components/categories/categories.scss";
import Category from "routes/components/home/components/categories/components/category/category";

export default function Categories() {
    return (
        <div className="categories-container">
            {categories.map((category) => (
                <Category key={`category-${category.id}`} {...category} />
            ))}
        </div>
    );
}