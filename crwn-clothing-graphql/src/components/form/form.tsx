import {
  Dispatch,
  SetStateAction,
  ChangeEvent,
  FormEvent,
  useState,
} from "react";
import { useCallback } from "react";
import Button, { ButtonProps } from "components/button/button";
import FormInput, {
  FormInputProps,
} from "components/form/components/form-input/form-input";
import styles from "components/form/form.module.scss";

export type FormValues = {
  [key: string]: string;
};

enum FormType {
  login = "login",
  register = "register",
}

type FormProps = {
  formFields: FormInputProps[];
  buttons: ButtonProps[];
  onSubmit: (
    formValues: FormValues,
    setFormValues: Dispatch<SetStateAction<FormValues>>
  ) => void;
  formType: keyof typeof FormType;
};

export default function Form({
  formFields,
  buttons,
  onSubmit,
  formType,
}: FormProps) {
  const [formValues, setFormValues] = useState<FormValues>({});

  const handleChange = useCallback(
    ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) =>
      setFormValues({ ...formValues, [name]: value }),
    [formValues]
  );

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit(formValues, setFormValues);
    },
    [formValues, onSubmit]
  );

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map((formField) => {
        const id = `${formType}-${formField.name}`;
        const value = formField.name ? formValues[formField.name] : "";
        const completeField = {
          ...formField,
          id,
          onChange: handleChange,
          value,
        };

        return <FormInput key={id} {...completeField} />;
      })}

      <div className={styles["buttons-container"]}>
        {buttons.map((button, i) => (
          <Button key={`button-${i}`} {...button} />
        ))}
      </div>
    </form>
  );
}
