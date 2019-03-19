import React from 'react';
import ProductList from '../components/ProductList';

function Content({ products }) {
  return (
    <main className="content">
      <ProductList products={products}/>
    </main>
  );
}

export default Content;
