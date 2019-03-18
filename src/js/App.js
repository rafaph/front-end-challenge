import React from 'react';
import Header from './layout/Header';
import SubHeader from './layout/SubHeader';
import '../sass/main.scss';

function App({catalog, cart, actions}) {
  return (
    <React.StrictMode>
      <Header/>
      <SubHeader productsSize={catalog.products.length}
                 actions={actions}/>
    </React.StrictMode>
  );
}

export default App;
