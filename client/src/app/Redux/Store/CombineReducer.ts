



import { combineReducers } from 'redux';
import ProjectDetails from '../Slices/ProjectDetails';
import signupReducer from '../Slices/signupReducer';
import professionalRoleReducer from '../Slices/professionalRole';
import CreateProject from '../Slices/CreateProject';
import ButtonSlices from '../Slices/ButtonSlices';
import Updatepassword from '../Slices/Updatepassword';
import SearchData from '../Slices/SearchData';
import LinkReducer from '../Slices/LinkReducer' 

const rootReducer = combineReducers({
   
  signup: signupReducer,
  ProjectDetail:ProjectDetails,
  professionalRole: professionalRoleReducer,
  createProject:CreateProject,
  buttonSlices:ButtonSlices,
  updatepassword:Updatepassword,
  SearchData:SearchData,
  Links: LinkReducer

});

export default rootReducer;
