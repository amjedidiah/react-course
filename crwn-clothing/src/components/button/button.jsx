import PropTypes from "prop-types";
import styles from "components/button/button.module.scss";
import classNames from "classnames";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const buttonTypeClass = (buttonType) =>
  buttonType ? BUTTON_TYPE_CLASSES[buttonType] : "";

export default function Button({ buttonType, ...otherProps }) {
  const buttonTypeClassName = buttonTypeClass(buttonType);
  return (
    <input
      className={classNames(
        styles["button-container"],
        buttonTypeClassName
      )}
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
};
