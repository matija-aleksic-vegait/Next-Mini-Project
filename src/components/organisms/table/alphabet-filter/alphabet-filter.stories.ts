import { AlphabetFilter } from '@organisms';
import '@css';

export default {
  title: 'organisms/AlphabetFilter',
  component: AlphabetFilter,
  parameters: {},
  tags: ['autodocs'],
};

export const TableAlphabetFilter = {
  args: {
    activeLetter: 'A',
    availableLetters: ['A', 'B', 'C'],
    getAllAlphabetLettersFunction: () => {},
    alphabetFilterFunction: (selectedLetter: string) => alert(selectedLetter),
  },
};
