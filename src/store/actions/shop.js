export const shopSetState = (data) => {
  return {
    type: 'SHOP_SET_STATE',
    state: data
  };
}

export const setSelectedCategory = (id) => {
  return {
    type: 'SET_SELECTED_CATEGORY',
    id
  };
}
