function ClientCard({ client }: { client: any }) {
  return (
    <li>
      <button
        className="application-content__list__item js-toggle-edit-modal"
        type="button"
      >
        <div>
          <span>{client.name}</span>
          <span className="application-content__list__item__info-text">
            {client.country}
          </span>
        </div>
        <img src="/icons/chevron-right.svg" alt="right" />
      </button>
    </li>
  );
}

export default ClientCard;
