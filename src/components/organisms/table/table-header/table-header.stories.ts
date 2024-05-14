import { TableHeader } from "./table-header";

export default {
  title: "organisms/TableHeader",
  component: TableHeader,
  parameters: {},
  tags: ["autodocs"],
};

export const Example = {
  args: {
    title: "Projects",
    description: "Some description",
    newElementFunction: () => alert("New element button clicked"),
    searchFunction: (searchString: string) => {
      if (searchString) alert(searchString);
    },
  },
};
