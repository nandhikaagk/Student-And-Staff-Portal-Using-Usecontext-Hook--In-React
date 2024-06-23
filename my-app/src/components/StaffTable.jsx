import React, { useState } from 'react';
import '../components/StaffTable.css'

const StaffTable = () => {
 
  const [students, setStudents] = useState([
    { name: 'Nandhika', rollNo: '20ISR029', mark1: 85, mark2: 90, mark3: 78,total:298 },
    { name: 'Akshaya', rollNo: '20ISR028', mark1: 92, mark2: 88, mark3: 95,total:289 },
    { name: 'Guru', rollNo: '20ISR007', mark1: 79, mark2: 85, mark3: 88,total:276 },
    { name: 'Krishnan', rollNo: '20ISR039', mark1: 89, mark2: 85, mark3: 88,total:239 },
    { name: 'KalaiSelvi', rollNo: '20ISR059', mark1: 79, mark2: 90, mark3: 88,total:245 }, 
    { name: 'Naraen', rollNo: '20ISR019', mark1: 79, mark2: 85, mark3: 88,total:256 },
    { name: 'Madhan', rollNo: '20ISR030', mark1: 79, mark2: 60, mark3: 88,total:234 },
    
  ]);

  const [filterRollNo, setFilterRollNo] = useState('');
  const [filteredStudents, setFilteredStudents] = useState(students);

  const handleFilterChange = (e) => {
    setFilterRollNo(e.target.value);
  };

  const handleFilterClick = () => {
    const normalizedFilter = filterRollNo.toLowerCase(); // Convert filter text to lowercase
    setFilteredStudents(
      students.filter(student => student.rollNo.toLowerCase().includes(normalizedFilter))
    );
  };

 const handleSort=()=>{
  const sortstudent=[...students].sort((a,b)=>a.total-b.total )
  setFilteredStudents(sortstudent)
    
  }
  

  return (
    <div>
      <center><div className='heading'>STUDENT INFORMATION</div></center><br></br>
      <input
        type="text"
        placeholder=" Rollno Filter"
        value={filterRollNo}
        onChange={handleFilterChange}
      />
      <button className='button1' onClick={handleFilterClick}>Filter</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Mark 1</th>
            <th>Mark 2</th>
            <th>Mark 3</th>
            <th><button className='button2' onClick={handleSort}></button>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.rollNo}</td>
              <td>{student.mark1}</td>
              <td>{student.mark2}</td>
              <td>{student.mark3}</td>
              <td>{student.total}</td>
              <td><button className='button3'>Edit</button><button  className='button3'>Delete</button></td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaffTable;
