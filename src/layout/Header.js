import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <span className="header__title">amaro</span>
      </div>
      <button className="header__cart">
        <span className="header__cart__badge">0</span>
        <span className="header__cart__icon icon-shopping-bag"/>
      </button>
    </header>
  );
}

export default Header;
