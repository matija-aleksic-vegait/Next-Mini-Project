import ProjectsService from "@/services/projectsService";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoadingStateEnum } from "@/utils/helpers/LoadingStateEnum";

//STATE
interface ProjectsState {
  loadingState: LoadingStateEnum;
  errorMessage: string;
  projects: Array<any>;
}

const initialState: ProjectsState = {
  loadingState: LoadingStateEnum.initial,
  errorMessage: "",
  projects: [],
};

//ACTIONS
const projectsSlice = createSlice({
  name: "projectsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => [
    builder
      .addCase(fetchProjectsAsync.pending, (state) => {
        state.loadingState = LoadingStateEnum.loading;
      })
      .addCase(
        fetchProjectsAsync.fulfilled,
        (state, action: PayloadAction<any>) => {
          if (action.payload.length === 0)
            state.loadingState = LoadingStateEnum.empty;
          else state.loadingState = LoadingStateEnum.loaded;
          state.projects = action.payload;
        }
      )
      .addCase(fetchProjectsAsync.rejected, (state, action: any) => {
        console.log(action);
        console.log(typeof action);
        (state.loadingState = LoadingStateEnum.failure),
          (state.errorMessage = action.error.message),
          (state.projects = []);
      }),
  ],
});

//ASYNC METHODS
export const fetchProjectsAsync = createAsyncThunk(
  "projectsSlice/fetchProjects",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return await ProjectsService.getAllProjectsForTable(1, 10)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }
);

export const {} = projectsSlice.actions;
export default projectsSlice.reducer;
