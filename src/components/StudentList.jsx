import React from 'react';

const StudentList = ({ students, deleteStudent }) => {

  const cardColors = ['bg-[#e2f2f1]', 'bg-[#ffedcc]'];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {students.map((student, index) => (
        <div 
          key={student.id} 
          className={`${cardColors[index % cardColors.length]} p-6 rounded-2xl shadow-sm border border-black/5 flex justify-between items-start transition-all hover:shadow-md`}
        >
          <div className="space-y-2">
            <p className="text-[#1e293b] font-medium text-lg">
              <span className="font-bold">Name: </span>{student.name}
            </p>
            <p className="text-[#334155] text-lg">
              <span className="font-bold">Age: </span>{student.age}
            </p>
            <p className="text-[#334155] text-lg">
              <span className="font-bold">Course: </span>{student.course}
            </p>
          </div>
          <button 
            onClick={() => deleteStudent(student.id)}
            className="bg-[#e58a8a] hover:bg-red-500 text-white px-4 py-1.5 rounded-lg text-sm font-bold shadow-sm transition-colors"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default StudentList;