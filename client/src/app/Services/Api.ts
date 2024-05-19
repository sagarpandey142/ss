// projectApi.ts
const BACKEND_URL: string = "https://copart-r61c.onrender.com/";

export const Projfile = {
  FetchProject: BACKEND_URL + "v1/projects/findProjects",
  FetchProjectDescById: BACKEND_URL + "v1/projects/findProjectById",
  addSavedProject: BACKEND_URL+"v1/addSavedProject",
  RemoveSavedProject:BACKEND_URL+"v1/removeSavedProject"
};

export const profileApiDetail={
  profileInfo:BACKEND_URL+"v1/FindByEmail" ,
  DecodedApi:BACKEND_URL+"v1/DecodToken",
}