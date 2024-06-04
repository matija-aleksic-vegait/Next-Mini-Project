import { AlphabetLetter } from '@molecules';
import '@css';

export default {
  title: 'molecules/AlphabetLetter',
  component: AlphabetLetter,
  parameters: {},
  tags: ['autodocs'],
};

export const SelectedActive = {
  args: {
    char: 'A',
    alphabet: ['A'],
    activeLetter: 'A',
    onCharSelect: () => alert('AlphabetLetter clicked!'),
  },
};

export const UnselectedActive = {
  args: {
    char: 'A',
    alphabet: ['A'],
    activeLetter: 'B',
    onCharSelect: () => alert('AlphabetLetter clicked!'),
  },
};

export const Disabled = {
  args: {
    char: 'A',
    alphabet: ['B'],
    activeLetter: 'C',
    onCharSelect: () => alert('AlphabetLetter clicked!'),
  },
};
