import { createSelector } from 'reselect';

const getAllProducts = state => state.catalog.products;
const getQuery = state => state.catalog.query;
const getOnSale = state => state.catalog.onSale;

export const getProducts = createSelector(
  [getAllProducts, getQuery, getOnSale],
  (products, query, onSale) => {
    if (query !== '') {
      const search = new RegExp(query, 'i');
      return products.filter(product => {
        const contains = search.test(product.name);
        if (contains && onSale) {
          return product.on_sale;
        }
        return contains;
      });
    }

    if (onSale) {
      return products.filter(product => product.on_sale);
    }

    return products;
  }
);
