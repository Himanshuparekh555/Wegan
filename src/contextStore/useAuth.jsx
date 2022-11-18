import React, { useState, useContext, createContext } from "react";

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useAuthProvider();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export function useAuth() {
  return useContext(authContext);
}

const useAuthProvider = () => {
  const [user, setUser] = useState(null);

  const saveUser = (data) => {
    setUser(data);
    return null;
  };

  const removeUser = () => {
    setUser(null);
    return null;
  };

  return {
    user,
    saveUser,
    removeUser,
  };
};
