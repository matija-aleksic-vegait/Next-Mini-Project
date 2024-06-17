import { TableConstants } from '@constants';
import { Li, Nav, Ul } from '@atoms';
import { PaginationNumber, IconLink } from '@molecules';

interface PaginationProps {
  pageIndex: number;
  totalElementCount: number;
  changePageIndexFunction: Function;
}

export const Pagination: React.FC<PaginationProps> = ({
  pageIndex,
  totalElementCount,
  changePageIndexFunction,
}) => {
  let pageIndexes: Array<number> = [];

  pageIndexes = new Array(
    Math.ceil(totalElementCount / TableConstants.elementsPerPage)
  )
    .fill(null)
    .map((_, i) => i + 1);

  const firstIndex = pageIndexes.shift();
  const lastIndex = pageIndexes.pop();

  const onPageIndexSelect = (pageIndx: number) => {
    if (pageIndx > 0 && pageIndx < pageIndexes.length + 3)
      changePageIndexFunction(pageIndx);
  };

  return (
    <Nav aria-label="Pagination">
      <Ul role="list" className="application-content__list__pagination">
        <Li>
          <IconLink
            className="application-content__list__pagination__number gray-hover"
            aria-label="Go to the Previous Page"
            src="/icons/chevron-left.svg"
            alt="left"
            onClick={() => {
              onPageIndexSelect(pageIndex - 1);
            }}
          />
        </Li>

        <PaginationNumber
          selectedPageIndex={pageIndex}
          onPageIndexSelect={onPageIndexSelect}
          pageIndex={firstIndex!}
        />

        {/* {pageIndex > TableConstants.numOfIndexesAdjacentForDots && (
          <Li>
            <Link className="application-content__list__pagination__number pointer-events-disable">
              ...
            </Link>
          </Li>
        )} */}

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
              <Li key={pageIndex}>
                <PaginationNumber
                  key={index}
                  selectedPageIndex={pageIndex}
                  onPageIndexSelect={onPageIndexSelect}
                  pageIndex={index}
                />
              </Li>
            ))}

        {/* {pageIndex + TableConstants.numOfIndexesAdjacentForDots <=
          lastIndex! && (
          <Li>
            <Link className="application-content__list__pagination__number pointer-events-disable">
              ...
            </Link>
          </Li>
        )} */}

        {lastIndex && (
          <PaginationNumber
            selectedPageIndex={pageIndex}
            onPageIndexSelect={onPageIndexSelect}
            pageIndex={lastIndex!}
          />
        )}

        <Li>
          <IconLink
            className="application-content__list__pagination__number gray-hover"
            aria-label="Go to Next Page"
            src="/icons/chevron-right.svg"
            alt="right"
            onClick={() => {
              onPageIndexSelect(pageIndex + 1);
            }}
          />
        </Li>
      </Ul>
    </Nav>
  );
};

export default Pagination;
