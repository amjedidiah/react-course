import { ButtonProps } from "components/button/button";
import { Label } from "components/form/components/form-input/form-input";
import Form, { FormValues } from "components/form/form";
import { Dispatch, SetStateAction, useCallback } from "react";
import styles from "routes/components/auth/auth.module.scss";
import { signInAuthWithEmailAndPassword, signInWithGoogleRedirect } from "utils/firebase.utils";

const formFields = [
  {
    name: "email",
    label: {
      id: "login-email",
      value: "Email",
    } as Label,
    type: "email",
    placeholder: "e.g: john.doe@example.com",
    required: true,
  },
  {
    name: "password",
    label: {
      id: "login-password",
      value: "Password",
    } as Label,
    type: "password",
    placeholder: "Enter your password",
    required: true,
  },
];

const buttons = [
  {
    type: "submit",
    value: "Login",
  },
  {
    value: "Login with Google",
    onClick: signInWithGoogleRedirect,
    buttonType: "google",
  },
] as ButtonProps[];

export default function Login() {
  const handleLogin = useCallback(async (
    { email, password }: FormValues,
    setFormValues: Dispatch<SetStateAction<FormValues>>
  ) => {
    if (!(email && password)) {
      return alert("Please fill in all fields");
    }

    try {
      await signInAuthWithEmailAndPassword(email, password);
      setFormValues({});
    } catch (error) {
      console.log('user sign in failed', error);
    }
  }, []);

  return (
    <div className={styles["auth-child-container"]}>
      <h2>Already Have An Account?</h2>
      <span>Login with your email and password</span>

      <Form
        formFields={formFields}
        buttons={buttons}
        onSubmit={handleLogin}
        formType="login"
      />
    </div>
  );
}
