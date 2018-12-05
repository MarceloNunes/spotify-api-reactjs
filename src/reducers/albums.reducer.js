import {
  GET_ALBUMS_BY_ARTIST
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
  case GET_ALBUMS_BY_ARTIST:
  return (action.albums && action.albums.items || [])
    .map(album => reduceAlbum(album));
  default:
    return state;
  }
};

export default AlbumsReducer;