import ProjectsService from "@/features/projects/services/projects-service";
import { LoadingStateEnum } from "../../../constants/loading-state-enum";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProjectsUtil } from "@/features/projects/utils/projects-util";
import UserService from "@/features/users/services/user-service";
import ClientService from "@/features/clients/services/client-service";
import UserUtil from "@/features/users/utils/user-util";
import ClientUtil from "@/features/clients/utils/client-util";

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
  updateModalProject?: any;

  userNames: Array<any>;
  clientNames: Array<any>;
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
  updateModalProject: null,

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
      state.isUpdateModalOpen = false;
      state.isCreateNewModalOpen = !state.isCreateNewModalOpen;
    },
    toggleUpdateModal: (state, action: PayloadAction<string>) => {
      state.updateModalProject = action.payload;
      state.isCreateNewModalOpen = false;
      state.isUpdateModalOpen = !state.isUpdateModalOpen;
    },
    closeModal: (state) => {
      state.isCreateNewModalOpen = false;
      state.isUpdateModalOpen = false;
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
      .addCase(
        getAllUserNames.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.userNames = UserUtil.extractUserNames(action.payload);
        }
      )
      .addCase(
        getAllClientNames.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.clientNames = ClientUtil.extractClientNames(action.payload);
        }
      )
      .addCase(
        createNewProject.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.projects.push(action.payload.data);
          state.allProjectsCache.push(action.payload.data);
          state.projectsCache.push(action.payload.data);
          state.totalElementCount = state.allProjectsCache.length;
          state.isCreateNewModalOpen = false;
        }
      )
      .addCase(updateProject.fulfilled, (state, action: PayloadAction<any>) => {
        var foundIndex = state.projects.findIndex(
          (element) => element.id === action.payload.data.id
        );
        state.projects[foundIndex] = action.payload.data;
        foundIndex = state.allProjectsCache.findIndex(
          (element) => element.id === action.payload.data.id
        );
        state.allProjectsCache[foundIndex] = action.payload.data;
        foundIndex = state.projectsCache.findIndex(
          (element) => element.id === action.payload.data.id
        );
        state.projectsCache[foundIndex] = action.payload.data;
        state.totalElementCount = state.allProjectsCache.length;
        state.isUpdateModalOpen = false;
      })
      .addCase(
        deleteProject.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.projects = state.projects.filter(
            (project) => project.id !== action.payload
          );
          state.allProjectsCache = state.allProjectsCache.filter(
            (project) => project.id !== action.payload
          );
          state.projectsCache = state.allProjectsCache.filter(
            (project) => project.id !== action.payload
          );
          state.totalElementCount = state.allProjectsCache.length;
          state.isUpdateModalOpen = false;
        }
      ),
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

export const createNewProject = createAsyncThunk(
  "projectsSlice/createNewProject",
  async (data: any) => {
    return await ProjectsService.createNewProject(data)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }
);

export const updateProject = createAsyncThunk(
  "projectsSlice/updateProject",
  async (data: any) => {
    return await ProjectsService.updateProject(data.data, data.id)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }
);

export const deleteProject = createAsyncThunk(
  "projectsSlice/deleteProject",
  async (id: string) => {
    return await ProjectsService.deleteProject(id)
      .then(() => {
        return id;
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
  closeModal,
} = projectsSlice.actions;
export default projectsSlice.reducer;
