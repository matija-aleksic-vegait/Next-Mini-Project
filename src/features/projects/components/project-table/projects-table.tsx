"use client";

import { useEffect } from "react";
import ProjectCard from "@/features/projects/components/cards/project-card";
import Pagination from "@/components/table-controls/pagination";
import AlphabetFilter from "@/components/table-controls/alphabet-filter";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/store";
import {
  alphabetFilterProjects,
  changePageIndex,
  searchProjectByTitle,
  toggleCreateNewModal,
  toggleUpdateModal,
} from "@/features/projects/redux/projects-slice";
import { LoadingStateEnum } from "@/constants/loading-state-enum";

import ProjectModal from "@/features/projects/components/modals/project-modal";
import {
  fetchProjectsAsync,
  getAllAvailableLettersAsync,
  getAllClientNames,
  getAllUserNames,
} from "../../redux/projects-async-methods";
import { TableHeader } from "@/components/organisms/table/table-header/table-header";
import LoadingState from "@/components/molecules/fetching-states/loading-state/loading-state";
import EmptyState from "@/components/molecules/fetching-states/empty-state/empty-state";
import ErrorState from "@/components/molecules/fetching-states/error-state/error-state";

function ProjectsTable() {
  const projects = useSelector(
    (state: RootState) => state.projectsStore.projects
  );
  const loadingState = useSelector(
    (state: RootState) => state.projectsStore.loadingState
  );
  const errorMessage = useSelector(
    (state: RootState) => state.projectsStore.errorMessage
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

  var title = "Projects";
  var description =
    "Here, you have full control over your project database, empowering you to efficiently organize and maintain your projects.";

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

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProjectsAsync());
    dispatch(getAllUserNames());
    dispatch(getAllClientNames());
  }, []);

  if (loadingState === LoadingStateEnum.loading) return LoadingState();
  if (loadingState === LoadingStateEnum.empty)
    return EmptyState({ entitiesName: title });
  if (loadingState === LoadingStateEnum.failure)
    return ErrorState({ errorMessage: errorMessage });
  return (
    <>
      <TableHeader
        title={title}
        description={description}
        newElementFunction={newProjectModal}
        searchFunction={searchProjects}
      />
      <AlphabetFilter
        activeLetter={activeChar}
        alphabetSelector={alphabet}
        getAllAlphabetLettersFunction={getAllAvailableLetters}
        alphabetFilterFunction={selectActiveLetter}
      />
      <section aria-label={`${title} List`}>
        <ul role="list" className="application-content__list">
          {projects &&
            projects.map((project: any) => (
              <div key={project.id} onClick={() => updateProjectModal(project)}>
                <ProjectCard
                  id={project.id}
                  description={project.description}
                  name={project.name}
                />
              </div>
            ))}
        </ul>
      </section>
      <Pagination
        pageIndex={pageIndex}
        totalElementCount={totalElementCount}
        changePageIndexFunction={changePageIdx}
      />

      {isCreateNewModalOpen && (
        <ProjectModal
          isOpenModal={isCreateNewModalOpen}
          isUpdate={false}
          project={undefined}
        />
      )}

      {isUpdateModalOpen && (
        <ProjectModal
          isOpenModal={isUpdateModalOpen}
          isUpdate={true}
          project={updateProject}
        />
      )}
    </>
  );
}

export default ProjectsTable;
