import { createContext, useEffect, useState } from "react";
import {
  createUserFromAuth,
  onAppAuthStateChanged,
  UserData,
} from "utils/firebase.utils";
import { ContextProvider } from "./category.context";

export const UserContext = createContext({
  currentUser: null as UserData | null,
  setCurrentUser: (user: UserData | null) => {}
});

export const UserProvider = ({ children }: ContextProvider) => {
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);

  useEffect(() => {
    const unsubscribe = () => onAppAuthStateChanged((user) => {
      if (user) {
        createUserFromAuth(user);
      }

      setCurrentUser(user);
    });

    return unsubscribe();
  }, []);
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
