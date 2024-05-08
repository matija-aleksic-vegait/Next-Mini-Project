import ProjectsService from "@/services/projectsService";
import { LoadingStateEnum } from "../../constants/loadingStateEnum";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProjectsUtil } from "@/utils/projectsUtil";
import UserService from "@/services/userService";
import ClientService from "@/services/clientService";
import UserUtil from "@/utils/userUtil";
import ClientUtil from "@/utils/clientUtil";

//STATE
interface ProjectsState {
  loadingState: LoadingStateEnum;
  errorMessage: string;
  projects: Array<any>;
  projectsCache: Array<any>;
  allProjectsCache: Array<any>;

  alphabet: Array<string>;
  activeChar: string;

  totalElementCount: number;
  pageIndex: number;

  isCreateNewModalOpen: boolean;
  isUpdateModalOpen: boolean;

  userNames: Array<string>;
  clientNames: Array<string>;
}

const initialState: ProjectsState = {
  loadingState: LoadingStateEnum.initial,
  errorMessage: "",
  projects: [],
  projectsCache: [],
  allProjectsCache: [],
  alphabet: [],
  activeChar: "",
  totalElementCount: 0,
  pageIndex: 1,
  isCreateNewModalOpen: false,
  isUpdateModalOpen: false,

  userNames: [],
  clientNames: [],
};

//ACTIONS
const projectsSlice = createSlice({
  name: "projectsSlice",
  initialState,
  reducers: {
    alphabetFilterProjects: (state, action: PayloadAction<string>) => {
      if (action.payload.toLowerCase() === state.activeChar.toLowerCase()) {
        state.activeChar = "";
        state.pageIndex = 1;
        state.projects = ProjectsUtil.getSetOfProjectsForPage(
          state.pageIndex,
          state.allProjectsCache
        );
        state.projectsCache = state.allProjectsCache;
        state.totalElementCount = state.allProjectsCache.length;
      } else if (
        action.payload.toLowerCase() !== state.activeChar.toLowerCase() &&
        state.activeChar !== ""
      ) {
        state.activeChar = action.payload.toLowerCase();
        state.pageIndex = 1;

        var tempProjectList = ProjectsUtil.filterProjectsStartWithChar(
          action.payload,
          state.allProjectsCache
        );
        state.projects = ProjectsUtil.getSetOfProjectsForPage(
          state.pageIndex,
          tempProjectList
        );

        state.projectsCache = tempProjectList;
        state.totalElementCount = tempProjectList.length;
      } else {
        state.activeChar = action.payload.toLowerCase();
        state.pageIndex = 1;

        var tempProjectList = ProjectsUtil.filterProjectsStartWithChar(
          action.payload,
          state.allProjectsCache
        );

        state.projects = ProjectsUtil.getSetOfProjectsForPage(
          state.pageIndex,
          tempProjectList
        );
        state.projectsCache = tempProjectList;

        state.totalElementCount = tempProjectList.length;
      }
    },
    changePageIndex: (state, action: PayloadAction<number>) => {
      state.pageIndex = action.payload;
      state.projects = ProjectsUtil.getSetOfProjectsForPage(
        state.pageIndex,
        state.projectsCache
      );
    },
    searchProjectByTitle: (state, action: PayloadAction<string>) => {
      state.pageIndex = 1;
      state.activeChar = "";

      var tempProjectList = state.allProjectsCache.filter((project) =>
        project.name.toLowerCase().includes(action.payload)
      );

      state.projects = ProjectsUtil.getSetOfProjectsForPage(
        state.pageIndex,
        tempProjectList
      );
      state.projectsCache = tempProjectList;
      state.totalElementCount = tempProjectList.length;
    },
    toggleCreateNewModal: (state) => {
      state.isCreateNewModalOpen = !state.isCreateNewModalOpen;
      state.isUpdateModalOpen = false;
    },
    toggleUpdateModal: (state) => {
      state.isUpdateModalOpen = !state.isUpdateModalOpen;
      state.isCreateNewModalOpen = false;
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
          if (action.payload.length === 0)
            state.loadingState = LoadingStateEnum.empty;
          else state.loadingState = LoadingStateEnum.loaded;

          state.pageIndex = 1;

          state.projects = ProjectsUtil.getSetOfProjectsForPage(
            state.pageIndex,
            action.payload
          );

          state.projectsCache = action.payload;
          state.allProjectsCache = action.payload;
          state.totalElementCount = action.payload.length;
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
      )
      .addCase(getAllUserNames.fulfilled, (state, action: any) => {
        state.userNames = UserUtil.extractUserNames(action.payload);
      })
      .addCase(getAllClientNames.fulfilled, (state, action: any) => {
        state.clientNames = ClientUtil.extractClientNames(action.payload);
      }),
  ],
});

//ASYNC METHODS
export const fetchProjectsAsync = createAsyncThunk(
  "projectsSlice/fetchProjects",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return await ProjectsService.getAllProjects().then((response) => {
      return response;
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

export const getAllUserNames = createAsyncThunk(
  "projectsSlice/getAllUserNames",
  async () => {
    return await UserService.getAllUsers()
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }
);

export const getAllClientNames = createAsyncThunk(
  "projectsSlice/getAllClientNames",
  async () => {
    return await ClientService.getAllClients()
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }
);

export const {
  alphabetFilterProjects,
  changePageIndex,
  searchProjectByTitle,
  toggleCreateNewModal,
  toggleUpdateModal,
} = projectsSlice.actions;
export default projectsSlice.reducer;
