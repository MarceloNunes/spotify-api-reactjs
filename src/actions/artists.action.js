import {
    QUERY_ARTISTS
  } from './actionTypes';

  export const queryArtistsAction = artists => {
    return {
      type: QUERY_ARTISTS,
      artists
    }
  };