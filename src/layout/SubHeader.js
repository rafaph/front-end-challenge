import React from 'react';

function SubHeader() {
  return (
    <div className="sub-header">
      <div className="sub-header--left">
        <div className="sub-header__items">
          <span className="sub-header__items-value">222</span>
          <span className="sub-header__items-unit">item(s)</span>
        </div>
      </div>
      <div className="sub-header--right">
        <div className="sub-header__search">
          <input type="text" className="sub-header__search__input" id="search-input" placeholder="Search"/>
          <label htmlFor="search-input" className="sub-header__search__label icon-search"/>
        </div>
        <div className="sub-header__filter">
          <input type="checkbox" className="sub-header__filter__input" id="filter-sale"/>
          <label htmlFor="filter-sale" className="sub-header__filter__label">
            <span className="sub-header__filter__button"/>
            on sale
          </label>
        </div>
      </div>
    </div>
  )
}

export default SubHeader;
