"use client"
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    ProjectPublished:[],
    ProjectDescriptionData:[]
};

const ProjectSlice = createSlice({
    name: 'ProjectSlice',
    initialState,
    reducers: {
        updateProjectSlice: (state, action) => {
            state.ProjectPublished= action.payload
        },
        updateProjectDescriptionData: (state, action) => {
            state.ProjectDescriptionData= action.payload
        },
    }
});

export const  { updateProjectSlice,updateProjectDescriptionData} = ProjectSlice.actions;
export default ProjectSlice.reducer;