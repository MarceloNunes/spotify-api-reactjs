import axios from 'axios';
import config from '../../config/config';
import { fetchOauthUserAction } from '../actions/user.actions';

export const fetchOauthUser = () => dispatch => {
  const accessToken = localStorage.getItem('ACCESS_TOKEN');

  if(accessToken) {
    return axios({
      method: 'get',
      url: config.baseUrl + '/me',
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    })
    .then(response => {
      dispatch(fetchOauthUserAction(response.data));
    })
    .catch(() => {
      localStorage.setItem('ACCESS_TOKEN', '');
      window.location = '/';
    });
  } else {
    return new Promise(response => response());
  }
}

export const logoutUser = () => dispatch => {
  dispatch(fetchOauthUserAction(null));
}