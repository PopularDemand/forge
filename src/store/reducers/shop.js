import { schema, normalize } from 'normalizr';

const productListSchema = [ new schema.Entity('products') ];

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
  const normalized = normalize(products, productListSchema);

  return {
    ...shopState,
    productsById: normalized.entities.products
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
