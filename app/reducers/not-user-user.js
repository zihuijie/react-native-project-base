import { createSelector } from 'reselect';

export default function users(state = {}, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

// select type of user provider or service
export const usersHashSelector = state => state.type;

export const usersSelector = createSelector(usersHashSelector, hash => Object.values(hash));
