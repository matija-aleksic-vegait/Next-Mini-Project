import { Button, Div, Icon, Span } from '@atoms';

interface ProjectCardProps {
  project: any;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Button className="application-content__list__item" type="button">
      <Div>
        <Span label={project.name} />
        <Span
          className="application-content__list__item__info-text"
          label={project.description}
        />
      </Div>
      <Icon src="/icons/chevron-right.svg" alt="right" />
    </Button>
  );
};
