import { ProjectsTableTemplate } from "@templates";

export default {
  title: "templates/ProjectsTableTemplate",
  component: ProjectsTableTemplate,
  parameters: {},
  tags: ["autodocs"],
};

export const ProjectsTableExample = {
  args: {
    newProjectModal: () => {},
    searchProjects: (searchString: string) => {},
    getAllAvailableLetters: () => {},
    selectActiveLetter: () => {},
    updateProjectModal: () => {},
    changePageIdx: () => {},
    closeProjectModal: () => {},
    deleteProjectEntity: () => {},

    projects: [
      { name: "Name1", description: "Description" },
      { name: "Name2", description: "Description" },
      { name: "Name3", description: "Description" },
    ],
    alphabet: ["N"],
    pageIndex: 7,
    totalElementCount: 50,
    activeChar: "",
    isCreateNewModalOpen: false,
    isUpdateModalOpen: false,
    updateProject: undefined,
  },
};
