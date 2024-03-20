import axios from "axios"

const instance = axios.create({
    // baseURL:"http://localhost:8000/api/users" 
    baseURL:"https://evangadi-forum-server-k1j8.onrender.com/" 
})

export default instance;