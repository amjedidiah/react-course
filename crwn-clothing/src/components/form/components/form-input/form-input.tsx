import styles from "components/form/components/form-input/form-input.module.scss";
import classNames from "classnames";
import { InputHTMLAttributes } from "react";

export type FormInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function FormInput({
  id,
  label,
  value = "",
  ...otherProps
}: FormInputProps) {
  return (
    <div className={styles.group}>
      <input
        id={id}
        className={styles["form-input"]}
        value={value}
        {...otherProps}
      />
      {label && (
        <label
          htmlFor={id}
          className={classNames(styles["form-input-label"], {
            [styles.shrink]: Boolean(value && value.toString().length),
          })}
        >
          {label}
        </label>
      )}
    </div>
  );
}
