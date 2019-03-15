import {
  SET_ON_SALE_FILTER,
  SET_SEARCH_FILTER
} from '../constants/ActionTypes';
import productsSource from '../../resources/products';

const initialState = {
  products: productsSource.products,
  query: '',
  onSale: false
};

export default function catalog(state = initialState, action) {
  switch (action.type) {
    case SET_ON_SALE_FILTER:
      return {
        ...state,
        onSale: action.onSale
      };
    case SET_SEARCH_FILTER:
      return {
        ...state,
        query: action.query
      };
    default:
      return state;
  }
}
