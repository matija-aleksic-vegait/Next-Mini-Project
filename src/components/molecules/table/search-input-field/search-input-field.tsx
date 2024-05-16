"use client";

import { useEffect, useState } from "react";
import { IconButton } from "../../../molecules/icon-button/icon-button";
import { InputField, Div } from "@atoms";
import { TableConstants } from "@constants";
import { useDebounce } from "@utils";

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
