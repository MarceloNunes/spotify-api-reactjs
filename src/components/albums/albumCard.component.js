import React from 'react';
import { Card } from 'semantic-ui-react';

export const AlbumCard = ({album: {name, artist, image, externalUrl, releseDate, totalTracks}}) => (
  <Card as='a' href={externalUrl} target='_blank'>
    <div className='item-cover-picture'
      style={{backgroundImage: 'url(' + image + ')'}}>
    </div>
    <Card.Content>
      <Card.Header>
        {name}
      </Card.Header>
      <Card.Description>
        {artist}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div>{releseDate}</div>
      <div>{totalTracks} tracks</div>
    </Card.Content>
    <Card.Content as='a'  extra>
      Preview on Spotify
    </Card.Content>
  </Card>
);

export default AlbumCard;
