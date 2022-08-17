import Form from "components/form/form";
import {
  createAuthUserWithEmailAndPassword,
  createUserFromAuth,
} from "utils/firebase.utils";
import "routes/components/auth/auth.scss";

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
];

export default function Register() {
  const handleRegister = async (
    { displayName, email, password, confirmPassword },
    setFormValues
  ) => {
    if (password !== confirmPassword) {
      return alert("Passwords do not match");
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserFromAuth({ ...user, displayName });
      setFormValues({});
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        return alert("Email already in use");
      }
      console.log("err", err);
    }
  };

  return (
    <div className="auth-child-container">
      <h2>Dont Have An Account?</h2>
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
