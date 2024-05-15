import toast from "react-hot-toast";
import { axiosConfig } from "./fetcher"

export const createForm = async (data : any)=>{
    try{    
        let response = await axiosConfig.post("form", data)
        console.log(response.data)
        let form = response.data.form;
        return form;
    }   
    catch(err: any){
        console.log(err)
    }
}

export const createFormSubmission = async (id: string, data : any)=>{
    try{    
        let payload = {
            data, formId: id
        }
        let response = await axiosConfig.post("submission", payload)
        console.log(response.data)
        let form = response.data.form;
        return form;
    }   
    catch(err: any){
        console.log(err)
    }
}

export const getForms = async ()=>{
    try{    
        let response = await axiosConfig.get("form")
        let forms = response.data.forms;
        return forms
    }   
    catch(err: any){
        console.log(err)
    }
}

export const getEachForm = async (id: string)=>{
    try{
        let response = await axiosConfig.get(`form/${id}`)
        let form = response.data.form;
        return form
    }
    catch(err: any){
        console.log(err)
    }
}

export const getSubmissionByFormId = async (id: string)=>{
    try{
        let response = await axiosConfig.get(`submission/${id}`)
        let submissions = response.data.submissions;
        return submissions
    }
    catch(err: any){
        console.log(err)
    }
}

export const login = async (data: any)=>{
    try{
        let response = await axiosConfig.post("sign-in", data)
        let token = response.data.token;
        if(token){
            toast.success(response.data.message)
            console.log(response.data.user.email)
            localStorage.setItem("email", response.data.user.email)
        localStorage.setItem("token", token);
        return token;
        }
        return null
    }
    catch(err: any){
        toast.success(err.message)
    }
}


export const signUp = async (data: any)=>{
    try{
        let response = await axiosConfig.post("sign-up", data)
        let token = response.data.token;
        if(token){
            toast.success(response.data.message)
            localStorage.setItem("email", response.data.user.email)
        localStorage.setItem("token", token);
        return token;
        }
        return token;
    }
    catch(err: any){
        toast.success(err.message)
    }
}