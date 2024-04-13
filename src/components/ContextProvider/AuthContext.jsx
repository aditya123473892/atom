<<<<<<< HEAD
import axios from "axios";
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const Context = ({ children }) => {
    const [logindata, setLoginData] = useState("");

    useEffect(() => {
        const checkLoggedIn = async () => {
            try {
                const YOUR_TOKEN = localStorage.getItem(token);
                const user = await axios.get(
                    "http://localhost:8080/api/user/fetchuser",
                    {
                        headers: {
                            Authorization: `${YOUR_TOKEN}`,
                        },
                    }
                );
                if (user) {
                    setLoginData(user);
                }
            } catch (error) {
                console.log(error);
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

export default Context;
=======
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
>>>>>>> e257215d4da4478a044b62ff3df82bafffda81ca
