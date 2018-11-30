import axios from 'axios';
import config from '../../config/config';
import { fetchOauthUserAction } from '../actions/user.actions';

export const fetchOauthUser = () => async dispatch => {
  const user = {
    name: 'Marcelo Nunes',
    email: 'marcelopereiranunes@gmail.com'
  };

  dispatch(fetchOauthUser());
};