import { Button } from "@/components/atoms/button/button";

interface AlphabetLetterProps {
  char: string;
  alphabet: Array<any>;
  activeLetter: string;
  onCharSelect: Function;
}

export const AlphabetLetter: React.FC<AlphabetLetterProps> = ({
  char,
  alphabet,
  activeLetter,
  onCharSelect,
}) => {
  return (
    <Button
      className={`application-content__alphabet__letter ${
        alphabet.includes(char)
          ? char.toLowerCase() === activeLetter.toLowerCase()
            ? "application-content__alphabet__letter--selected yellow-hover"
            : "yellow-hover"
          : "application-content__alphabet__letter--disabled pointer-events-disable"
      }`}
      aria-label="Select Letter A"
      type="button"
      onClick={() => onCharSelect(char)}
    >
      {char}
    </Button>
  );
};
