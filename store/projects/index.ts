import { v4 } from "uuid";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ProjectInterface, ProjectsInterface } from "types/store/projectsReducer";

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
      state.projects.push({
        _id: v4(),
        ...payload,
      });
    },
    setWorkedTime: (
      state,
      {
        payload,
      }: PayloadAction<{
        _id: ProjectInterface["_id"];
        workedTime: ProjectInterface["workedTime"];
      }>,
    ) => {
      const currentProject = state.projects.find((project) => project._id === payload._id);
      currentProject!.workedTime = payload.workedTime;
    },
  },
});

export const { setProjectData, setWorkedTime } = projectsSlice.actions;

export default projectsSlice.reducer;
