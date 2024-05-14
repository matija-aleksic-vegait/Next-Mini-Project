import TableConstants from "@/constants/table-constants";
import useDebounce from "@/utils/debounce-util";
import { useEffect, useState } from "react";

function SearchInputField({
  title,
  searchFunction,
}: {
  title: string;
  searchFunction: Function;
}) {
  const [searchString, setSearchString] = useState("");
  const debouncedSearch = useDebounce(
    searchString,
    TableConstants.searchInputDebounceMilliseconds
  );

  useEffect(() => {
    searchFunction(searchString);
  }, [debouncedSearch]);

  return (
    <div>
      <div className="input-box" role="search">
        <button
          className="input-box__btn input-box__btn--left"
          onClick={() => searchFunction()}
        >
          <img src="/icons/search.svg" alt="search" />
        </button>
        <input
          id="project-search"
          className="input-box__input-field input-box__input-field--icon--left"
          placeholder="Search"
          type="search"
          aria-label={`Search ${title}`}
          onChange={(e) => setSearchString(e.target.value)}
        />
      </div>
    </div>
  );
}

export default SearchInputField;
