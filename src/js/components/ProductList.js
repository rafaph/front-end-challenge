import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products }) {
  return products.map((product, i) => (
    <ProductItem {...product} key={i}/>
  ));
}

export default ProductList;
