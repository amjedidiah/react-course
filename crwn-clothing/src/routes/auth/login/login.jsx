import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import {
  auth,
  createUserFromAuth,
  signInWithGoogleRedirect,
} from "../../../utils/firebase.utils";
import Register from "../register/register";

export default function Login() {
  useEffect(() => {
    async function handleGoogleUserLogin() {
      try {
        const response = await getRedirectResult(auth);
        if (response) {
          const userDoc = await createUserFromAuth(response.user);
          console.log("userDoc", userDoc);
        }
      } catch (err) {
        console.log("err", err);
      }
    }

    handleGoogleUserLogin();
  }, []);

  return (
    <div>
      Login
      <button onClick={signInWithGoogleRedirect}>Login with Google</button>

      <Register />
    </div>
  );
}
