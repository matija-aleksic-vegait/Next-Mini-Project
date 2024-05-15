import TableConstants from "@/constants/table-constants";
import { useEffect } from "react";
import { AlphabetLetter } from "../../../molecules/table/alphabet-letter/alphabet-letter";
import { Li } from "@/components/atoms/li/li";
import { Ul } from "@/components/atoms/ul/ul";
import { Section } from "@/components/atoms/section/section";

interface AlphabetLetterProps {
  activeLetter: string;
  availableLetters: Array<string>;
  getAllAlphabetLettersFunction: Function;
  alphabetFilterFunction: Function;
}

export const AlphabetFilter: React.FC<AlphabetLetterProps> = ({
  activeLetter,
  availableLetters,
  getAllAlphabetLettersFunction,
  alphabetFilterFunction,
}) => {
  useEffect(() => {
    getAllAlphabetLettersFunction();
  }, []);

  const onCharSelect = (char: string) => {
    alphabetFilterFunction(char);
  };

  return (
    <Section ariaLabel="Alphabet Filter">
      <Ul role="list" className="application-content__alphabet">
        {TableConstants.alphabetList.map((char) => (
          <Li key={char}>
            <AlphabetLetter
              activeLetter={activeLetter}
              alphabet={availableLetters}
              char={char}
              onCharSelect={onCharSelect}
            />
          </Li>
        ))}
      </Ul>
    </Section>
  );
};
