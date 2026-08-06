// import React from "react";
// import StudentProfile from "./StudentProfile";
// 
// function CourseList({ user }) {
// 	return (
// 		<>
// 			{/* <StudentProfile user={user} /> */}
// 		</>
// 	)
// }
// 
// export default CourseList;

import React from "react";

function CourseList({ onEnroll }) {
	const courses = [
		{ id: 1, title: "React Basics", price: 999 },
		{ id: 2, title: "Node.js Essentials", price: 1199 },
		{ id: 3, title: "UI/UX Design", price: 799 }
	];

	return (
		<div>
			{courses.map(course => (
				<div key={course.id}>
					<h3>{course.title}</h3>
					<p>Price: {course.price}</p>
					<button onClick={onEnroll}>Enroll</button>
				</div>
			))}
		</div>
	)
}

export default CourseList;
