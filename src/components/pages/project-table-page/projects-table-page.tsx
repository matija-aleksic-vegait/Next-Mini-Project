"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AppDispatch,
  RootState,
  alphabetFilterProjects,
  changePageIndex,
  searchProjectByTitle,
  toggleCreateNewModal,
  toggleUpdateModal,
  closeModal,
  fetchProjectsAsync,
  getAllAvailableLettersAsync,
  getAllClientNames,
  getAllUserNames,
  deleteProject,
} from "@redux";
import { LoadingStateEnum, MockQueryConstants } from "@constants";
import { EmptyState, ErrorState, LoadingState } from "@molecules";
import { ProjectsTableTemplate } from "@templates";
import { ClientUtil, UserUtil } from "@/utils";

export const ProjectsTablePage: React.FC = () => {
  const loadingState = useSelector(
    (state: RootState) => state.projectsStore.loadingState
  );
  const errorMessage = useSelector(
    (state: RootState) => state.projectsStore.errorMessage
  );
  const projects = useSelector(
    (state: RootState) => state.projectsStore.projects
  );
  const alphabet = useSelector(
    (state: RootState) => state.projectsStore.alphabet
  );
  const pageIndex = useSelector(
    (state: RootState) => state.projectsStore.pageIndex
  );
  const totalElementCount = useSelector(
    (state: RootState) => state.projectsStore.totalElementCount
  );
  const activeChar = useSelector(
    (state: RootState) => state.projectsStore.activeChar
  );
  const isCreateNewModalOpen = useSelector(
    (state: RootState) => state.projectsStore.isCreateNewModalOpen
  );
  const isUpdateModalOpen = useSelector(
    (state: RootState) => state.projectsStore.isUpdateModalOpen
  );
  const updateProject = useSelector(
    (state: RootState) => state.projectsStore.updateModalProject
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
    <ProjectsTableTemplate
      projects={projects}
      alphabet={alphabet}
      pageIndex={pageIndex}
      totalElementCount={totalElementCount}
      activeChar={activeChar}
      isCreateNewModalOpen={isCreateNewModalOpen}
      isUpdateModalOpen={isUpdateModalOpen}
      updateProject={updateProject}
      changePageIdx={changePageIdx}
      closeProjectModal={closeProjectModal}
      deleteProjectEntity={deleteProjectEntity}
      getAllAvailableLetters={getAllAvailableLetters}
      newProjectModal={newProjectModal}
      searchProjects={searchProjects}
      selectActiveLetter={selectActiveLetter}
      updateProjectModal={updateProjectModal}
    />
  );
};
