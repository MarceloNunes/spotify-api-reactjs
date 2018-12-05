import { USER__FETCH_OAUTH } from '../actions/actionTypes';

export const UserReducer = (state = '', action) => {
  switch (action.type) {
    case USER__FETCH_OAUTH:
      return action.user;
    default:
      return state;
  }
};

export default UserReducer;