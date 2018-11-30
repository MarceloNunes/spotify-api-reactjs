import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoginPage from '../components/login/loginPage.component';
import ArtistSearchPage from '../components/artist/artistSearchPage.component';


const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={LoginPage} exact={true} />
      <Route path="/artist" component={ArtistSearchPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;