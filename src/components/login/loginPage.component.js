import React from 'react';
import { connect } from 'react-redux';
import { Button, Dimmer, Loader, Icon } from 'semantic-ui-react';
import { MainMenu } from '../core/mainMenu.component';

const mapStateToProps = state => ({
  user: state.user
});

export class LoginPage extends React.Component {
  state = {
    loading: false
  };

  handleClickLoginButton = () => {
    this.setState(prevState => Object.assign(prevState, {
      loading: true
    }));

    setTimeout(() => {
      this.props.history.push("/artist");
    }, 1000);
  }

  render() {
    return (
      <div>
        { this.state.loading &&
          <Dimmer page active>
            <Loader
              color='green'
              content='Loading'
              size='huge' />
          </Dimmer>
        }
        <MainMenu />
        <div className='login-page'>
          <Button
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
