"use client";

import { useEffect, useState } from "react";
import ProjectsService from "@/services/projectsService";
import ProjectCard from "@/components/cards/project-card";
import NotFound from "@/app/not-found";
import Pagination from "@/components/navigation/pagination";
import AlphabetFilter from "@/components/navigation/alphabet-filter";

function ProjectsTable() {
  const [, setError] = useState();
  const [projects, setProjects] = useState<Array<any>>([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () =>
    await ProjectsService.getAllProjectsForTable(1, 10)
      .then((response: Array<any>) => {
        if (response.length == 0) NotFound();
        setProjects(response);
      })
      .catch((error) => {
        setProjects(() => {
          throw error.message;
        });
        // throw new Error(error.message);
      });

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
