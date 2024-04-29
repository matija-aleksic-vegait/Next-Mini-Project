function Pagination() {
  return (
    <nav aria-label="Pagination">
      <ul role="list" className="application-content__list__pagination">
        <li>
          <a
            className="application-content__list__pagination__number"
            aria-label="Go to the Previous Page"
          >
            <img src="/icons/chevron-left.svg" alt="left" />
          </a>
        </li>
        <li>
          <a className="application-content__list__pagination__number">
            <span className="visually-hidden">page</span>1
          </a>
        </li>
        <li>
          <a className="application-content__list__pagination__number">...</a>
        </li>
        <li>
          <a className="application-content__list__pagination__number">
            <span className="visually-hidden">page</span>7
          </a>
        </li>
        <li>
          <a className="application-content__list__pagination__number">
            <span className="visually-hidden">page</span>8
          </a>
        </li>
        <li>
          <a className="application-content__list__pagination__number application-content__list__pagination__number--selected">
            <span className="visually-hidden">page </span>9
          </a>
        </li>
        <li>
          <a className="application-content__list__pagination__number">
            <span className="visually-hidden">page</span>10
          </a>
        </li>
        <li>
          <a className="application-content__list__pagination__number">
            <span className="visually-hidden">page</span>11
          </a>
        </li>
        <li>
          <a className="application-content__list__pagination__number">...</a>
        </li>
        <li>
          <a className="application-content__list__pagination__number">
            <span className="visually-hidden">page</span>45
          </a>
        </li>
        <li>
          <a
            className="application-content__list__pagination__number"
            aria-label="Go to Next Page"
          >
            <img src="/icons/chevron-right.svg" alt="right" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
