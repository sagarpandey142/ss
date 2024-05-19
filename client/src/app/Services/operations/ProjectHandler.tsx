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

export default FetchProject