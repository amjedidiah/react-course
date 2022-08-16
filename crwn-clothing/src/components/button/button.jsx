import PropTypes from "prop-types"
import "components/button/button.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

export default function Button({ buttonType, ...otherProps }) {
  return (
    <input
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    />
  );
}

Button.propTypes = {
  buttonType: PropTypes.oneOf(Object.keys(BUTTON_TYPE_CLASSES)),
  type: PropTypes.string,
  value: PropTypes.string,
};

Button.defaultProps = {
  type: "button",
}
