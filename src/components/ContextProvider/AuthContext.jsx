import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext("");

export const AuthProvider = ({ children }) => {
  const [logindata, setLoginData] = useState({});

  useEffect(() => {
    console.log(logindata);
    // setLoginData("");
    const checkLoggedIn = async () => {
      try {
        const YOUR_TOKEN = localStorage.getItem("token");
        if (YOUR_TOKEN) {
          const user = await axios.get(
            "http://localhost:8080/api/user/fetchuser",
            {
              headers: {
                Authorization: `Bearer ${YOUR_TOKEN}`, // Assuming the token is a bearer token
              },
            }
          );
          if (user) {
            console.log(user.data.getUser);
            setLoginData(()=>user.data.getUser);
            console.log(logindata)
          }
        }
      } catch (error) {
        console.log("Error fetching user:", error);
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ logindata, setLoginData }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
