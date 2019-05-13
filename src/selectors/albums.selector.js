import axios from 'axios';
import config from '../../config/config';
import {
  getAlbumsByArtistAction,
  resetAlbumsListAction
} from '../actions/albums.action';

export const resetAlbumsList = ()=> dispatch => dispatch(resetAlbumsListAction());

export const getAlbumsByArtist = (id, offset = 0) => dispatch => {
  const accessToken = localStorage.getItem('ACCESS_TOKEN');

  if(accessToken) {
    return axios({
      method: 'get',
      url: config.baseUrl + '/artists/' + id + '/albums?limit=25&include_groups=album&offset=' + offset,
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
};
