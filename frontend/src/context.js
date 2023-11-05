import React, { useEffect, useState } from 'react';
import { isLoggedIn } from './auth/auth';

const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {
  const [appData, setAppData] = useState({ isLoggedIn: false, candidate:null });

  useEffect(() => {
    if (localStorage.getItem('token')) {
      
      setAppData({ isLoggedIn: isLoggedIn(),...appData });
    }
  }, []);

  const updateAppData = (newValue) => {
    setAppData({...newValue });
 
  };

  return (
    <AppContext.Provider value={{ appData, updateAppData }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
