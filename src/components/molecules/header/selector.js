import { createSelector } from 'reselect';

const getAppState = (state) => state;

export const headerSelector = createSelector(
  [getAppState],
  (state) => state
);
