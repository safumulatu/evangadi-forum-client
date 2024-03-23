import axios from "axios";

const axiosBase = axios.create({
  baseUrl: `https://evangadi-server-side.onrender.com/api`,
  // baseUrl: `http://localhost:8000/api`,
});
export default axiosBase;
