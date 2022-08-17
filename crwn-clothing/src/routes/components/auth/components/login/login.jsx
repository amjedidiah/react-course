import Form from "components/form/form";
import { UserContext } from "context/user.context";
import { getRedirectResult } from "firebase/auth";
import { useContext, useEffect } from "react";
import "routes/components/auth/auth.scss";
import {
  auth,
  signInAuthWithEmailAndPassword,
  signInWithGoogleRedirect,
} from "utils/firebase.utils";

const formFields = [
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
];

export default function Login() {
  const {setCurrentUser} = useContext(UserContext);
  useEffect(() => {
    async function handleGoogleUserLogin() {
      try {
        await getRedirectResult(auth);
      } catch (err) {
        console.log("err", err);
      }
    }

    handleGoogleUserLogin();
  }, [setCurrentUser]);

  const handleLogin = async ({ email, password }, setFormValues) => {
    if (!(email && password)) {
      return alert("Please fill in all fields");
    }

    try {
      await signInAuthWithEmailAndPassword(email, password);
      setFormValues({});
    } catch (err) {
      switch (err.code) {
        case "auth/user-not-found":
          return alert("User not found");
        case "auth/wrong-password":
          return alert("Wrong password");
        default:
          console.log("err", err);
          return alert("Something went wrong");
      }
    }
  };

  return (
    <div className="auth-child-container">
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
