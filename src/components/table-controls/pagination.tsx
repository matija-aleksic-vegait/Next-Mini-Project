import TableConstants from "@/constants/table-constants";
import PaginationNumber from "./pagination-number";

function Pagination({
  pageIndex,
  totalElementCount,
  changePageIndexFunction,
}: {
  pageIndex: number;
  totalElementCount: number;
  changePageIndexFunction: Function;
}) {
  var pageIndexes: Array<number> = [];

  pageIndexes = new Array(
    Math.ceil(totalElementCount / TableConstants.elementsPerPage)
  )
    .fill(null)
    .map((_, i) => i + 1);

  const firstIndex = pageIndexes.shift();
  const lastIndex = pageIndexes.pop();

  const onPageIndexSelect = (pageIndex: number) => {
    if (pageIndex > 0 && pageIndex < pageIndexes.length + 3)
      changePageIndexFunction(pageIndex);
  };

  return (
    <>
      <nav aria-label="Pagination">
        <ul role="list" className="application-content__list__pagination">
          <li onClick={() => onPageIndexSelect(pageIndex - 1)}>
            <a
              className="application-content__list__pagination__number gray-hover"
              aria-label="Go to the Previous Page"
            >
              <img src="/icons/chevron-left.svg" alt="left" />
            </a>
          </li>

          <PaginationNumber
            selectedPageIndex={pageIndex}
            onPageIndexSelect={onPageIndexSelect}
            pageIndex={firstIndex!}
          />

          {pageIndex > TableConstants.numOfIndexesAdjacentForDots && (
            <li>
              <a className="application-content__list__pagination__number pointer-events-disable">
                ...
              </a>
            </li>
          )}

          {pageIndexes &&
            pageIndexes
              .filter((element) => {
                if (
                  element > pageIndex + TableConstants.numOfSideIndexes ||
                  element < pageIndex - TableConstants.numOfSideIndexes
                )
                  return false;
                return true;
              })
              .map((index) => (
                <PaginationNumber
                  key={index}
                  selectedPageIndex={pageIndex}
                  onPageIndexSelect={onPageIndexSelect}
                  pageIndex={index}
                />
              ))}

          {pageIndex + TableConstants.numOfIndexesAdjacentForDots <=
            lastIndex! && (
            <li>
              <a className="application-content__list__pagination__number pointer-events-disable">
                ...
              </a>
            </li>
          )}

          {lastIndex && (
            <PaginationNumber
              selectedPageIndex={pageIndex}
              onPageIndexSelect={onPageIndexSelect}
              pageIndex={lastIndex!}
            />
          )}

          <li onClick={() => onPageIndexSelect(pageIndex + 1)}>
            <a
              className="application-content__list__pagination__number gray-hover"
              aria-label="Go to Next Page"
            >
              <img src="/icons/chevron-right.svg" alt="right" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Pagination;
