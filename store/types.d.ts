import { ThunkAction } from "redux-thunk";

import { ProjectsInterface } from "types/projectsReducer";

export interface RootState {
  projects: ProjectsInterface;
}

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export type PromiseThunk<ReturnType = void> = ThunkAction<Promise<ReturnType>, RootState, unknown, Action<string>>;
