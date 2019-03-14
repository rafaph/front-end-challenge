import React from 'react';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">amaro</h1>
      <button className="header__cart">
        <span className="header__cart__badge">2</span>
        <span className="header__cart__icon icon-shopping-bag"/>
      </button>
    </header>
  );
}

export default Header;
