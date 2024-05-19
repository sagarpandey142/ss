import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ProjectDetail: 0,
};

const ProjectDetail = createSlice({
  name: 'ProjectDetail',
  initialState,
  reducers: {
    updateProjectDetail(state, action) {
      state.ProjectDetail = action.payload;
    },
  },
});

export const { updateProjectDetail } = ProjectDetail.actions;
export default ProjectDetail.reducer;
