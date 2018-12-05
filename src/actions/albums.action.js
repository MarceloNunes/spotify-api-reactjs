import {
  ALBUMS__GET_BY_ARTIST,
  ALBUMS__RESET
} from './actionTypes';

export const getAlbumsByArtistAction = albums => ({
  type: ALBUMS__GET_BY_ARTIST,
  albums
});

export const resetAlbumsListAction = () => ({
  type: ALBUMS__RESET,
  albums: []
})