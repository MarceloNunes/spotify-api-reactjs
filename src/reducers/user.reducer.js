import { FETCH_OAUTH_USER } from '../actions/actionTypes';

export const UserReducer = (state = '', action) => {
  switch (action.type) {
    case FETCH_OAUTH_USER:
      return action.user;
    default:
      return state;
  }
};

export default UserReducer;