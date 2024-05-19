import { combineReducers } from 'redux';
import ProjectDetails from '../Slices/ProjectDetails';


const rootReducer = combineReducers({
   ProjectDetail:ProjectDetails,
});

export default rootReducer;
