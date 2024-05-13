import axios from "axios"

export const setConfig = ()=>{
    let token = localStorage.getItem("token")
    return {
        headers:{
            "Authorization": `Bearer ${token}`
        }
    }
}

export const axiosConfig = axios.create({
    baseURL: "/api/",
    headers:{
        "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
})