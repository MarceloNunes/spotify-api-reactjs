import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon } from 'semantic-ui-react';
import MainMenu from '../core/mainMenu.component';
import config from '../../../config/config';

const mapStateToProps = state => ({
  user: state.user
});

class LoginPage extends React.Component {
  state = {
    loading: false
  };

  componentWillMount() {
    const params = this.props.location.hash && this.props.location.hash.split('&').reduce((result, item) => {
      const split_item = item.split('=');
      result[split_item[0].replace('#', '')] = split_item[1];

      return result;
    }, {});

    const access_token = params && params.access_token || null;

    if (access_token) {
      localStorage.setItem('ACCESS_TOKEN', access_token);
      localStorage.setItem('ARTIST_SEACH_KEYWORDS', '')
      this.props.history.push("/artists");
    }
  }

  handleClickLoginButton = () => {
    this.setState({
      loading: true
    });

    window.location = 'https://accounts.spotify.com/authorize?client_id=' +
      config.clientId + '&redirect_uri=' +
      encodeURIComponent(window.location.origin) + '&response_type=token';
  };

  render() {
    return (
      <div>
        <MainMenu />
        <div className='login-page'>
          <Button loading={this.state.loading}
            color='green'
            size='huge'
            onClick={this.handleClickLoginButton}>
            <div className='placeholder'/>
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
