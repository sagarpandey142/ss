import axios from 'axios';
import {Profile, profileApiDetail} from '../Api';
import toast from 'react-hot-toast';


export const UpdateProfile = async(data,token:String) => {
    try{
        const toastid=toast.loading("Loading...");
        const response = await axios.put(profileApiDetail.updateProfileData, {data},{
            headers: {
               Authorization : `Bearer ${token}`,
            }
     });
     toast.dismiss(toastid)
        if(response){
            return response;
        }
    }catch(error){
        console.log("error", error);
        toast.error(`error occured : ${error}`)
    }
}

export const UpdateProfilePicture = async(file,token) => {
    try{
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'at3gf6rj')
        formData.append('folder', 'Copartner');
        const response = await axios.post("https://api.cloudinary.com/v1_1/dtd8peoae/image/upload", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
    });
       const sendSecureUrlToBac=await axios.put(profileApiDetail.UpdateProfilePic,{secure_url:response.data.secure_url},{
        headers: {
            Authorization : `Bearer ${token}`,
         }
       })
        if(response){
            return response;
        }
    }catch(error){
        console.log("erro", error);
    }
}

export const UpdateResume= async(file,token) => {
   
    try{
     const toastid= toast.loading("Loading...");
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'akr17cvp')
        formData.append('folder', 'Copartner');
        const response = await axios.post("https://api.cloudinary.com/v1_1/dtd8peoae/image/upload", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
    });
     console.log("resume",response)

       const sendSecureUrlToBac=await axios.put(profileApiDetail.updateResume,{secure_url:response.data.secure_url},{
        headers: {
            Authorization : `Bearer ${token}`,
         }
       })
       toast.dismiss(toastid);
        if(response){
            return sendSecureUrlToBac;
        }

    }catch(error){
        console.log("erro", error);
        toast.error(`error occured : ${error}`)
    }
   
}


export const DeleteProfile = async(data:string) => {

    try{
        const response = await axios.delete(profileApiDetail.DeleteProfile, data);
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
        const response = await axios.post(profileApiDetail.updatepassword, {Email,newPassword});
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