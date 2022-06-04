import React from "react";

const PrivateRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  if (isAuth) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;
