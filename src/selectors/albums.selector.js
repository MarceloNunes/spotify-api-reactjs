import axios from 'axios';
import config from '../../config/config';
import { getAlbumsByArtistAction } from '../actions/albums.action';

export const getAlbumsByArtist = id => dispatch => {
  const accessToken = localStorage.getItem('ACCESS_TOKEN');

  if(accessToken) {
    return axios({
      method: 'get',
      url: config.baseUrl + '/artists/' + id + '/albums',
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    })
    .then(response => {
      dispatch(getAlbumsByArtistAction(response.data));
    })
    .catch(error => {
        throw(error);
    });
  } else {
    return new Promise(response => response());
  }
}