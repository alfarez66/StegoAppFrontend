import axios from "axios";

const constan = 'http://localhost:3000'; // make sure this is the correct value
// const token = 'a'; // replace 'TOKEN' with your actual environment variable

export default axios.create({
    baseURL: constan,
    headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // 'Authorization': `Bearer ${token}`
    }
})