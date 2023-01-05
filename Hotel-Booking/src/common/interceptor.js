import axios from "./axios";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const axiosApiInstance = axios.create({});

axiosApiInstance.interceptors.request.use((config) => {
  let tokensData = JSON.parse(localStorage.getItem("tokens"));
 console.log( tokensData.headers.bearer)
  if(tokensData === null){
    localStorage.clear()
    toast.info("Vui lòng đăng nhập để tiếp tục!",{autoClose:5000})
    window.location.href = "/login";
  }

  config.headers = {
    'Authorization': `Bearer ${tokensData.headers.bearer}`,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  return config;
});

axiosApiInstance.interceptors.response.use(
  response  => response,
  async (error) => {
         toast.error("Lỗi! Vui lòng thử lại")
    
  }
);

export default axiosApiInstance;