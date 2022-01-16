import React, {createContext, useState} from "react";
import {UserType} from "../resources/User";

interface AuthContextValues {
  loggedInUser: UserType | null,
  setLoggedInUser: (user: UserType) => void
}

const AuthContext = createContext<undefined | AuthContextValues>(undefined);

export function AuthProvider({children, initialLoggedInUser}) {
  const [loggedInUser, setLoggedInUser] = useState<string>(initialLoggedInUser);

  function handleLoggedInUser(user: UserType) {
    setLoggedInUser(user);
  }

  return (
    <AuthContext.Provider value={{loggedInUser, setLoggedInUser: handleLoggedInUser}}>
      {children}
    </AuthContext.Provider>
  );
}

export default function useAuthContext() {
  const context = React.useContext(AuthContext)

  if (context === undefined){
    throw new Error('useAuthContext should be used within an AuthProvider.')
  }

  return context
}

