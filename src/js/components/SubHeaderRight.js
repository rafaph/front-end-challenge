// @flow
import * as React from 'react';

function SubHeaderRight() {
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

export default SubHeaderRight;
