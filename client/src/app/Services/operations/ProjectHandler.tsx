import axios from "axios"
import {ProjectApiDetail} from "../Api"

const FetchProject=async()=>{
    try{
     const response=await axios.get(ProjectApiDetail.FetchProject,{});
     return response;
    } catch(error){
        console.log("error",error)
    }
}

export const findProjectById=async(id:String)=>{
    console.log("id",id)
     try{
        const response=await axios.post(ProjectApiDetail.FetchProjectDescById,{id});
        return response;
     } catch(error){
         console.log("error",error)
     }
}

export const addSavedProject = async(email,_id) => {
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

export const RemoveSavedProject = async(Email,ProjectId) => {
    try{
        const response = await axios.post(ProjectApiDetail?.RemoveSavedProject,{Email,ProjectId});
        if(response){
            return response;
        }
    }catch(error){
        console.log("error", error.message);
    }
}

export default FetchProject