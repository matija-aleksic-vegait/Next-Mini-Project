function PaginationNumber({
  pageIndex,
  selectedPageIndex,
  onPageIndexSelect,
}: {
  pageIndex: number;
  selectedPageIndex: number;
  onPageIndexSelect: Function;
}) {
  return (
    <li key={pageIndex} onClick={() => onPageIndexSelect(pageIndex)}>
      <a
        className={
          pageIndex === selectedPageIndex
            ? "application-content__list__pagination__number application-content__list__pagination__number--selected pointer-default"
            : "application-content__list__pagination__number pointer-default"
        }
      >
        <span className="visually-hidden">page</span>
        {pageIndex}
      </a>
    </li>
  );
}

export default PaginationNumber;
