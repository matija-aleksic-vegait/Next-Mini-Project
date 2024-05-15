import { ProjectCard } from "./project-card";

export default {
  title: "organisms/ProjectCard",
  component: ProjectCard,
  parameters: {},
  tags: ["autodocs"],
};

export const ProjectCardExample = {
  args: {
    project: {
      name: "Project Name",
      description: "Project Description",
    },
  },
};
