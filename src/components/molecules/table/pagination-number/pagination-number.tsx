import { Span } from '@atoms';

interface PaginationNumberProps {
  pageIndex: number;
  selectedPageIndex: number;
  onPageIndexSelect: Function;
}

export const PaginationNumber: React.FC<PaginationNumberProps> = ({
  pageIndex,
  selectedPageIndex,
  onPageIndexSelect,
}) => {
  return (
    <button
      onClick={() => {
        onPageIndexSelect(pageIndex);
      }}
      className={`application-content__list__pagination__number gray-hover ${
        pageIndex === selectedPageIndex
          ? ' application-content__list__pagination__number--selected pointer-default'
          : 'application-content__list__pagination__number pointer-default'
      }`}
    >
      <Span className="visually-hidden" label="page" />
      {pageIndex}
    </button>
  );
};

export default PaginationNumber;
