import axios from "axios"

const getToken = () => {
    if (typeof window !== 'undefined') {
        let token = localStorage.getItem("token");
        return token;
    }
    return null; // Or handle it in whatever way suits your application
}


export const axiosConfig = axios.create({
    baseURL: "/api/",
    headers:{
        "Authorization": `Bearer ${getToken()}`
    }
})