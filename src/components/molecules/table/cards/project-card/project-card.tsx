import { Button } from "@/components/atoms/button/button";
import { Div } from "@/components/atoms/div/div";
import { Icon } from "@/components/atoms/icon/icon";
import { Span } from "@/components/atoms/span/span";

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
