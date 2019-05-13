import React from 'react';
import { connect } from 'react-redux';
import { Card, Rating } from 'semantic-ui-react';
import numberFormatter from 'number-formatter';

class ArtistCard  extends React.Component {

  handleCardClick = () => {
    this.props.history.push('/artist/' + this.props.artist.id + '/albums');
  };

  render() {
    return (
      <Card onClick={this.handleCardClick}>
        <div className='item-cover-picture'
          style={{backgroundImage: 'url(' + this.props.artist.image + ')'}}>
        </div>
        <Card.Content>
          <Card.Header>
            {this.props.artist.name}
          </Card.Header>
          <Card.Description>{numberFormatter('#,##0.', this.props.artist.followers)} followers</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Rating disabled
            icon='star'
            rating={this.props.artist.popularity}
            maxRating={5}
            size='large' />
        </Card.Content>
      </Card>
    );
  }
}

export default connect()(ArtistCard);
