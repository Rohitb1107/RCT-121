import React from "react";

export const AppContext = React.createContext();

const AppContextProvider = () => {
  return (
    <AppContext.Provider value={[{}, () => {}]}>
      <div>AppContextProvider</div>
    </AppContext.Provider>
  );
};

export default AppContextProvider;
