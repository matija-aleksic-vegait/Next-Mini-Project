function AlphabetLetter({
  char,
  alphabet,
  activeLetter,
  onCharSelect,
}: {
  char: string;
  alphabet: Array<any>;
  activeLetter: string;
  onCharSelect: Function;
}) {
  return (
    <li>
      <button
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
      </button>
    </li>
  );
}

export default AlphabetLetter;
