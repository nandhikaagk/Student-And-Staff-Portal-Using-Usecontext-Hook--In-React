// src/App.jsx
import React, { useContext } from 'react';
import AppProvider, { AppContext } from './context/context';
import Header from './components/Header';
import StaffForm from './components/StaffForm';
import StudentView from './components/StudentView';
import StaffTable from './components/StaffTable';

const AppContent = () => {
  const { isStaffView } = useContext(AppContext);

  return (
    <>
      <Header />
      <main>
        {/* {isStaffView ? <StaffForm /> : <StudentView />} */}
        {isStaffView ? <StaffTable /> : <StudentView />} 

      </main>
    </>
  );
};

const App = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;


