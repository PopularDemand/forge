import { createSelector } from 'reselect';

const getAppState = (state) => state.app;

export const headerSelector = createSelector(
  [getAppState],
  (app) => app
);
