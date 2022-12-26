import axios from "./axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
const AuthContext = createContext();
 
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    if (localStorage.getItem("tokens")) {
      let tokens = JSON.parse(localStorage.getItem("tokens"));
      return "admin";
    }
   
    return null;
  });
 
  const navigate = useNavigate();
 
  const login = async (payload) => {
   
    try {
      const apiResponse = await axios.post(
        axios.defaults.baseURL + `/api/v1/users/login?username=${payload.username}&password=${payload.password}`,
      );
  
      
      if(apiResponse.data.status === "success"){
        localStorage.setItem("tokens", JSON.stringify(apiResponse));
        window.location.href = "/";
      }
      else
        toast.error(("Vui lòng kiểm tra lại thông tin"));
    } catch (error) {
      toast.error(("Vui lòng kiểm tra lại thông tin"));
    }
   

  };
  const logout = async () => {
    localStorage.removeItem("tokens");
    setUser(null);
    navigate("/login");
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>

      {children}
    </AuthContext.Provider>
  );
};
 
export default AuthContext;