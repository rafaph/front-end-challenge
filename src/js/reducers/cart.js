import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  INCREMENT_PRODUCT,
  DECREMENT_PRODUCT
} from '../constants/ActionTypes';

const initialState = {
  products: []
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
    case DELETE_PRODUCT:
    case INCREMENT_PRODUCT:
    case DECREMENT_PRODUCT:
    default:
      return state;
  }
}
