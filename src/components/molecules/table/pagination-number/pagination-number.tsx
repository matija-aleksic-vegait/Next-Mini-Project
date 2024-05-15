"use client";

import { Link } from "@/components/atoms/link/link";
import { Span } from "@/components/atoms/span/span";

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
    <Link
      onClick={() => {
        onPageIndexSelect(pageIndex);
      }}
      className={`application-content__list__pagination__number gray-hover ${
        pageIndex === selectedPageIndex
          ? " application-content__list__pagination__number--selected pointer-default"
          : "application-content__list__pagination__number pointer-default"
      }`}
    >
      <Span className="visually-hidden" label="page" />
      {pageIndex}
    </Link>
  );
};

export default PaginationNumber;
