import { createContext, useEffect, useState } from "react";



export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [currentUserProfile, setCurrentUserProfile] = useState();
  console.log(currentUser)
  console.log(currentUserProfile)

  useEffect(() => {
    var token = sessionStorage.getItem("token");
    token ? setCurrentUser(true) : setCurrentUser(false);
  }, [currentUser]);

  // useEffect(() => {
  //   var user = sessionStorage.getItem("user");
  //   token ? setCurrentUserProfile(user) : setCurrentUserProfile(false);
  // })

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        currentUserProfile,
        setCurrentUserProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
