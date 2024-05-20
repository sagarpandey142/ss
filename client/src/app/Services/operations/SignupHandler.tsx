import axios from 'axios'
import { Profile } from '../Api'
const { SignupRoute } = require("../Api")


interface SignupData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    country?: string;
    agreeTerms: boolean;
  }
  
export const signupHandler = async(data: SignupData) => {
    try{
        const response = await axios.post(SignupRoute.signup, data)
        if(response){
             return response
        }
    }catch(error){
        console.error("Error:", error);
    }
}

export const GetUserDetail=async(email)=>{
    try{
       const response=await axios.post(Profile.profileInfo,{Email:email});
       return response
    } catch(error){
        console.log("error",error)
    }
}