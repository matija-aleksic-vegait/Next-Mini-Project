"use client";

import { useEffect } from "react";
import Pagination from "@/components/organisms/table/pagination/pagination";
import { useDispatch, useSelector } from "react-redux";
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
import { TableHeader } from "@/components/organisms/table/table-header/table-header";
import { EmptyState } from "@/components/molecules/fetching-states/empty-state/empty-state";
import { ErrorState } from "@/components/molecules/fetching-states/error-state/error-state";
import { AlphabetFilter } from "@/components/organisms/table/alphabet-filter/alphabet-filter";
import { LoadingState } from "@/components/molecules/fetching-states/loading-state/loading-state";
import { ProjectCard } from "@/components/molecules/table/cards/project-card/project-card";
import { Div } from "@/components/atoms/div/div";
import { Ul } from "@/components/atoms/ul/ul";
import { ProjectModal } from "@/components/organisms/project-modal/project-modal";
import { Section } from "@/components/atoms/section/section";

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
        availableLetters={alphabet}
        getAllAlphabetLettersFunction={getAllAvailableLetters}
        alphabetFilterFunction={selectActiveLetter}
      />
      <Section aria-label={`${title} List`}>
        <Ul role="list" className="application-content__list">
          {projects &&
            projects.map((project: any) => (
              <Div
                key={project.id}
                onClick={() => {
                  updateProjectModal(project);
                }}
              >
                <ProjectCard project={project} />
              </Div>
            ))}
        </Ul>
      </Section>
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
          closeModalFunction={closeProjectModal}
          deleteProjectFunction={deleteProjectEntity}
        />
      )}

      {isUpdateModalOpen && (
        <ProjectModal
          isOpenModal={isUpdateModalOpen}
          isUpdate={true}
          project={updateProject}
          closeModalFunction={closeProjectModal}
          deleteProjectFunction={deleteProjectEntity}
        />
      )}
    </>
  );
}

export default ProjectsTable;
