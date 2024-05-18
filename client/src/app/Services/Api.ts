// projectApi.ts
const BACKEND_URL: string = "https://copart-backend.onrender.com/";

export const ProjectApiDetail = {
  FetchProject: BACKEND_URL + "v1/projects/findProjects",
  FetchProjectDescById: BACKEND_URL + "v1/projects/findProjectById" 
};
