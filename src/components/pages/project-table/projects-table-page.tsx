"use client";

import { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import {
  alphabetFilterProjects,
  changePageIndex,
  searchProjectByTitle,
  toggleCreateNewModal,
  toggleUpdateModal,
  closeModal,
} from "@/redux/projects/projects-slice";
import { LoadingStateEnum } from "@/constants/loading-state-enum";
import {
  fetchProjectsAsync,
  getAllAvailableLettersAsync,
  getAllClientNames,
  getAllUserNames,
  deleteProject,
} from "../../../redux/projects/projects-async-methods";
import { EmptyState } from "@/components/molecules/fetching-states/empty-state/empty-state";
import { ErrorState } from "@/components/molecules/fetching-states/error-state/error-state";
import { LoadingState } from "@/components/molecules/fetching-states/loading-state/loading-state";
import ProjectsTableTemplate from "@/components/templates/project-table/projects-table-template";
import { store } from "@/redux/store";

function ProjectsTablePage() {
  const loadingState = useSelector(
    (state: RootState) => state.projectsStore.loadingState
  );
  const errorMessage = useSelector(
    (state: RootState) => state.projectsStore.errorMessage
  );

  const newProjectModal = () => {
    dispatch(toggleCreateNewModal());
  };

  const updateProjectModal = (project: any) => {
    dispatch(toggleUpdateModal(project));
  };

  const searchProjects = (searchString: string) => {
    dispatch(searchProjectByTitle(searchString));
  };

  const getAllAvailableLetters = () => {
    dispatch(getAllAvailableLettersAsync());
  };

  const selectActiveLetter = (char: string) => {
    dispatch(alphabetFilterProjects(char));
  };

  const changePageIdx = (pageIndex: number) => {
    dispatch(changePageIndex(pageIndex));
  };

  const closeProjectModal = async () => {
    dispatch(closeModal());
  };

  const deleteProjectEntity = async (id: string) => {
    dispatch(deleteProject(id));
  };

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProjectsAsync());
    dispatch(getAllUserNames());
    dispatch(getAllClientNames());
  }, []);

  if (loadingState === LoadingStateEnum.loading) return LoadingState({});
  if (loadingState === LoadingStateEnum.empty)
    return EmptyState({ entitiesName: "Projects" });
  if (loadingState === LoadingStateEnum.failure)
    return ErrorState({ errorMessage: errorMessage });
  return (
    <Provider store={store}>
      <ProjectsTableTemplate
        changePageIdx={changePageIdx}
        closeProjectModal={closeProjectModal}
        deleteProjectEntity={deleteProjectEntity}
        getAllAvailableLetters={getAllAvailableLetters}
        newProjectModal={newProjectModal}
        searchProjects={searchProjects}
        selectActiveLetter={selectActiveLetter}
        updateProjectModal={updateProjectModal}
      />
    </Provider>
  );
}

export default ProjectsTablePage;
