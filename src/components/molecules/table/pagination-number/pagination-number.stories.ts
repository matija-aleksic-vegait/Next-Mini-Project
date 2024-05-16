import { PaginationNumber } from "@molecules";
import "@css";

export default {
  title: "molecules/PaginationNumber",
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
