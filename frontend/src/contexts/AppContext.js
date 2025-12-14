import React, { useEffect, useState } from 'react';

const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {
  const [appData, setAppData] = useState({ isLoggedIn: false });

  useEffect(() => {
    if (localStorage.getItem('token')) {
      // check the validity of the token inbackend
      setAppData({ isLoggedIn: true });
    }
  }, []);

  const updateAppData = (newValue) => {
    setAppData({ isLoggedIn: newValue });
  };

  return (
    <AppContext.Provider value={{ appData, updateAppData }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
