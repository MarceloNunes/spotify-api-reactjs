import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import MainMenu from '../core/mainMenu.component';
import { getArtistInfo } from '../../selectors/artists.selector';
import { getAlbumsByArtist } from '../../selectors/albums.selector';
import { AlbumCard } from './albumCard.component';

const mapStateToProps = state => ({
  artists: state.artists,
  albums: state.albums
});

const mapDispatchToProps = (dispatch) => ({
  onFetchArtistInfo: id => dispatch(getArtistInfo(id)),
  onFetchAlbums: id => dispatch(getAlbumsByArtist(id))
});

export class AlbumsListPage extends React.Component {
  state = {
    artistName: '',
    keywords: '',
    loading: false
  };

  setArtistName = artistName => this.setState(prevState => Object.assign(prevState, {
      artistName
    }));

  componentWillMount() {
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

    this.setState(prevState => Object.assign(prevState, {
      loading: true
    }));

    this.props.onFetchAlbums(this.props.match.params.id).then(() => {
      this.setState(prevState => Object.assign(prevState, {
        loading: false
      }));

      console.log(this.props.albums);
    });
  }

  render() {
    return (
      <div>
        <MainMenu />
        <div className='albums-list-page'>
          <Container>
            <h1>{ this.state.artistName }</h1>
          </Container>
          { !this.state.loading &&
            <Container className='album-list'>
              <div></div>
              { this.props.albums.map(album =>
                <AlbumCard album={album}></AlbumCard>)
              }
              <div></div>
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
