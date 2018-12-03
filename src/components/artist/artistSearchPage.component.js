import React from 'react';
import { connect } from 'react-redux';
import { Container, Input } from 'semantic-ui-react';
import MainMenu from '../core/mainMenu.component';
import { ArtistCard } from './artistCard.component';
import { queryArtists } from '../../selectors/artists.selector';

const mapStateToProps = state => ({
  artists: state.artists
});

const mapDispatchToProps = (dispatch) => ({
  onQueryArtists: keywords => dispatch(queryArtists(keywords)),
});

export class ArtistSearchPage extends React.Component {
  state = {
    keywords: '',
    loading: false
  };

  handleKeywordsChange = e => {
    const keywords = e.target.value;

    this.setState(prevState => Object.assign(prevState, {
      keywords,
      loading: true
    }));

    this.props.onQueryArtists(keywords).then(() => {
      this.setState(prevState => Object.assign(prevState, {
        loading: false
      }));
      console.log(this.props.artists);
    });

    setTimeout(() => {

    }, 1000);
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
              placeholder='Search for an artist.....'
              value={ this.state.keywords }
              onChange={ this.handleKeywordsChange }
              loading={ this.state.loading } />
          </Container>
        </div>
        {
          this.state.keywords.length > 0 &&
          <Container className='artist-name-container'>
            <div className='artist-list'>
            { this.props.artists.map(artist =>
              <ArtistCard artist={artist} />
            )}
            </div>
          </Container>
        }
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistSearchPage);
