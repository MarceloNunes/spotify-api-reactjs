import { QUERY_ARTISTS } from '../actions/actionTypes';

export const ArtistsReducer = (state = [], action) => {
  switch (action.type) {
    case QUERY_ARTISTS:
      return (action.artists.artists && action.artists.artists.items || [])
        .map(({followers, id, images, name, popularity}) => ({
            followers: followers.total,
            id,
            images: images && images.length > 0 &&
              images.reduce((result, image) =>
                !result.url || result.width > image.width && result.width > 200 ? image : result,
              {}).url,
            name,
            popularity: Math.round(popularity / 20)
        }));
    default:
      return state;
  }
};

export default ArtistsReducer;