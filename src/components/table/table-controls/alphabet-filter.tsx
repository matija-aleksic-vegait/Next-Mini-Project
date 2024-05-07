import { alphabetFilterProjects } from "@/redux/state/projectsSlice";
import { AppDispatch, RootState } from "@/redux/store";
import TableConstants from "@/constants/tableConstants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AlphabetLetter from "./alphabet-letter";

function AlphabetFilter({
  alphabetSelector,
  getAllAlphabetFunction,
}: {
  alphabetSelector: Array<string>;
  getAllAlphabetFunction: Function;
}) {
  const alphabet = alphabetSelector;
  const dispatch = useDispatch<AppDispatch>();
  const activeLetter = useSelector(
    (state: RootState) => state.projectsStore.activeChar
  );

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
