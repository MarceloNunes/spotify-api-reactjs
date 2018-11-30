import React from 'react';
import { Card, Image, Rating } from 'semantic-ui-react';

export const ArtistCard = () => (
    <Card style={{ margin: '14px', width: '250px'}}>
      <Image src='https://picsum.photos/200/200/?random' />
      <Card.Content style={{ backgroundColor: '#222', color: 'white'}}>
        <Card.Header style={{ color: 'white'}}>Artist</Card.Header>
        <Card.Description style={{ color: 'white'}}>1,000 followers</Card.Description>
      </Card.Content>
      <Card.Content extra style={{ backgroundColor: '#333', color: 'white'}}>
        <Rating icon='star' defaultRating={3} maxRating={5} size='large' />
      </Card.Content>
    </Card>
);

export default ArtistCard;