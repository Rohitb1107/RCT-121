import React, { useState } from "react";

export const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div>
      <AuthContext.Provider value={[isAuth, setIsAuth]}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthContextProvider;
