import { TableHeader } from "@organisms";
import "@css";

export default {
  title: "organisms/TableHeader",
  component: TableHeader,
  parameters: {},
  tags: ["autodocs"],
};

export const TableHeaderExample = {
  args: {
    title: "Projects",
    description: "Some description",
    newElementFunction: () => alert("New element button clicked"),
    searchFunction: (searchString: string) => {
      if (searchString) alert(searchString);
    },
  },
};
