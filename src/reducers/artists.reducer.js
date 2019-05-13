import {
  ARTISTS__QUERY,
  ARTISTS__FETCH_ONE
} from '../actions/actionTypes';

const reduceArtist = ({followers, id, images, name, popularity}) => ({
  followers: followers.total,
  id,
  image: getBestImage(images),
  name,
  popularity: Math.round(popularity / 20)
});

const getBestImage = images => images && images.length > 0 &&
  images.reduce((result, image) =>
    !result.url || result.width > image.width && result.width > 200 ? image : result,
  {}).url;

export const ArtistsReducer = (state = [], action) => {
  switch (action.type) {
  case ARTISTS__QUERY:
    return (action.artists && action.artists.artists.items || [])
      .map(artist => reduceArtist(artist));
  case ARTISTS__FETCH_ONE:
    return action.artist && [reduceArtist(action.artist)];
  default:
    return state;
  }
};
