import { createContext, useEffect, useState } from "react";
import {
  createUserFromAuth,
  onAppAuthStateChanged,
} from "utils/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = () => onAppAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        createUserFromAuth(user);
      }

      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
