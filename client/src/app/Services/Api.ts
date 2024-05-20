// projectApi.ts
const BACKEND_URL: string = "https://copart-r61c.onrender.com/";

export const Projfile = {
  FetchProject: BACKEND_URL + "v1/projects/findProjects",
  FetchProjectDescById: BACKEND_URL + "v1/projects/findProjectById" 
};

export const SignupRoute={
  signup: BACKEND_URL + "v1/signup"
}


export const generateVerifyOTP = {
  generateOTP : BACKEND_URL + "v1/GetOtp",
  verifyOTP : BACKEND_URL + "v1/verifyOtp",
  login : BACKEND_URL + "v1/login",
  DecodedApi:BACKEND_URL+"v1/DecodToken",

}

export const Profile={
  profileInfo:BACKEND_URL +"v1/FindByEmail" ,  
  UpdateProfile:BACKEND_URL +"v1/updateProfile",
  DeleteProfile:BACKEND_URL +"v1/deleteProfile",
  updatepassword:BACKEND_URL +"v1/updatePassword"
}