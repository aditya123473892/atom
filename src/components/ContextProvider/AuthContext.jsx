import React, { createContext, useState } from "react";

export const AuthContext = createContext("");

const AuthContextProvider = ({ children }) => {
  const [loginData, setLoginData] = useState("");

  return (
    <>
      <AuthContext.Provider value={{ loginData, setLoginData }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthContextProvider;
