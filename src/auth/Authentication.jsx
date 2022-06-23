import { createContext, useEffect, useState } from "react";
import { userStateChecker } from "../utils/data";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    userStateChecker(setCurrentUser);
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
