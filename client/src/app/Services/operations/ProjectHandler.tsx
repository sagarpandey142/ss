import axios from "axios"
import {ProjectApiDetail} from "../Api"

export const FetchProject=async()=>{
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


// Define the response type if you know the structure. For now, using `any`.


export const addProjects = async (
  email: string,
  projectName: string,
  projectDescription: string,
  Skill: string,
  BasicDetail: string,
  image: File | null
) => {
  console.log("inside try");
  try {
    // const formData = new FormData();
    // formData.append('Email', email);
    // formData.append('projectName', projectName);
    // formData.append('projectDescription', projectDescription);
    // formData.append('Skill', Skill);
    // formData.append('BasicDetail', BasicDetail);
    // if (image) {
    //   formData.append('image', image);
    // }

    // console.log("formdata", formData)

    const response = await axios.post(ProjectApiDetail.addProject, {Email:email,projectName,projectDescription,Skill,BasicDetail,image});

    console.log("response", response);
    return response;
  } catch (error: any) {
    console.log("error", error);
  }
};

