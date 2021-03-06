import React from 'react';
import {connect} from 'react-redux';
import {Container, Input} from 'semantic-ui-react';
import MainMenu from '../core/mainMenu.component';
import ArtistCard from './artistCard.component';
import {queryArtists} from '../../selectors/artists.selector';

const mapStateToProps = state => ({
  artists: state.artists
});

const mapDispatchToProps = (dispatch) => ({
  onQueryArtists: keywords => dispatch(queryArtists(keywords)),
});

class ArtistsSearchPage extends React.Component {
  state = {
    keywords: localStorage.getItem('ARTIST_SEACH_KEYWORDS') || '',
    loading: false
  };

  componentWillMount() {
    if (this.state.keywords) {
      this.runQuery(this.state.keywords);
    }
  }

  handleKeywordsChange = e => {
    const keywords = e.target.value;
    localStorage.setItem('ARTIST_SEACH_KEYWORDS', keywords),

      this.runQuery(keywords);
  };

  runQuery = (keywords) => {
    this.setState({
      keywords,
      loading: true
    });

    this.props.onQueryArtists(keywords).then(() => {
      this.setState({
        loading: false
      });
    });
  };

  render() {
    return (
      <div>
        <MainMenu/>
        <div className={'artist-search' + (this.state.keywords.length < 2 ? ' fullscreen' : '')}>
          <Container>
            <Input
              size='huge'
              icon='search'
              placeholder='Search for an artist...'
              value={this.state.keywords}
              onChange={this.handleKeywordsChange}
              loading={this.state.loading}/>
          </Container>
        </div>
        {
          this.state.keywords.length > 0 &&
          <Container className='artist-name-container'>
            <div className='artist-list'>
              <div/>
              {
                !this.state.loading && this.state.keywords.length >= 2 &&
                this.props.artists.map(artist =>
                  <ArtistCard artist={artist} history={this.props.history}/>
                )
              }
              <div/>
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
)(ArtistsSearchPage);
