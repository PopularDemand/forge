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

function setProducts(shopState, products) {
  // normalize the data

  return {
    ...shopState,
    products
  };
}

export function ShopReducer(state = {}, action) {
  switch(action.type) {
    case 'SHOP_SET_STATE':
      return setState(state, action.state);
    case 'SET_SELECTED_CATEGORY':
      return setCategory(state, action.id);
    case 'LOAD_PRODUCTS_SUCCESS':
      return setProducts(state, action.payload.data);
    default:
      return state;
  }
}
