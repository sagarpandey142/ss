import axios from 'axios'
// import { Profile } from '../Api'
const { SignupRoute } = require("../Api")


interface SignupData {
     name: string,
    email: string,
    professional_role: string,
    github_link: string,
    linkedin_link: string,
    tech_stack: string,
    password: string,  
    user_bio: string,
  }
  interface TransformedSignupData {
    Full_Name: string;
    Tech: string;
    Email: string;
    GithubLink: string;
    LinkedinLink: string;
    Professional_Role: string;
    password: string;
    User_Desc: string;
  }

  const transformSignupData = (data: SignupData): TransformedSignupData => ({
    Full_Name: data.name,
    Tech: data.tech_stack,
    Email: data.email,
    GithubLink: data.github_link,
    LinkedinLink: data.linkedin_link,
    password: data.password,
    Professional_Role: data.professional_role,
    User_Desc: data.user_bio,
});

  
  

  export const signupHandler = async (data: SignupData) => {
    console.log("hii");
    try {
      const transformedData = transformSignupData(data);
      const response = await axios.post(SignupRoute.signup, transformedData);
      console.log("response", response);
      if (response) {
        return response;
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

export const GetUserDetail=async(email)=>{
    try{
       const response=await axios.post(Profile.profileInfo,{Email:email});
       return response
    } catch(error){
        console.log("error",error)
    }
}

export const loginHandler = async(email: string,  password: string ) => {
    console.log("first", email, password)
    try{
        console.log("try")
        const response = await axios.post(SignupRoute.login, {email, password})
        console.log("response", response);
        return response;
    }catch(error){
        console.log("error", error)
    }
}


