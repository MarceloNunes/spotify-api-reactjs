import {
  ALBUMS__GET_BY_ARTIST,
  ALBUMS__RESET
} from '../actions/actionTypes';

const reduceAlbum = ({id, name, artists, external_urls, images, release_date, total_tracks}) => ({
  id,
  name,
  artist: getArtistName(artists),
  image: getBestImage(images),
  externalUrl : external_urls.spotify,
  releseDate: release_date,
  totalTracks: total_tracks
});

const getArtistName = artists => artists && artists.length < 4 ?
  artists.map(artist => artist.name).join(', ') :
  'Various Artists';

const getBestImage = images => images && images.length > 0 &&
  images.reduce((result, image) =>
    !result.url || result.width > image.width && image.width > 200 ? image : result,
  {}).url;

export const AlbumsReducer = (state = [], action) => {
  switch (action.type) {
  case ALBUMS__GET_BY_ARTIST:
    return state.concat((action.albums && action.albums.items || [])
      .map(album => reduceAlbum(album)));
  case ALBUMS__RESET:
    return [];
  default:
    return state;
  }
};
