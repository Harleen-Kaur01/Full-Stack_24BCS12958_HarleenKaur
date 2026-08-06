// import React from "react";
// import { useContext } from "react";
// import { UserContext } from "../context/UserContext.jsx";
// 
// function StudentProfile() {
// 	const user = useContext(UserContext);
// 	return (
// 		<>
// 			<h1>StudentProfile</h1>
// 			<h2>name : {user.name}</h2>
// 			<h2>email : {user.email}</h2>
// 			<h2>program : {user.program}</h2>
// 		</>
// 	)
// }
// 
// export default StudentProfile;

import React from "react";
import { useUser } from "../context/UserContext.jsx";

function StudentProfile() {
	const user = useUser();
	return (
		<div>
			<h2>Student Details</h2>
			<p><strong>Name:</strong> {user.name}</p>
			<p><strong>Email:</strong> {user.email}</p>
			<p><strong>Program:</strong> {user.program}</p>
		</div>
	)
}

export default StudentProfile;