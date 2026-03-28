import React, { useState } from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

function App() {
  
  const [students, setStudents] = useState([
    { id: 1, name: "Vyas Mohle", age: 21, course: "Full Stack Dev" }
  ]);

 
  const addStudent = (student) => {
    const newStudent = { ...student, id: Date.now() };
    setStudents([...students, newStudent]);
  };

 
  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#f1f5f9] p-4 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1e293b] mb-12 underline">Simple Student App</h1>
          
        </header>

        <div className="flex flex-col lg:flex-row gap-20">
         
          <div className="w-full lg:w-[350px] shrink-0">
            <StudentForm addStudent={addStudent} />
          </div>

          
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-[#353535]   mb-6">Student List</h2>
            <StudentList students={students} deleteStudent={deleteStudent} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;