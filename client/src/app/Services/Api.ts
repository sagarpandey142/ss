// projectApi.ts
const BACKEND_URL: string = "https://copart-r61c.onrender.com/";

export const ProjectApiDetail = {
  FetchProject: BACKEND_URL + "v1/projects/findProjects",
  FetchProjectDescById: BACKEND_URL + "v1/projects/findProjectById" 
};
