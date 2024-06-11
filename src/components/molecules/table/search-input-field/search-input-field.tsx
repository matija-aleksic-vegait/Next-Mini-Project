'use client';

import { useCallback, useEffect, useState } from 'react';
import { useDebounce } from '@utils';
import { InputField, Div } from '@atoms';
import { TableConstants } from '@constants';
import { IconButton } from '../../icon-button/icon-button';

interface SearchInputFieldProps {
  title: string;
  searchFunction: Function;
}

export const SearchInputField: React.FC<SearchInputFieldProps> = ({
  title,
  searchFunction,
}) => {
  const [searchString, setSearchString] = useState('');
  const debouncedSearch = useDebounce(
    searchString,
    TableConstants.searchInputDebounceMilliseconds
  );

  const debouncedSearchFunction = useCallback(
    () => searchFunction(searchString),
    [searchFunction, searchString]
  );

  useEffect(() => {
    debouncedSearchFunction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
