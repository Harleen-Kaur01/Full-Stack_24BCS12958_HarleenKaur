// import React from "react";
// import CourseList from "./CourseList";
// 
// function CourseCatalog({ user }) {
// 	return (
// 		<>
// 			{/* <CourseList user={user} /> */}
// 
// 		</>
// 	)
// }
// 
// export default CourseCatalog;

import React from "react";
import CourseList from "./CourseList";

function CourseCatalog({ onEnroll }) {
	return (
		<div>
			<CourseList onEnroll={onEnroll} />
		</div>
	)
}

export default CourseCatalog;