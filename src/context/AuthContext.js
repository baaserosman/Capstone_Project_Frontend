import { createContext, useEffect, useState } from "react";



export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  
  // const [token, setToken] = useState();
  console.log(currentUser)

  useEffect(() => {
    var token = sessionStorage.getItem("token");
    token ? setCurrentUser(true) : setCurrentUser(false);
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser}}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
