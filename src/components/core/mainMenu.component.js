import { connect } from 'react-redux';
import React from 'react';
import { Menu, Container, Icon, Image } from 'semantic-ui-react'
import { fetchOauthUser, logoutUser } from '../../selectors/user.selector';

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  onLoadUserData: () => dispatch(fetchOauthUser()),
  onLogoutUser: () => dispatch(logoutUser())
});

class MainMenu extends React.Component {
  componentDidMount() {
    if (!this.props.user) {
      this.props.onLoadUserData().then();
    }
  }

  handleLogout = () => {
    localStorage.setItem('ACCESS_TOKEN', null);
    this.props.onLogoutUser();
    window.location = '/';
  };

  render() {
    return (
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item header style={{ borderLeftWidth: '0' }}>
            <Icon inverted name="spotify" size="big" color="green"/>
            Spotify Artist Search
          </Menu.Item>
          {
            this.props.user &&
            <Menu.Menu position='right'>
              <Menu.Item>
                <Image src={this.props.user.images[0].url} size='mini' circular />
              </Menu.Item>

              <Menu.Item onClick={this.handleLogout}>
                Logout
              </Menu.Item>
            </Menu.Menu>
          }
        </Container>
      </Menu>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainMenu);
