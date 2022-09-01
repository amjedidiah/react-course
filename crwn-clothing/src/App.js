import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "redux/actions/user.action";
import AppRoutes from "routes/routes";
import {
  createUserFromAuth,
  getCurrentUser,
  onAppAuthStateChanged,
} from "utils/firebase.utils";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // const unsubscribe = () =>
    //   onAppAuthStateChanged((user) => {
    //     if (user) {
    //       createUserFromAuth(user);
    //     }

    //     dispatch(setCurrentUser(user));
    //   });

    // return unsubscribe;


    getCurrentUser().then((user) => console.log("user", user));
    // Disabled because dispatch is never updated throughout the React app lifecycle
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <AppRoutes />;
}
