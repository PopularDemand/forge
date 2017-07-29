import { merge } from 'lodash';

function setState(state, newState) {
  return merge(state, newState);
}

export function ShopReducer(state = {}, action) {
  switch(action.type) {
    case 'SHOP_SET_STATE':
      return setState(state, action.state);
    default:
      return state;
  }
};
