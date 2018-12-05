import {
    QUERY_ARTISTS,
    GET_ARTIST
} from './actionTypes';

export const queryArtistsAction = artists => {
  return {
    type: QUERY_ARTISTS,
    artists
  }
};

export const getArtistAction = artist => {
  return {
    type: GET_ARTIST,
    artist
  }
};