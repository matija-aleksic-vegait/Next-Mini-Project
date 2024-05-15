import TableConstants from "@/constants/table-constants";
import PaginationNumber from "../../../molecules/table/pagination-number/pagination-number";
import { Li } from "../../../atoms/li/li";
import { Nav } from "@/components/atoms/nav/nav";
import { IconLink } from "@/components/molecules/icon-link/icon-link";
import { Ul } from "@/components/atoms/ul/ul";
import { Link } from "@/components/atoms/link/link";

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
    <Nav ariaLabel="Pagination">
      <Ul role="list" className="application-content__list__pagination">
        <Li onClick={() => onPageIndexSelect(pageIndex - 1)}>
          <IconLink
            className="application-content__list__pagination__number gray-hover"
            aria-label="Go to the Previous Page"
            src="/icons/chevron-left.svg"
            alt="left"
          />
        </Li>

        <PaginationNumber
          selectedPageIndex={pageIndex}
          onPageIndexSelect={onPageIndexSelect}
          pageIndex={firstIndex!}
        />

        {pageIndex > TableConstants.numOfIndexesAdjacentForDots && (
          <Li>
            <Link
              className="application-content__list__pagination__number pointer-events-disable"
              label="..."
            />
          </Li>
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
              <Li key={pageIndex}>
                <PaginationNumber
                  key={index}
                  selectedPageIndex={pageIndex}
                  onPageIndexSelect={onPageIndexSelect}
                  pageIndex={index}
                />
              </Li>
            ))}

        {pageIndex + TableConstants.numOfIndexesAdjacentForDots <=
          lastIndex! && (
          <Li>
            <Link
              className="application-content__list__pagination__number pointer-events-disable"
              label="..."
            />
          </Li>
        )}

        {lastIndex && (
          <PaginationNumber
            selectedPageIndex={pageIndex}
            onPageIndexSelect={onPageIndexSelect}
            pageIndex={lastIndex!}
          />
        )}

        <Li onClick={() => onPageIndexSelect(pageIndex + 1)}>
          <IconLink
            className="application-content__list__pagination__number gray-hover"
            aria-label="Go to Next Page"
            src="/icons/chevron-right.svg"
            alt="right"
          />
        </Li>
      </Ul>
    </Nav>
  );
};

export default Pagination;
