import PropTypes from 'prop-types';
import "components/form/components/form-input/form-input.scss";

export default function FormInput({ id, label, ...otherProps }) {
  return (
    <div className="group">
      <input id={id} className="form-input" {...otherProps} />
      {label && (
        <label
          htmlFor={id}
          className={`form-input-label ${
            otherProps.value.length ? "shrink" : ""
          }`}
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
}

FormInput.defaultProps = {
  value: "",
};
