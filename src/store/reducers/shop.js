function setState(state, newState) {
  return {
    ...state,
    ...newState
  };
}

function setCategory(shopState, selectedCategory) {
  return {
    ...shopState,
    selectedCategory
  };
}

export function ShopReducer(state = {}, action) {
  switch(action.type) {
    case 'SHOP_SET_STATE':
      return setState(state, action.state);
    case 'SET_SELECTED_CATEGORY':
      return setCategory(state, action.id);
    default:
      return state;
  }
};
