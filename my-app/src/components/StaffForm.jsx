// src/components/StaffForm.jsx
import React, { useState } from 'react';
import '../components/StaffForm.css';

const StaffForm = () => {
  const [studentData, setStudentData] = useState({
    rollNo: '',
    name: '',
    subjects: {
      java: '',
      dataStructures: '',
      python: '',
      machineLearning: '',
      maths: ''
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  // The function receives an event (usually a change event from a form field).
  // It extracts the name and value from the event target (the form field that triggered the event).
  // It updates the state using the setStudentData function, ensuring that the previous state (prevData) is preserved by spreading 
  const handleSubjectChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevData) => ({
      ...prevData,
      subjects: { ...prevData.subjects, [name]: value }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Student Data Submitted: ', studentData);
    alert('Submission Successful');
  };

  return (
    <>
    <center><h1 className='title-head'>Enter Student Details!</h1></center>
    <form className="staff-form" onSubmit={handleSubmit}> 
      <label>
        Roll No
        <input type="text" name="rollNo" value={studentData.rollNo} onChange={handleChange} required />
      </label>
     
      <label>
        Name
        <input type="text" name="name" value={studentData.name} onChange={handleChange} required />
      </label>
     
      <label>
        Java
        <input type="text" name="java" value={studentData.subjects.java} onChange={handleSubjectChange} required />
      </label>
     
      <label>
        Data Structures
        <input type="text" name="dataStructures" value={studentData.subjects.dataStructures} onChange={handleSubjectChange} required />
      </label>
    
      <label>
        Python
        <input type="text" name="python" value={studentData.subjects.python} onChange={handleSubjectChange} required />
      </label>
     
      <label>
        Machine Learning
        <input type="text" name="machineLearning" value={studentData.subjects.machineLearning} onChange={handleSubjectChange} required />
      </label>
      
      
     
      <button type="submit">Submit</button>
    </form></>
  );
}; 

export default StaffForm;
