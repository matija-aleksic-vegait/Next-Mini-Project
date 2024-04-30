import ProjectsService from "@/services/projectsService";
import { LoadingStateEnum } from "../../utils/constants/loadingStateEnum";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import TableConstants from "@/utils/constants/tableConstants";

//STATE
interface ProjectsState {
  loadingState: LoadingStateEnum;
  errorMessage: string;
  projects: Array<any>;
  projectsCache: Array<any>;

  alphabet: Array<string>;
  activeLetter: string;

  totalElementCount: number;
  pageIndex: number;
}

const initialState: ProjectsState = {
  loadingState: LoadingStateEnum.initial,
  errorMessage: "",
  projects: [],
  projectsCache: [],
  alphabet: [],
  activeLetter: "",
  totalElementCount: 0,
  pageIndex: 1,
};

//ACTIONS
const projectsSlice = createSlice({
  name: "projectsSlice",
  initialState,
  reducers: {
    alphabetFilterProjects: (state, action: PayloadAction<string>) => {
      if (action.payload.toLowerCase() === state.activeLetter.toLowerCase()) {
        state.activeLetter = "";
        state.projects = state.projectsCache;
      } else if (
        action.payload.toLowerCase() !== state.activeLetter.toLowerCase() &&
        state.activeLetter !== ""
      ) {
        state.activeLetter = action.payload.toLowerCase();
        state.projects = state.projectsCache.filter(
          (project) =>
            project.name.charAt(0).toLowerCase() ===
            action.payload.toLowerCase()
        );
      } else {
        state.activeLetter = action.payload.toLowerCase();
        state.projectsCache = state.projects;
        state.projects = state.projects.filter(
          (project) =>
            project.name.charAt(0).toLowerCase() ===
            action.payload.toLowerCase()
        );
      }
    },
  },
  extraReducers: (builder) => [
    builder
      .addCase(fetchProjectsAsync.pending, (state) => {
        state.loadingState = LoadingStateEnum.loading;
      })
      .addCase(
        fetchProjectsAsync.fulfilled,
        (state, action: PayloadAction<any>) => {
          if (action.payload.data.projects.length === 0)
            state.loadingState = LoadingStateEnum.empty;
          else state.loadingState = LoadingStateEnum.loaded;
          state.projects = action.payload.data.projects;
          state.projectsCache = action.payload.data.projects;
          state.totalElementCount = action.payload.data.count;
          state.pageIndex = action.payload.pageIndex;
        }
      )
      .addCase(fetchProjectsAsync.rejected, (state, action: any) => {
        (state.loadingState = LoadingStateEnum.failure),
          (state.errorMessage = action.error.message),
          (state.projects = []),
          (state.projectsCache = []);
      })
      .addCase(
        getAllAvailableLettersAsync.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.alphabet = action.payload;
        }
      ),
  ],
});

//ASYNC METHODS
export const fetchProjectsAsync = createAsyncThunk(
  "projectsSlice/fetchProjects",
  async (pageIndex: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return await ProjectsService.getAllProjectsForTable(
      pageIndex,
      TableConstants.elementsPerPage
    )
      .then((response) => {
        return {
          data: response,
          pageIndex: pageIndex,
        };
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }
);

export const getAllAvailableLettersAsync = createAsyncThunk(
  "projectsSlice/getAllProjectsAlphabet",
  async () => {
    return await ProjectsService.getAllProjectsAlphabet()
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }
);

export const { alphabetFilterProjects } = projectsSlice.actions;
export default projectsSlice.reducer;
