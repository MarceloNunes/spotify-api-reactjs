import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon } from 'semantic-ui-react';
import MainMenu from '../core/mainMenu.component';
import config from '../../../config/config';
// import { access } from 'fs';

const mapStateToProps = state => ({
  user: state.user
});

export class LoginPage extends React.Component {
  state = {
    loading: false
  };

  componentDidMount() {
    const params = this.props.location.hash && this.props.location.hash.split('&').reduce((result, item) => {
      const split_item = item.split('=');
      result[split_item[0].replace('#', '')] = split_item[1];

      return result;
    }, {});

    const access_token = params && params.access_token || null;

    if (access_token) {
      localStorage.setItem('ACCESS_TOKEN', access_token);
      this.props.history.push("/artist");
    }
  }

  handleClickLoginButton = () => {
    this.setState(prevState => Object.assign(prevState, {
      loading: true
    }));

    window.location = 'https://accounts.spotify.com/authorize?client_id=' +
      config.clientId + '&redirect_uri=' +
      encodeURIComponent('http://localhost:' + config.port) + '?&response_type=token';
  }

  render() {
    return (
      <div>
        <MainMenu />
        <div className='login-page'>
          <Button loading={this.state.loading}
            color='green'
            size='huge'
            onClick={this.handleClickLoginButton}>
            <div className='placeholder'></div>
            <div className='text' >Login</div>
            <div className='icon-container'>
              <Icon
                size='big'
                name='spotify' />
            </div>
          </Button>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps
)(LoginPage);
