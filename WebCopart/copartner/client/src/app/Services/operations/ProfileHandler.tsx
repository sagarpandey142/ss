import axios from 'axios';
import {Profile, profileApiDetail} from '../Api';

export const FindByEmail = async (email:string,token:String) => {

    try{
        const response = await axios.post(Profile.profileInfo, {Email:email},{
            headers: {
                'Authorization': `Bearer ${token}`,
              }
        });
        console.log("response", response);
        if(response){
            return response;
        }
    }catch(error){
        console.log("error", error);
    }
}

export const UpdateProfile = async(data:string) => {
    try{
        const response = await axios.put(Profile.UpdateProfile, data);
        console.log("response hai baba abhi ka", response);
        if(response){
            return response;
        }
    }catch(error){
        console.log("error", error.messege);
    }
}

export const DeleteProfile = async(data:string) => {
    console.log("data",data)
    try{
        const response = await axios.delete(Profile.DeleteProfile, data);
        console.log("response hai baba abhi ka", response);
        if(response){
            return response;
        }
    }catch(error){
        console.log("error", error);
    }
}


export const UpdatePassword = async (Email:string,newPassword:string) => {
    try{
        const response = await axios.post(Profile.updatepassword, {Email,newPassword});
        if(response){
            return response;
        }
    }catch(error){
        console.log("error", error);
    }
}


export const  GetUserDetail=async(token:String)=>{
    try{
       const response=await axios.post(profileApiDetail.profileInfo,{},{
        headers: {
            'Authorization': `Bearer ${token}`,
          }
       });
       return response
    } catch(error){
        console.log("error",error)
    }
}