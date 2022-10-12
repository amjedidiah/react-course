import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authenticateUserPending } from "redux/slices/user.slice";
import AppRoutes from "routes/routes";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authenticateUserPending());
    // Disabled because dispatch is never updated throughout the React app lifecycle
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <AppRoutes />;
}
