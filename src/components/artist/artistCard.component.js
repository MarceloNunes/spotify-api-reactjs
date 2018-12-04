import React from 'react';
import { Card, Rating } from 'semantic-ui-react';
import numberFormatter from 'number-formatter';

export const ArtistCard = ({artist: {followers, id, images, name, popularity}}) => (
  <Card>
    <div className='item-cover-picture'
      style={{backgroundImage: 'url(' + images + ')'}}>
    </div>
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Description>{numberFormatter('#,##0.', followers)} followers</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Rating disabled
        icon='star'
        rating={popularity}
        maxRating={5}
        size='large' />
    </Card.Content>
  </Card>
);

export default ArtistCard;