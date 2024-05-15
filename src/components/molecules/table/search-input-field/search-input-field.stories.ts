import { SearchInputField } from "./search-input-field";

export default {
  title: "molecules/SearchInputField",
  component: SearchInputField,
  parameters: {},
  tags: ["autodocs"],
};

export const SearchInput = {
  args: {
    title: "Projects",
    searchFunction: (searchString: string) => {
      if (searchString) alert(searchString);
    },
  },
};
