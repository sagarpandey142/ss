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

export const  addSavedProject = async(_id:String,token:String) => {
    try{
        const response = await axios.post(ProjectApiDetail.addSavedProject,{ projectId:_id},{
            headers: {
                Authorization : `Bearer ${token}`,
             }
        });
        console.log("response of recent jobs", response);
        if(response){
            return response;
        }
    }catch(error){
        console.log("error", error.message);
    }
}

export const  RemoveSavedProject = async(ProjectId:String,token:String) => {
    try{
        const response = await axios.post(ProjectApiDetail?.RemoveSavedProject,{ProjectId},{
            headers: {
                Authorization : `Bearer ${token}`,
             }
        });
        if(response){
            return response;
        }
    }catch(error){
        console.log("error", error);
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