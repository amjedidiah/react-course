import PropTypes from "prop-types";
import "./search-box.css"

export default function SearchBox({
    onChangeHandler,
    searchString,
    placeholder,
    className,
}) {
    return (
        <input
            type="search"
            value={searchString}
            onChange={onChangeHandler}
            placeholder={placeholder}
            className={`search-box ${className}`}
        />
    );
}

SearchBox.propTypes = {
    onChangeHandler: PropTypes.func.isRequired,
    searchString: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    className: PropTypes.string,
};

