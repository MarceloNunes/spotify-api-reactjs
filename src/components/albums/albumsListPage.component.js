import React from 'react';
import { connect } from 'react-redux';
import { Button, Container } from 'semantic-ui-react';
import MainMenu from '../core/mainMenu.component';
import { getArtistInfo } from '../../selectors/artists.selector';

import {
  getAlbumsByArtist,
  resetAlbumsList
} from '../../selectors/albums.selector';

import AlbumCard from './albumCard.component';

const mapStateToProps = state => ({
  artists: state.artists,
  albums: state.albums
});

const mapDispatchToProps = (dispatch) => ({
  onFetchArtistInfo: id => dispatch(getArtistInfo(id)),
  onFetchAlbums: (id, offset) => dispatch(getAlbumsByArtist(id, offset)),
  onResetAlbumsList: () => dispatch(resetAlbumsList())
});

class AlbumsListPage extends React.Component {
  state = {
    artistName: '',
    keywords: '',
    loading: false,
    showLoadModeButton: true
  };

  setArtistName = artistName => this.setState(prevState => Object.assign(prevState, {
      artistName
    }));

  componentWillMount() {
    this.props.onResetAlbumsList();
    this.props.albums = [];

    const artists = this.props.artists.filter(artist => artist.id === this.props.match.params.id);

    if (artists && artists.length > 0) {
      this.setArtistName(artists[0].name);
    } else {
      this.props.onFetchArtistInfo(this.props.match.params.id).then(() => {
        if (this.props.artists && this.props.artists.length > 0) {
          this.setArtistName(this.props.artists[0].name);
        }
      });
    }

    this.fetchAlbumListSegment();
  }

  fetchAlbumListSegment = () => {
    const previousCount = this.props.albums.length;
    this.setState(prevState => Object.assign(prevState, {
      loading: true
    }));

    this.props.onFetchAlbums(this.props.match.params.id, this.props.albums.length).then(() => {
      this.setState(prevState => Object.assign(prevState, {
        loading: false
      }));

      const newCount = this.props.albums.length;

      if (newCount < previousCount + 25) {
        this.setState( {
          showLoadModeButton: false
        });
      }
    });
  };

  handleLoadMoreClick = () => this.fetchAlbumListSegment();

  render() {
    return (
      <div>
        <MainMenu />
        <div className='albums-list-page'>
          <Container>
            <h1>{ this.state.artistName }</h1>
          </Container>
          <Container className='album-list'>
            <div />
            { this.props.albums.map(album =>
              <AlbumCard album={album} />)
            }
            <div />
          </Container>
          { this.state.showLoadModeButton &&
            <Container className='load-more-button-container'>
              <Button basic inverted
                color='green'
                size='big'
                loading={this.state.loading}
                onClick={this.handleLoadMoreClick}>
                Load more albums
              </Button>
            </Container>
          }
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumsListPage);
