import PropTypes from "prop-types";
import styles from "components/button/button.module.scss";
import classNames from "classnames";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const buttonTypeClass = (buttonType) =>
  buttonType ? BUTTON_TYPE_CLASSES[buttonType] : "";

export default function Button({
  buttonType,
  loading,
  value,
  className,
  ...otherProps
}) {
  const buttonTypeClassName = buttonTypeClass(buttonType);
  return (
    <div className={styles["button-wrapper"]}>
      <input
        className={classNames(
          styles["button-container"],
          styles[buttonTypeClassName],
          className
        )}
        disabled={loading}
        value={loading ? "" : value}
        {...otherProps}
      />
      <div
        className={classNames({
          [styles.spinner]: loading,
        })}
      />
    </div>
  );
}

Button.propTypes = {
  loading: PropTypes.bool,
  className: PropTypes.string,
  buttonType: PropTypes.oneOf(Object.keys(BUTTON_TYPE_CLASSES)),
  type: PropTypes.string,
  value: PropTypes.string,
};

Button.defaultProps = {
  type: "button",
};
