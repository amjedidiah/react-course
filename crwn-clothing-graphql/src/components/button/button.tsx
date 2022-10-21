import styles from "components/button/button.module.scss";
import classNames from "classnames";
import { InputHTMLAttributes, memo } from "react";

enum BUTTON_TYPE_CLASSES {
  google = "google-sign-in",
  inverted = "inverted",
}

export type ButtonProps = {
  loading?: boolean;
  buttonType?: keyof typeof BUTTON_TYPE_CLASSES;
} & InputHTMLAttributes<HTMLInputElement>;

export function Button({
  buttonType,
  loading,
  value,
  className,
  type="button",
  onChange = () => {},
  ...otherProps
}: ButtonProps) {
  const buttonTypeClassName = buttonType ? styles[BUTTON_TYPE_CLASSES[buttonType]] : "";

  return (
    <div className={styles["button-wrapper"]}>
      <input
        className={classNames(
          styles["button-container"],
          buttonTypeClassName,
          className
        )}
        disabled={loading}
        value={loading ? "" : value}
        type={type}
        onChange={onChange}
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

export default memo(Button);