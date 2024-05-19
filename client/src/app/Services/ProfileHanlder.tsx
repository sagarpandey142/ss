import axios from "axios";
import { profileApiDetail } from "./Api";

export const DecodedTokenHandler=async(token)=>{
 
    try{
    const response=await axios.post(profileApiDetail.DecodedApi,{token});
    return response;

    } catch(error){
         console.log("error",error)
    }
}

export const GetUserDetail=async(email)=>{
    try{
       const response=await axios.post(profileApiDetail.profileInfo,{Email:email});
       return response
    } catch(error){
        console.log("error",error)
    }
}