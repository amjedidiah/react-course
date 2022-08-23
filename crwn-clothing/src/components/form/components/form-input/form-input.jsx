import PropTypes from "prop-types";
import styles from "components/form/components/form-input/form-input.module.scss";
import classNames from "classnames";

export default function FormInput({ id, label, ...otherProps }) {
  return (
    <div className={styles.group}>
      <input id={id} className={styles["form-input"]} {...otherProps} />
      {label && (
        <label
          htmlFor={id}
          className={classNames(styles["form-input-label"], {
            [styles.shrink]: otherProps.value.length,
          })}
        >
          {label}
        </label>
      )}
    </div>
  );
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

FormInput.defaultProps = {
  value: "",
};
