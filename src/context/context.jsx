// import {
//   createContext,
//   useContext,
//   useState,
//   useEffect,
//   useCallback,
// } from "react";
// import axiosInstance from "../api/axios"; // Your axios instance

// // Create AuthContext
// export const AuthContext = createContext();

// // AuthProvider to wrap your application
// export const AuthProvider = ({ children }) => {
//   const [token, setToken] = useState(
//     localStorage.getItem("access_token") || null
//   );

//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState(null);

//   // Logout function
//   const logoutUser = useCallback(() => {
//     axiosInstance
//       .post("/api/auth/logout", {}, { withCredentials: true })
//       .catch((err) => console.error("Logout failed", err));
//     setToken(null);
//     localStorage.removeItem("access_token");

//     setIsLoggedIn(false);
//     setUser(null);
//     if (window.location.pathname !== "/login") {
//       window.location.href = "/login";
//     }
//   }, []);

//   // Check authentication by making a request to the backend
//   const checkAuth = useCallback(async () => {
//     if (!token) {
//       setIsLoggedIn(false);
//       return null;
//     }

//     try {
//       const res = await axiosInstance.get("/api/users/verify/admin", {
//         withCredentials: true,
//       });

//       if (res.status === 200) {
//         setIsLoggedIn(true);
//         setUser(res.data.user);

//         return res.data;
//       } else {
//         logoutUser(); // Logout on unsuccessful status
//         return null;
//       }
//     } catch (error) {
//       logoutUser(); // Logout on error
//       return null;
//     }
//   }, [logoutUser]);

//   // Prevent logged-in users from accessing the login page
//   useEffect(() => {
//     const handlePageRedirection = async () => {
//       const isLoginPage = window.location.pathname === "/login";

//       if (isLoginPage) {
//         const authData = await checkAuth();
//         if (authData) {
//           // Redirect to home if already logged in
//           if (window.location.pathname === "/login") {
//             window.location.href = "/";
//           }
//         }
//       } else {
//         // Check authentication for other pages
//         await checkAuth();
//       }
//     };

//     handlePageRedirection();
//   }, [checkAuth]);

//   const storeToken = (data) => {
//     setToken(data);
//     localStorage.setItem("access_token", data);
//     setIsLoggedIn(true);
//   };

//   return (
//     <AuthContext.Provider
//       value={{ isLoggedIn, user, checkAuth, logoutUser, storeToken }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom hook to use the AuthContext
// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

import { createContext, useContext, useState, useEffect } from "react";
import axiosInstance from "../api/axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem("access_token") || null
  );
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);
  const [user, setUser] = useState(null);

  const checkAuth = async () => {
    if (!token) {
      setIsLoggedIn(false);
      return null;
    }
    try {
      // const res = await axiosInstance.get("api/users/verify/admin", {
      //     headers: {
      //         Authorization: `Bearer ${token}`,
      //     },
      // });

      // if (res.status === 200) {
      //     setIsLoggedIn(true);
      //     setUser(res.data);
      //     return res.data;
      // } else {
      //     logoutUser();
      //     return null;
      // }
      setIsLoggedIn(true);
    } catch (error) {
      logoutUser();
      return null;
    }
  };

  const storeToken = (data) => {
    setToken(data);
    localStorage.setItem("access_token", data);
    setIsLoggedIn(true);
  };

  const logoutUser = () => {
    axiosInstance.post("api/auth/logout");
    setToken(null);
    localStorage.removeItem("access_token");
    setIsLoggedIn(false);
    setUser(null);
    window.location.href = "/login";
  };

  const checkLogin = async () => {
    if (!token) {
      if (window.location.pathname !== "/login") {
        logoutUser();
      }
    } else {
      const userData = await checkAuth();
      if (isLoggedIn) {
        if (window.location.pathname === "/login") {
          window.location.href = "/";
        }
      } else {
        logoutUser();
      }
    }
  };

  useEffect(() => {
    checkLogin();
  }, [token]);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, token, user, storeToken, logoutUser, checkAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return authContextValue;
};
