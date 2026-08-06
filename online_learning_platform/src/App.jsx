// import React from 'react';
// import Dashboard from './component/dashboard.jsx';
// import { UserContext } from './context/UserContext.jsx';
// import './App.css'
// import StudentProfile from './component/StudentProfile.jsx';
// 
// function App() {
//   const user = {
//     name: "Karan Mehta",
//     email: "karan@gmail.com",
//     program: "Web Development"
//   };
// 
//   return (
//     <>
//       {/* <Dashboard user={user} /> */}
//       <UserContext.Provider value={user}>
//         <StudentProfile />
//       </UserContext.Provider>
//     </>
//   )
// }
// 
// export default App;

import React, { useState, useEffect } from 'react';
import { UserContext } from './context/UserContext.jsx';
import CourseCatalog from './component/CourseCatalog.jsx';
import StudentProfile from './component/StudentProfile.jsx';
import './App.css';

function App() {
  const user = {
    name: "Karan Mehta",
    email: "karan@gmail.com",
    program: "Web Development"
  };

  const [enrolledCount, setEnrolledCount] = useState(0);

  useEffect(() => {
    console.log(`Enrollment updated. Total courses: ${enrolledCount}`);
  }, [enrolledCount]);

  const handleEnroll = () => {
    setEnrolledCount(prevCount => prevCount + 1);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <UserContext.Provider value={user}>
        <h1>SkillNest - Online Learning Platform</h1>
        <hr />
        
        <h2>Welcome, {user.name}</h2>
        <p><strong>Program:</strong> {user.program}</p>
        <p><strong>Enrolled:</strong> {enrolledCount} {enrolledCount === 1 ? 'course' : 'courses'}</p>
        
        <hr />
        
        <h2>Course Catalog</h2>
        <CourseCatalog onEnroll={handleEnroll} />
        
        <hr />
        
        <StudentProfile />
      </UserContext.Provider>
    </div>
  );
}

export default App;
