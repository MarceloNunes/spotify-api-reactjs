import React from 'react';
import { Menu, Container, Icon } from 'semantic-ui-react'

export const MainMenu = () => (
  <Menu fixed='top' inverted>
    <Container>
      <Menu.Item header>
        <Icon inverted name="spotify" size="big" color="green"/>
        Spotify Artist Search
      </Menu.Item>
    </Container>
  </Menu>
);

export default MainMenu;