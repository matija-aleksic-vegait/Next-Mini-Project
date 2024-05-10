function ProjectCard({ project }: { project: any }) {
  return (
    <li>
      <button
        className="application-content__list__item js-toggle-edit-modal"
        type="button"
      >
        <div>
          <span>{project.name}</span>
          <span className="application-content__list__item__info-text">
            {project.description}
          </span>
        </div>
        <img src="/icons/chevron-right.svg" alt="right" />
      </button>
    </li>
  );
}

export default ProjectCard;
