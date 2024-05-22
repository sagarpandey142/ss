import axios, { Axios } from "axios"
import { ProjectApiDetail} from "../Api"

export const FetchProject=async()=>{
    try{
     const response=await axios.get(ProjectApiDetail.FetchProject,{});
     return response;
    } catch(error){
        console.log("error",error)
    }
}

export const  findProjectById=async(id:String)=>{
     try{
        const response=await axios.post(ProjectApiDetail.FetchProjectById,{id});
        return response;
     } catch(error){
         console.log("error",error)
     }
}

export const  addSavedProject = async(email,_id) => {
    try{
        const response = await axios.post(ProjectApiDetail.addSavedProject,{Email:email, projectId:_id});
        console.log("response of recent jobs", response);
        if(response){
            return response;
        }
    }catch(error){
        console.log("error", error.message);
    }
}

export const  RemoveSavedProject = async(Email,ProjectId) => {
    try{
        const response = await axios.post(ProjectApiDetail?.RemoveSavedProject,{Email,ProjectId});
        if(response){
            return response;
        }
    }catch(error){
        console.log("error", error.message);
    }
}

export const  ApplyProject=async(email,projectid)=>{
        try{
       const response=await axios.post(ProjectApiDetail?.applyProject,{email,projectid})
       return response;
        } catch(error){
            console.log("error",error)
        }
}

export default FetchProject