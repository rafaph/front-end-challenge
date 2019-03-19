// @flow
import React from 'react';

type ProductSize = {
  available: boolean,
  size: string
};

type Props = {
  name: string,
  image: string,
  on_sale: boolean,
  regular_price: string,
  actual_price: string,
  installments: string,
  sizes: Array<ProductSize>
};

const noImg = "https://via.placeholder.com/470x594/FFFFFF.jpeg?text=no+image";

function ProductItem(props: Props) {
  return (
    <div className="product-item">
      <div className="product-item__photo">
        <img className="product-item__image" src={props.image || noImg}
             alt={props.name}/>
        {props.on_sale && <span className="product-item__icon-sale icon-sale"/>}
      </div>
      <div className="product-item__info">
        <span className="product-item__title">
          {props.name}
        </span>
        <div className="product-item__payment">
          <span className="product-item__price">
            {props.actual_price}
          </span>
            <span
              className="product-item__price product-item__price--installments"
            >
            {props.installments}
          </span>
        </div>
        <div className="product-item__management">
          <select name="available-sizes" className="product-item__select">
            {props.sizes.map((size, i) => (
              size.available &&
              <option value={size.size} key={i}>
                {size.size}
              </option>
            ))}
          </select>
          <button className="product-item__btn btn btn--outline">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
