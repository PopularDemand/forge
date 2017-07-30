function setState(state, newState) {
  return {
    ...state,
    ...newState
  };
}

export function AppReducer(state = {}, action) {
  switch(action.type) {
    case 'APP_SET_STATE':
      return setState(state, action.state);
    default:
      return state;
  }
}
