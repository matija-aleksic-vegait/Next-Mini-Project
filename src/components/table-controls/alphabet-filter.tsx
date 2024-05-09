import { alphabetFilterProjects } from "@/features/projects/redux/projects-slice";
import { AppDispatch } from "@/redux/store";
import TableConstants from "@/constants/table-constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AlphabetLetter from "./alphabet-letter";

function AlphabetFilter({
  activeLetter,
  alphabetSelector,
  getAllAlphabetFunction,
}: {
  activeLetter: string;
  alphabetSelector: Array<string>;
  getAllAlphabetFunction: Function;
}) {
  const alphabet = alphabetSelector;
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllAlphabetFunction());
  }, []);

  const onCharSelect = (char: string) => {
    dispatch(alphabetFilterProjects(char));
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
