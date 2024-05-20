import axios from 'axios';
import {profileApiDetail} from '../Api';

// exports.FindByEmail = async (email:string) => {

//     try{
//         const response = await axios.post(Profile.profileInfo, {Email:email});
//         console.log("response", response);
//         if(response){
//             return response;
//         }
//     }catch(error){
//         console.log("error", error);
//     }
// }

// exports.UpdateProfile = async(data:string) => {
//     try{
//         const response = await axios.put(Profile.UpdateProfile, data);
//         console.log("response hai baba abhi ka", response);
//         if(response){
//             return response;
//         }
//     }catch(error){
//         console.log("error", error.messege);
//     }
// }

// exports.DeleteProfile = async(data:string) => {
//     console.log("data",data)
//     try{
//         const response = await axios.delete(Profile.DeleteProfile, data);
//         console.log("response hai baba abhi ka", response);
//         if(response){
//             return response;
//         }
//     }catch(error){
//         console.log("error", error);
//     }
// }


export const UpdatePassword = async (Email:string,newPassword:string) => {
    try{
        const response = await axios.post(profileApiDetail.UpdatePassword, {Email,newPassword});
        if(response){
            return response;
        }
    }catch(error){
        console.log("error", error);
    }
}


export const FindIfEmailExists = async(email:string) => {
    console.log("email", email)
    try{
        const response = await axios.post(profileApiDetail.FindIfEmailExistApi, {Email: email})
        return response;
    }catch(error){
        console.log("error", error.messege);
    }
}
