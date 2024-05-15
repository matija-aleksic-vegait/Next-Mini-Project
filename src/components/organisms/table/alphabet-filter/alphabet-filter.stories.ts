import { AlphabetFilter } from "./alphabet-filter";

export default {
  title: "organisms/AlphabetFilter",
  component: AlphabetFilter,
  parameters: {},
  tags: ["autodocs"],
};

export const TableAlphabetFilter = {
  args: {
    activeLetter: "A",
    alphabetSelector: ["A", "B", "C"],
    getAllAlphabetLettersFunction: () => {},
    alphabetFilterFunction: (selectedLetter: string) => alert(selectedLetter),
  },
};
