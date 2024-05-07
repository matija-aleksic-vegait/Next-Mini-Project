"use client";

import { useEffect } from "react";
import ProjectCard from "@/components/cards/project-card";
import Pagination from "@/components/navigation/pagination";
import AlphabetFilter from "@/components/navigation/alphabet-filter";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import {
  fetchProjectsAsync,
  getAllAvailableLettersAsync,
} from "@/redux/state/projectsSlice";
import { LoadingStateEnum } from "@/constants/loadingStateEnum";
import LoadingStateComponent from "@/components/loading-states/loading-state-component";
import EmptyStateComponent from "@/components/loading-states/empty-state-component";
import ErrorStateComponent from "@/components/loading-states/error-state-component";

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

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProjectsAsync(pageIndex));
  }, []);

  if (loadingState === LoadingStateEnum.loading) return LoadingStateComponent();
  if (loadingState === LoadingStateEnum.empty)
    return EmptyStateComponent({ entitiesName: "Projects" });
  if (loadingState === LoadingStateEnum.failure)
    return ErrorStateComponent({ errorMessage: errorMessage });
  return (
    <>
      <AlphabetFilter
        alphabetSelector={alphabet}
        getAllAlphabetFunction={getAllAvailableLettersAsync}
      />
      <section aria-label="Projects List">
        <ul role="list" className="application-content__list">
          {projects &&
            projects.map((project: any) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                description={project.description}
                name={project.name}
              />
            ))}
        </ul>
      </section>
      <Pagination
        pageIndex={pageIndex}
        totalElementCount={totalElementCount}
        activeChar={activeChar}
      />
    </>
  );
}

export default ProjectsTable;
