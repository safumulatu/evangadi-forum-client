import axios from "axios";

const axiosBase = axios.create({
  baseUrl: `http://localhost:8000/api`,
});
export default axiosBase;
