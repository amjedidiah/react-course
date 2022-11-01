import {
  Dispatch,
  SetStateAction,
  ChangeEvent,
  FormEvent,
  useState,
  useCallback,
} from "react";
import Button, { ButtonProps } from "components/button/button";
import FormInput, {
  FormInputProps,
} from "components/form/components/form-input/form-input";
import styles from "components/form/form.module.scss";

export type FormValues = {
  [key: string]: string;
};

export enum FormType {
  login = "login",
  register = "register",
}

export type FormProps = {
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
    ({ target: { id, value } }: ChangeEvent<HTMLInputElement>) =>
      setFormValues({ ...formValues, [id]: value }),
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
    <form onSubmit={handleSubmit} data-testid="form">
      {formFields.map((formField, i) => {
        const id = `${formType}-${formField.id ?? i}`;
        const completeField = {
          ...formField,
          id,
          onChange: handleChange,
          value: formValues[id],
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
