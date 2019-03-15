import React from 'react';

function SubHeader({products, actions}) {
  return (
    <div className="sub-header">
      <div className="sub-header--left">
        <div className="sub-header__items">
          <span className="sub-header__items-value">{products.length}</span>
          <span className="sub-header__items-unit">item(s)</span>
        </div>
      </div>
      <div className="sub-header--right">
        <div className="sub-header__search">
          <input type="text" className="sub-header__search__input" id="search-input" placeholder="Search" onChange={(e) => actions.setSearchFilter(e.target.value)}/>
          <label htmlFor="search-input" className="sub-header__search__label icon-search"/>
        </div>
        <div className="sub-header__filter">
          <input type="checkbox" className="sub-header__filter__input" id="filter-sale" onChange={(e) => actions.setOnSaleFilter(e.target.checked)}/>
          <label htmlFor="filter-sale" className="sub-header__filter__label">
            on sale
          </label>
        </div>
      </div>
    </div>
  )
}

export default SubHeader;
