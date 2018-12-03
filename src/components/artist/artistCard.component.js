import React from 'react';
import { Card, Image, Rating } from 'semantic-ui-react';

export const ArtistCard = () => (
    <Card style={{ margin: '14px', width: '250px'}}>
      <Image src='https://picsum.photos/200/200/?random' />
      <Card.Content>
        <Card.Header>Artist</Card.Header>
        <Card.Description>1,000 followers</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Rating icon='star' defaultRating={3} maxRating={5} size='large' />
      </Card.Content>
    </Card>
);

export default ArtistCard;