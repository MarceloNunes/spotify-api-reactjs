import axios from 'axios';
import config from '../../config/config';
import { queryArtistsAction } from '../actions/artists.action';

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
    //   localStorage.setItem('ACCESS_TOKEN', '');
    //   window.location = '/';
    });
  } else {
    return new Promise(response => response());
  }
}