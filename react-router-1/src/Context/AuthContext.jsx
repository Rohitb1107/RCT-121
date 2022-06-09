import React, { useReducer, useState } from "react";

export const AuthContext = React.createContext();

const initialState = {
  isAuth: false,
  token: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS": {
      return {
        ...state,
        isAuth: true,
        token: action.payload,
      };
    }
    case "LOGOUT_SUCCESS": {
      return {
        ...state,
        isAuth: false,
        token: null,
      };
    }
    default: {
      return state;
    }
  }
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <div>
      <AuthContext.Provider value={[state, dispatch]}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthContextProvider;
