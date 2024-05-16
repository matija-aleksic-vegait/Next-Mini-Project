"use client";

import Pagination from "@/components/organisms/table/pagination/pagination";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { TableHeader } from "@/components/organisms/table/table-header/table-header";
import { AlphabetFilter } from "@/components/organisms/table/alphabet-filter/alphabet-filter";
import { ProjectCard } from "@/components/molecules/table/cards/project-card/project-card";
import { Div } from "@/components/atoms/div/div";
import { Ul } from "@/components/atoms/ul/ul";
import { ProjectModal } from "@/components/organisms/project-modal/project-modal";
import { Section } from "@/components/atoms/section/section";

interface ProjectsTableProps {
  projects: Array<any>;
  alphabet: Array<string>;
  pageIndex: number;
  totalElementCount: number;
  activeChar: string;
  isCreateNewModalOpen: boolean;
  isUpdateModalOpen: boolean;
  updateProject: any;

  newProjectModal: Function;
  searchProjects: (searchString: string) => void;
  getAllAvailableLetters: Function;
  selectActiveLetter: Function;
  updateProjectModal: Function;
  changePageIdx: Function;
  closeProjectModal: Function;
  deleteProjectEntity: Function;
}

export const ProjectsTableTemplate: React.FC<ProjectsTableProps> = ({
  projects,
  alphabet,
  pageIndex,
  totalElementCount,
  activeChar,
  isCreateNewModalOpen,
  isUpdateModalOpen,
  updateProject,

  newProjectModal,
  searchProjects,
  getAllAvailableLetters,
  selectActiveLetter,
  updateProjectModal,
  changePageIdx,
  closeProjectModal,
  deleteProjectEntity,
}) => {
  var title = "Projects";
  var description =
    "Here, you have full control over your project database, empowering you to efficiently organize and maintain your projects.";

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
};

export default ProjectsTableTemplate;
