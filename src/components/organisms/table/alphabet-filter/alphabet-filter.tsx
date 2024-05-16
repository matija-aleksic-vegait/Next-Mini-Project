"use client";

import { useCallback, useEffect } from "react";
import { TableConstants } from "@constants";
import { AlphabetLetter } from "@molecules";
import { Li, Ul, Section } from "@atoms";

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
  const getAllAlphabetLetters = useCallback(
    () => getAllAlphabetLettersFunction(),
    [getAllAlphabetLettersFunction]
  );
  useEffect(() => {
    getAllAlphabetLetters();
  }, [getAllAlphabetLetters]);

  const onCharSelect = (char: string) => {
    alphabetFilterFunction(char);
  };

  return (
    <Section aria-label="Alphabet Filter">
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
