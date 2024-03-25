import axios from "axios";

const axiosBase = axios.create({
  baseUrl: `https://evanforum-2kee.onrender.com/api/users`,
  // baseUrl: `http://localhost:8000/api/users`,
});
export default axiosBase;
