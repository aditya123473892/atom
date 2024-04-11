import React, { createContext, useState } from 'react'


export const AuthContext = createContext("");

const Context = ({children}) => {

    const [logindata,setLoginData] = useState("");

  return (
    <>
    <AuthContext.Provider value={{logindata,setLoginData}}>
        {children}
    </AuthContext.Provider>
    </>
  )
}

export default Context