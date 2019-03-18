// @flow
import React, { useCallback, useEffect } from 'react';
import debounce from 'lodash.debounce';

type Props = {
  setSearchFilter: (query: string) => void,
  setOnSaleFilter: (onSale: boolean) => void
};

function SubHeaderRight({ setSearchFilter, setOnSaleFilter }: Props) {
  const dispatchChangeSearch = useCallback(
    debounce((query: string) => {
      setSearchFilter(query);
    }, 500),
    []
  );

  const onChangeSearch = useCallback(
    (event: SyntheticEvent<HTMLInputElement>) => {
      dispatchChangeSearch(event.currentTarget.value);
    },
    []
  );

  const onChangeOnSale = useCallback(
    (event: SyntheticEvent<HTMLInputElement>) => {
      setOnSaleFilter(event.currentTarget.checked);
    },
    // Tells React to memoize regardless of arguments
    []
  );

  useEffect(() => {
      // componentDidMount
      return () => {
        // componentWillUnmount
        dispatchChangeSearch.cancel();
      };
    },
    // prevent recall effect when componentDidUpdate
    []
  );

  return (
    <div className="sub-header--right">
      <div className="sub-header__search">
        <input type="text" className="sub-header__search__input"
               id="search-input" placeholder="Search"
               onChange={onChangeSearch}/>
        <label htmlFor="search-input"
               className="sub-header__search__label icon-search"/>
      </div>
      <div className="sub-header__filter">
        <input type="checkbox" className="sub-header__filter__input"
               id="filter-sale" onChange={onChangeOnSale}/>
        <label htmlFor="filter-sale" className="sub-header__filter__label">
          on sale
        </label>
      </div>
    </div>
  );
}

export default React.memo<Props>(SubHeaderRight, () => true);
