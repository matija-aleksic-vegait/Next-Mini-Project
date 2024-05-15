import { Div } from "@/components/atoms/div/div";
import { IconButton } from "../../icon-button/icon-button";
import { InputField } from "@/components/atoms/input-field/input-field";
import TableConstants from "@/constants/table-constants";
import useDebounce from "@/utils/debounce-util";
import { useEffect, useState } from "react";

interface SearchInputFieldProps {
  title: string;
  searchFunction: Function;
}

export const SearchInputField: React.FC<SearchInputFieldProps> = ({
  title,
  searchFunction,
}) => {
  const [searchString, setSearchString] = useState("");
  const debouncedSearch = useDebounce(
    searchString,
    TableConstants.searchInputDebounceMilliseconds
  );

  useEffect(() => {
    searchFunction(searchString);
  }, [debouncedSearch]);

  return (
    <Div>
      <Div className="input-box" role="search">
        <IconButton
          className="input-box__btn input-box__btn--left"
          onClick={() => searchFunction(searchString)}
          src="/icons/search.svg"
          alt="search"
          type="button"
        />

        <InputField
          id="project-search"
          className="input-box__input-field input-box__input-field--icon--left"
          placeholder="Search"
          type="search"
          aria-label={`Search ${title}`}
          includeLabel={false}
          onChange={setSearchString}
        />
      </Div>
    </Div>
  );
};
