import { QUERY_ARTISTS } from '../actions/actionTypes';

export const ArtistsReducer = (state = [], action) => {
  switch (action.type) {
    case QUERY_ARTISTS:
        console.log(action);
      return (action.artists.artists && action.artists.artists.items || [])
        .map(({followers, id, images, name, popularity}) => ({
            followers: followers.total,
            id,
            images: images && images.length > 0 && images[0].url,
            name,
            popularity: Math.round(popularity / 20)
        }));
    default:
      return state;
  }
};

export default ArtistsReducer;