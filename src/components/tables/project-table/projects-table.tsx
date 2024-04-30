"use client";

import { useEffect, useState } from "react";
import ProjectsService from "@/services/projectsService";
import ProjectCard from "@/components/cards/project-card";
import NotFound from "@/app/not-found";
import Pagination from "@/components/navigation/pagination";
import AlphabetFilter from "@/components/navigation/alphabet-filter";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, store } from "../../../redux/store";
import { fetchProjectsAsync } from "@/redux/state/projectsSlice";
import { LoadingStateEnum } from "@/utils/helpers/LoadingStateEnum";
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
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProjectsAsync());
  }, []);

  // console.log(projects);
  // console.log(LoadingStateEnum[loadingState]);
  // console.log(errorMessage);

  if (loadingState === LoadingStateEnum.loading) return LoadingStateComponent();
  if (loadingState === LoadingStateEnum.empty)
    return EmptyStateComponent({ entitiesName: "Projects" });
  if (loadingState === LoadingStateEnum.failure)
    return ErrorStateComponent({ errorMessage: errorMessage });
  return (
    <>
      <AlphabetFilter />
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
      <Pagination />
    </>
  );
}

export default ProjectsTable;
