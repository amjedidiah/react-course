import Proptypes from "prop-types";
import "./category.scss";

export default function Category({ imageUrl, title }) {
    return (
        <div className="category-container">
            <div
                className="background-image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="category-body-container">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

Category.propTypes = {
    imageUrl: Proptypes.string.isRequired,
    title: Proptypes.string.isRequired
}
