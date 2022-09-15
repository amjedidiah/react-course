import Form from "components/form/form";
import styles from "routes/components/auth/auth.module.scss";
import { emailRegisterPending } from "redux/actions/user.action";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();
  const handleRegister = async (
    { displayName, email, password, confirmPassword },
    setFormValues
  ) => {
    if (password !== confirmPassword) {
      return alert("Passwords do not match");
    }

    dispatch(emailRegisterPending({ displayName, email, password }));
    setFormValues({});
  };

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
