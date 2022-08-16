import Form from "../../../components/form/form";
import {
  createAuthUserWithEmailAndPassword,
  createUserFromAuth,
} from "../../../utils/firebase.utils";

const formFields = [
  {
    name: "displayName",
    label: "Display Name",
    type: "text",
    placeholder: "e.g: John Doe",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "e.g: john.doe@example.com",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    placeholder: "Confirm your password",
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
      const userDoc = await createUserFromAuth({
        ...user,
        displayName,
      });

      if (userDoc) {
        console.log("userDoc", userDoc);
        setFormValues({});
      }
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        return alert("Email already in use");
      }
      console.log("err", err);
    }
  };

  return (
    <div>
      <h1>Register with your email and password</h1>

      <Form
        formFields={formFields}
        onSubmit={handleRegister}
        formType="register"
      />
    </div>
  );
}
