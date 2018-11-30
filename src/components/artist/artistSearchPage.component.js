import React from 'react';
import { connect } from 'react-redux';
import { Button, Dimmer, Loader, Icon, Input } from 'semantic-ui-react';
import { MainMenu } from '../core/mainMenu.component';

const mapStateToProps = state => ({
  user: state.user
});

export class ArtistSearchPage extends React.Component {
  state = {
    keywords: '',
    loading: false
  };

  handleKeywordsChange = e => {
  const keywords = e.target.value;

  this.setState(prevState => Object.assign(prevState, {
    keywords
  }));
};

render() {
    return (
      <div>
        <MainMenu />
        <div className={ 'artist-search' + (this.state.keywords.length === 0 ? ' fullscreen' : '')} >
          <Input
            size='huge'
            icon='search'
            placeholder='Search for an artist...'
            value={this.state.keywords}
            onChange={this.handleKeywordsChange} />
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps
)(ArtistSearchPage);