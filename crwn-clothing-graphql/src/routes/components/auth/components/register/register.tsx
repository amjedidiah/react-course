import Form, { FormValues } from "components/form/form";
import styles from "routes/components/auth/auth.module.scss";
import { Dispatch, SetStateAction, useCallback } from "react";
import { ButtonProps } from "components/button/button";
import { createAuthUserWithEmailAndPassword, createUserFromAuth, UserData } from "utils/firebase.utils";

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
  const handleRegister = useCallback( async (
    { displayName, email, password, confirmPassword }: FormValues,
    setFormValues: Dispatch<SetStateAction<FormValues>>
  ) => {
    if (password !== confirmPassword) {
      return alert("Passwords do not match");
    }

    try {
      const result = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      const {user} = result as unknown as UserData;

      await createUserFromAuth({...user, displayName });
      setFormValues({});
    } catch (error: Error | any) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
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
