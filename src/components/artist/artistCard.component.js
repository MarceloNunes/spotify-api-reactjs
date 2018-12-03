import React from 'react';
import { Card, Icon, Rating } from 'semantic-ui-react';

export const ArtistCard = ({artist: {followers, id, images, name, popularity}}) => (
  <Card style={{ margin: '14px', width: '250px'}}>
    <div className='item-cover-picture'
      style={{backgroundImage: 'url(' + images + ')'}}>
    </div>
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Description>{followers} followers</Card.Description>
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