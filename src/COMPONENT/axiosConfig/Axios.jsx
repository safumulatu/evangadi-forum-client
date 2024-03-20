import axios from "axios"

const instance = axios.create({
    baseURL:"https://evangadi-forum-server-k1j8.onrender.com" 
    // baseURL:"http://localhost:8000/api/users" 

})

export default instance;