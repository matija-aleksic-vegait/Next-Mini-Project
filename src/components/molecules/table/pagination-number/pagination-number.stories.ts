import { PaginationNumber } from "./pagination-number";

export default {
  title: "organisms/PaginationNumber",
  component: PaginationNumber,
  parameters: {},
  tags: ["autodocs"],
};

export const PaginationNumberExample = {
  args: {
    pageIndex: 1,
    selectedPageIndex: 1,
    onPageIndexSelect: (selectedIndex: string) => alert(selectedIndex),
  },
};
