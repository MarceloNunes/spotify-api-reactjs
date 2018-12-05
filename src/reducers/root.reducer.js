import { combineReducers } from 'redux';
import { AlbumsReducer } from './albums.reducer';
import { ArtistsReducer } from './artists.reducer';
import { UserReducer } from './user.reducer';

export default combineReducers({
    albums: AlbumsReducer,
    artists: ArtistsReducer,
    user: UserReducer
});