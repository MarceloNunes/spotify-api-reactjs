import axios from 'axios';
import config from '../../config/config';
import { fetchOauthUserAction } from '../actions/user.actions';

export const fetchOauthUser = () => dispatch => axios({
    method: 'get',
    url: config.baseUrl + '/me',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('ACCESS_TOKEN')
    }
  })
  .then(response => {
    dispatch(fetchOauthUserAction(response.data));
  })
  .catch(error => {
    throw (error);
  });

export const logoutUser = () => dispatch => {
  dispatch(fetchOauthUserAction(null));
}