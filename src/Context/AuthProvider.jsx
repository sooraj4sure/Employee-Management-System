import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../assets/Utils/LocalStorage";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [userData, setuserData] = useState(null);

  useEffect(() => {
    const { employees } = getLocalStorage()
    setuserData( employees );
    setLocalStorage();
  }, []);

  return (
    <div>
      <AuthContext.Provider value={[userData,setuserData]}>
        {children}
        </AuthContext.Provider>;
    </div>
  );
};

export default AuthProvider;
