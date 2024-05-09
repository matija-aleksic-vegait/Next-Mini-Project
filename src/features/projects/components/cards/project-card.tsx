function ProjectCard({
  id,
  name,
  description,
}: {
  id: string;
  name: string;
  description: string;
}) {
  return (
    <li>
      <button
        className="application-content__list__item js-toggle-edit-modal"
        type="button"
      >
        <div>
          <span>{name}</span>
          <span className="application-content__list__item__info-text">
            {description}
          </span>
        </div>
        <img src="/icons/chevron-right.svg" alt="right" />
      </button>
    </li>
  );
}

export default ProjectCard;
