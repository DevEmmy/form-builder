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