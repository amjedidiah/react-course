import PropTypes from 'prop-types';
import { useState } from "react";
import { useCallback } from "react";
import FormInput from "./components/form-input/form-input";


export default function Form({ formFields, onSubmit, formType }) {
  const [formValues, setFormValues] = useState({});

  const handleChange = useCallback(
    ({ target: { name, value } }) =>
      setFormValues({ ...formValues, [name]: value }),
    [formValues]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onSubmit(formValues, setFormValues);
    },
    [formValues, onSubmit]
  );

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map((formField) => {
        const id = `${formType}-${formField.name}`;
        const completeField = {
          ...formField,
          id,
          onChange: handleChange,
          value: formValues[formField.name],
        };

        return <FormInput key={id} {...completeField} />;
      })}
      <button type="submit">Register</button>
    </form>
  );
}

Form.propTypes = {
    formFields: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            label: PropTypes.string,
            type: PropTypes.string.isRequired,
            placeholder: PropTypes.string,
        })
    ).isRequired,
    onSubmit: PropTypes.func.isRequired,
    formType: PropTypes.string.isRequired,
};