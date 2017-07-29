export const appSetState = (data) => {
  return {
    type: 'APP_SET_STATE',
    state: data
  };
}