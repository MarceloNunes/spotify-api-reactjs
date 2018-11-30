import {
  FETCH_OAUTH_USER
} from './actionTypes';

export const fetchOauthUserAction = user => {
  return {
    type: FETCH_OAUTH_USER,
    user
  }
};