import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ProjectInterface, ProjectsInterface } from "types/projectsReducer";

const initialState: ProjectsInterface = {
  projects: [],
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjectData: (
      state,
      {
        payload,
      }: PayloadAction<{
        title: ProjectInterface["title"];
        workedTime: ProjectInterface["workedTime"];
      }>,
    ) => {
      state.projects.push(payload);
    },
  },
});

export const { setProjectData } = projectsSlice.actions;

export default projectsSlice.reducer;
