import { LoadingStateEnum } from '@constants';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProjectsUtil, ClientUtil, UserUtil } from '@utils';
import {
  createNewProject,
  deleteProject,
  fetchProjectsAsync,
  getAllAvailableLettersAsync,
  getAllClientNames,
  getAllUserNames,
  updateProject,
} from './projects-async-methods';

// STATE
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
  errorMessage: '',
  projects: [],
  projectsCache: [],
  allProjectsCache: [],

  alphabet: [],
  activeChar: '',

  totalElementCount: 0,
  pageIndex: 1,

  isCreateNewModalOpen: false,
  isUpdateModalOpen: false,
  updateModalProject: null,

  userNames: [],
  clientNames: [],
};

// ACTIONS
const projectsSlice = createSlice({
  name: 'projectsSlice',
  initialState,
  reducers: {
    alphabetFilterProjects: (state, action: PayloadAction<string>) => {
      if (action.payload.toLowerCase() === state.activeChar.toLowerCase()) {
        state.activeChar = '';
        state.pageIndex = 1;
        state.projects = ProjectsUtil.getSetOfProjectsForPage(
          state.pageIndex,
          state.allProjectsCache
        );
        state.projectsCache = state.allProjectsCache;
        state.totalElementCount = state.allProjectsCache.length;
      } else if (
        action.payload.toLowerCase() !== state.activeChar.toLowerCase() &&
        state.activeChar !== ''
      ) {
        const tempProjectList = ProjectsUtil.filterProjectsStartWithChar(
          action.payload,
          state.allProjectsCache
        );

        state.activeChar = action.payload.toLowerCase();
        state.pageIndex = 1;

        state.projects = ProjectsUtil.getSetOfProjectsForPage(
          state.pageIndex,
          tempProjectList
        );

        state.projectsCache = tempProjectList;
        state.totalElementCount = tempProjectList.length;
      } else {
        const tempProjectList = ProjectsUtil.filterProjectsStartWithChar(
          action.payload,
          state.allProjectsCache
        );

        state.activeChar = action.payload.toLowerCase();
        state.pageIndex = 1;

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
      const tempProjectList = state.allProjectsCache.filter((project) =>
        project.name.toLowerCase().includes(action.payload)
      );

      state.pageIndex = 1;
      state.activeChar = '';

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
        state.loadingState = LoadingStateEnum.failure;
        state.errorMessage = action.error.message;
        state.projects = [];
        state.projectsCache = [];
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
        let foundIndex = state.projects.findIndex(
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

export const {
  alphabetFilterProjects,
  changePageIndex,
  searchProjectByTitle,
  toggleCreateNewModal,
  toggleUpdateModal,
  closeModal,
} = projectsSlice.actions;
export default projectsSlice.reducer;
