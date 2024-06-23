// src/components/StudentView.jsx
import React from 'react';
import '../components/StudentView.css'; // Import the CSS file for StudentView styling

const StudentView = () => {
  const grades = {
    java: '90',
    DataStructures: '87',
    Python: '87',
    MachineLearning: '79',
   
  };

  return (
    <div className="student-view-container">
      <h3>Your Grade is A</h3>
      <p>Java: {grades.java}</p>
      <p>Data Structures: {grades.DataStructures}</p>
      <p>Python: {grades.Python}</p>
      <p>Machine Learning: {grades.MachineLearning}</p>
      
    </div>
  );
};

export default StudentView;
 