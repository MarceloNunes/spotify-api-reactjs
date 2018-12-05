import {
    GET_ALBUMS_BY_ARTIST
} from './actionTypes';

export const getAlbumsByArtistAction = albums => {
  return {
    type: GET_ALBUMS_BY_ARTIST,
    albums
  }
};