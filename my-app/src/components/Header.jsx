// src/components/Header.jsx
import React, { useContext } from 'react';
import { AppContext } from '../context/context';
import '../components/Header.css';

const Header = () => {
  const { toggleStaffView, toggleStudentView } = useContext(AppContext);

  return (
    <header className="header">
      <div className="title">KEC Student & Staff Portal</div>
      <div className="buttons-container">
        <button className="button" onClick={toggleStaffView}>Staff</button>
        <button className="button" onClick={toggleStudentView}>Student</button>
      </div>
    </header>
  );
}; 

export default Header;
