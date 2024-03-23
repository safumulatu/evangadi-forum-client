import axios from "axios";

const axiosBase = axios.create({
  // baseUrl: `http://localhost:8000/api`,
  baseUrl: `https://evangadi-server-side.onrender.com/`,
});
export default axiosBase;
