import { ProjectCard } from '@molecules';
import '@css';

export default {
  title: 'molecules/ProjectCard',
  component: ProjectCard,
  parameters: {},
  tags: ['autodocs'],
};

export const ProjectCardExample = {
  args: {
    project: {
      name: 'Project Name',
      description: 'Project Description',
    },
  },
};
