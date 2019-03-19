import React from 'react';
import Header from './layout/Header';
import SubHeader from './layout/SubHeader';
import Content from './layout/Content';
import '../sass/main.scss';

function App({ catalog, cart, actions }) {
  return (
    <React.StrictMode>
      <Header/>
      <SubHeader productsSize={catalog.products.length}
                 actions={actions}/>
      <Content products={catalog.products}/>
    </React.StrictMode>
  );
}

export default App;
