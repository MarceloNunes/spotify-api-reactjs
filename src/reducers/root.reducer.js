import { combineReducers } from 'redux';
import { ArtistsReducer } from './artists.reducer';
import { UserReducer } from './user.reducer';

export default combineReducers({
    user: UserReducer,
    artists: ArtistsReducer
});