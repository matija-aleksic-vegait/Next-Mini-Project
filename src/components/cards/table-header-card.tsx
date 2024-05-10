import SearchInputField from "../table-controls/search-input-field";

function TableHeaderCard({
  title,
  description,
  newElementFunction,
  searchFunction,
}: {
  title: string;
  description: string;
  newElementFunction: Function;
  searchFunction: Function;
}) {
  return (
    <section aria-label={`${title} Card`} className="application-content__card">
      <div className="application-content__card__action-container">
        <div className="heading-lg">{title}</div>
        <p className="text-lg">{description}</p>
        <button
          className="btn btn--secondary btn--secondary--icon-left js-toggle-create-modal gray-hover"
          type="button"
          aria-label={`New ${title.slice(0, -1)}`}
          onClick={() => newElementFunction()}
        >
          <img src="/icons/plus.svg" alt="add" />
          <span>New {title.toLowerCase().slice(0, -1)}</span>
        </button>
      </div>
      <SearchInputField title={title} searchFunction={searchFunction} />
    </section>
  );
}

export default TableHeaderCard;
