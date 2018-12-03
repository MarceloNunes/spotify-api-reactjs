import React from 'react';
import { connect } from 'react-redux';
import { Container, Input } from 'semantic-ui-react';
import MainMenu from '../core/mainMenu.component';
import { ArtistCard } from './artistCard.component';

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
          <Container>
            <Input
              size='huge'
              icon='search'
              placeholder='Search for an artist...'
              value={this.state.keywords}
              onChange={this.handleKeywordsChange} />
          </Container>
        </div>
        {
          this.state.keywords.length > 0 &&
          <Container className='artist-name-container'>
            <div className='artist-list'>
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
            </div>
          </Container>
        }
      </div>
    );
  }
}

export default connect(
  mapStateToProps
)(ArtistSearchPage);
