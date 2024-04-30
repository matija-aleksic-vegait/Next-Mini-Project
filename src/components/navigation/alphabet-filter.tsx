import { alphabetFilterProjects } from "@/redux/state/projectsSlice";
import { AppDispatch, RootState } from "@/redux/store";
import TableConstants from "@/utils/constants/tableConstants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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
    (state: RootState) => state.projectsStore.activeLetter
  );

  useEffect(() => {
    dispatch(getAllAlphabetFunction());
  }, []);

  const onCharClick = (char: string) => {
    dispatch(alphabetFilterProjects(char));
  };

  return (
    <section aria-label="Alphabet Filter">
      <ul role="list" className="application-content__alphabet">
        {TableConstants.alphabetList.map((char) => (
          <li key={char}>
            <button
              className={
                alphabet.includes(char)
                  ? char.toLowerCase() === activeLetter.toLowerCase()
                    ? "application-content__alphabet__letter application-content__alphabet__letter--selected"
                    : "application-content__alphabet__letter"
                  : "application-content__alphabet__letter application-content__alphabet__letter--disabled pointer-events-disable"
              }
              aria-label="Select Letter A"
              type="button"
              onClick={() => onCharClick(char)}
            >
              {char}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AlphabetFilter;
