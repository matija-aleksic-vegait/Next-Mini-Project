import { Pagination } from "./pagination";

export default {
  title: "organisms/Pagination",
  component: Pagination,
  parameters: {},
  tags: ["autodocs"],
};

export const PaginationExample = {
  args: {
    pageIndex: 6,
    totalElementCount: 50,
    changePageIndexFunction: (pageIndex: string) => alert(pageIndex),
  },
};
