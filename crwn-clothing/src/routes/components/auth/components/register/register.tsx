import Form, { FormValues } from "components/form/form";
import styles from "routes/components/auth/auth.module.scss";
import { emailRegisterPending } from "redux/slices/user.slice";
import { useDispatch } from "react-redux";
import { Dispatch, SetStateAction, useCallback } from "react";
import { ButtonProps } from "components/button/button";

const formFields = [
  {
    name: "displayName",
    label: "Display Name",
    type: "text",
    placeholder: "e.g: John Doe",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "e.g: john.doe@example.com",
    required: true,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    required: true,
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    placeholder: "Confirm your password",
    required: true,
  },
];

const buttons = [
  {
    type: "submit",
    value: "Register",
  },
] as ButtonProps[];

export default function Register() {
  const dispatch = useDispatch();
  const handleRegister = useCallback(async (
    { displayName, email, password, confirmPassword }: FormValues,
    setFormValues: Dispatch<SetStateAction<FormValues>>
  ) => {
    if (password !== confirmPassword) {
      return alert("Passwords do not match");
    }

    dispatch(emailRegisterPending({ displayName, email, password }));
    setFormValues({});
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles["auth-child-container"]}>
      <h2>Don't Have An Account?</h2>
      <span>Register with your email and password</span>

      <Form
        formFields={formFields}
        buttons={buttons}
        onSubmit={handleRegister}
        formType="register"
      />
    </div>
  );
}
