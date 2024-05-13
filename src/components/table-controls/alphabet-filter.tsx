import TableConstants from "@/constants/table-constants";
import { useEffect } from "react";
import AlphabetLetter from "./alphabet-letter";

function AlphabetFilter({
  activeLetter,
  alphabetSelector,
  getAllAlphabetLettersFunction,
  alphabetFilterFunction,
}: {
  activeLetter: string;
  alphabetSelector: Array<string>;
  getAllAlphabetLettersFunction: Function;
  alphabetFilterFunction: Function;
}) {
  const alphabet = alphabetSelector;

  useEffect(() => {
    getAllAlphabetLettersFunction();
  }, []);

  const onCharSelect = (char: string) => {
    alphabetFilterFunction(char);
  };

  return (
    <section aria-label="Alphabet Filter">
      <ul role="list" className="application-content__alphabet">
        {TableConstants.alphabetList.map((char) => (
          <AlphabetLetter
            key={char}
            activeLetter={activeLetter}
            alphabet={alphabet}
            char={char}
            onCharSelect={onCharSelect}
          />
        ))}
      </ul>
    </section>
  );
}

export default AlphabetFilter;
