import {
    ARTISTS__QUERY,
    ARTISTS__FETCH_ONE
} from './actionTypes';

export const queryArtistsAction = artists => {
  return {
    type: ARTISTS__QUERY,
    artists
  }
};

export const getArtistAction = artist => {
  return {
    type: ARTISTS__FETCH_ONE,
    artist
  }
};