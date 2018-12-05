import {
  USER__FETCH_OAUTH
} from './actionTypes';

export const fetchOauthUserAction = user => {
  return {
    type: USER__FETCH_OAUTH,
    user
  }
};