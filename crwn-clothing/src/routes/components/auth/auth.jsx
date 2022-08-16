import Register from "routes/components/auth/components/register/register";
import Login from "routes/components/auth/components/login/login";

export default function Auth() {

  return (
    <div className="auth-container">
      <Login />
      <Register />
    </div>
  );
}
