import * as types from '../constants/ActionTypes';

export const setSearchFilter = query => ({
  type: types.SET_SEARCH_FILTER,
  query
});

export const setOnSaleFilter = onSale => ({
  type: types.SET_ON_SALE_FILTER,
  onSale
});
