import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isStaffView, setIsStaffView] = useState(true);

  const toggleStaffView = () => {
    setIsStaffView(true);
  };

  const toggleStudentView = () => {
    setIsStaffView(false);
  };

  return (
    <AppContext.Provider value={{ isStaffView, toggleStaffView, toggleStudentView }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
export { AppContext };
