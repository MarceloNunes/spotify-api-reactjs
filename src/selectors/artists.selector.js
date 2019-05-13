import axios from 'axios';
import config from '../../config/config';
import {
  queryArtistsAction,
  getArtistAction
} from '../actions/artists.action';

export const queryArtists = keywords => dispatch => {
  const accessToken = localStorage.getItem('ACCESS_TOKEN');

  if(accessToken && keywords && keywords.length >= 2) {
    return axios({
      method: 'get',
      url: config.baseUrl + '/search?q=' + encodeURIComponent(keywords) + '&type=artist',
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    })
      .then(response => {
        dispatch(queryArtistsAction(response.data));
      })
      .catch(error => {
        throw(error);
      });
  } else {
    return new Promise(response => response());
  }
};

export const getArtistInfo = id => dispatch => {
  const accessToken = localStorage.getItem('ACCESS_TOKEN');

  if(accessToken) {
    return axios({
      method: 'get',
      url: config.baseUrl + '/artists/' + id,
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    })
      .then(response => {
        dispatch(getArtistAction(response.data));
      })
      .catch(error => {
        throw(error);
      });
  } else {
    return new Promise(response => response());
  }
};
