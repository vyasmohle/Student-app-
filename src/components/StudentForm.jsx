import React, { useState } from 'react';

const StudentForm = ({ addStudent }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age || !course) return;
    addStudent({ name, age, course });
    setName('');
    setAge('');
    setCourse('');
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
      <div className="bg-[#dbeafe] px-6 py-4">
        <h3 className="text-xl font-bold text-[#1e40af]">Add New Student</h3>
      </div>
      <form onSubmit={handleSubmit} className="p-6 space-y-5">
        <div>
          <label className="block text-sm font-semibold text-slate-600 mb-1.5">Full Name</label>
          <input 
            type="text" 
            placeholder="Full Name"
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-emerald-400 outline-none transition-all"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-600 mb-1.5">Age</label>
          <input 
            type="number" 
            placeholder="20"
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-emerald-400 outline-none transition-all"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-600 mb-1.5">Course</label>
          <input 
            type="text" 
            placeholder="Course Web Dev"
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-emerald-400 outline-none transition-all"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
        </div>
        <button 
          type="submit"
          className="w-full py-3.5 bg-[#78cbad] hover:bg-[#00c37b] text-white font-bold rounded-full shadow-lg transition-transform active:scale-95 mt-4"
        >
          Add Student
        </button>
      </form>
    </div>
  );
};

export default StudentForm;