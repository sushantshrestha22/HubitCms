import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import axiosInstance from "../api/axios"; // Your axios instance
import { fetchData } from "@/query/query";

// Create AuthContext
export const TenureContext = createContext();

// AuthProvider to wrap your application
export const TenureProvider = ({ children }) => {
  const [currentTenure, setCurrentTenure] = useState(null);

  useEffect(() => {
    const getSettings = async () => {
      const data = await fetchData("api/settings");
      setCurrentTenure(data[0]?.tenure);
    };

    getSettings();
  }, []);

  return (
    <TenureContext.Provider value={{ currentTenure }}>
      {children}
    </TenureContext.Provider>
  );
};

// Custom hook to use the AuthContext
// export const useAuth = () => {
//   const context = useContext(TenureContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };
