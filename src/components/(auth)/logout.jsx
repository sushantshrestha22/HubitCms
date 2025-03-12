// import React, { useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/context"; // Assuming this is your AuthContext
// import { Button } from "../ui/button"; // Assuming you have a Button component
// import axiosInstance from "../../api/axios"; // Your axios instance for API calls
// import { use } from "react";

// const LogoutForm = () => {
//   const { handleSubmit } = useForm();
//   const { checkAuth } = useAuth(); // Get checkAuth from context
//   const navigate = useNavigate();

//   // Handle the logout
//   const onSubmit = async () => {
//     try {
//       // Call your backend logout route to clear cookies
//       await axiosInstance.post(
//         "/api/auth/logout",
//         {},
//         { withCredentials: true }
//       );

//       // After successful logout, redirect to login page
//       checkAuth(); // Update auth state
//       navigate("/login"); // Redirect to login page
//     } catch (error) {
//       console.error("Logout failed", error);
//     }
//   };

//   useEffect(() => {
//     // Call the logout function when the component mounts
//     onSubmit();
//   }, []);

//   return (
//     <></>
//     // <div>
//     //   <h2>Logout</h2>
//     //   <form onSubmit={handleSubmit(onSubmit)}>
//     //     <Button type="submit" variant="primary" className="w-full">
//     //       Logout
//     //     </Button>
//     //   </form>
//     // </div>
//   );
// };

// export default LogoutForm;


import { useAuth } from "@/context/context";
import { useEffect } from "react";

const LogoutForm = () => {
	const { logoutUser } = useAuth();

	useEffect(() => {
		logoutUser();
	}, [logoutUser]);

	return null;
};

export default LogoutForm;
