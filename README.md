# Spotify API / React.js App

This application is a simple display using the [Spotify API](https://developer.spotify.com/documentation/web-api/quick-start/). It uses the [Spotify Implicit Grant](https://developer.spotify.com/documentation/general/guides/authorization-guide/#implicit-grant-flow) authorization to allow the user to log on Spotify, and then perform a query on artists names and display the list of albums from a selected artist.

This in an front-end application developed in **JavaScript ECMAScript-20015 (ES6)** using **React.js** and **Redux.js** libraries. It is based on **Webpack** and uses **Babel** to translate all code from ES6 to ES5. It also uses `babel-plugin-transform-class-properties` to emulate some ES7 features. It also uses **Semantic UI** visual components.

The package also includes a development environment using **Nodemon** for live update and an small **Node.js** HTTP server and is compatible with the **Heroku** server.

## Live version on Heroku

This application is running live on Heroku service, in the following link:

[https://spotify-artist-search-mpn.herokuapp.com/](https://spotify-artist-search-mpn.herokuapp.com/)

## Installation

To install the application on your local environment, first make sure to have both Git and Node.js installed on your system. Then open a command line terminal and type the following commands.

```
git@github.com:MarceloNunes/spotify-api-reactjs.git
cd spotify-api-reactjs
npm install
npm start
```

After that, point your browser to [http://localhost:3030](http://localhost:3030).

## Application discussions

Next, an overview of the implementation and the technical decision on each step of the application.

### Step 1: Login with an Spotify Account

The application lands on a login page whose component is implemented on [loginPage.component.js](https://github.com/MarceloNunes/spotify-api-reactjs/blob/master/src/components/login/loginPage.component.js). Initially it is presented a big Login Button that, when clicked transport the user to the Spotify authentication page.

> TODO: The navigation to the Spotify Authentication page is done using `window.location`. This can be improved to a popup using `window.open`.

After authentication on Spotify, the application lands back on the same Login page. This time, it extracts the access token from `props.location.hash`and stores it on `localStorage`. After, it redirects to the ArtistSearch page.

> TODO: Store the access token using a Subscriber.

### Step 2: Search artist by keyword

The artist search page is implemented on [artistsSearchPage.component.js](https://github.com/MarceloNunes/spotify-api-reactjs/blob/master/src/components/artists/artistsSearchPage.component.js). This page presents an input box for the keywords. The search is started when the user types at least two characters and updates as the user types.

> TODO: improve synchronization on the *"update as you type"* feature

Each updates triggers a selector that performs the communication with the API using the `axios` module ([artists.selector.js](https://github.com/MarceloNunes/spotify-api-reactjs/blob/master/src/selectors/artists.selector.js)). The API response is dispatched to the appropriate reducer who filters only the information that is needed for the application ([artists.reducer.js](https://github.com/MarceloNunes/spotify-api-reactjs/blob/master/src/reducers/artists.reducer.js)). The items of the reduced list of artists contain the following fields: 

- `id`: artists's unique ID
- `name`: artist name
- `followers`: number of followers, 
- `image`: best fitted image
- `popularity`: a rank from 0 to 5 based on user's feedback about the artist

The algorithm that selects the best fitted image takes as input a list of images with different resolutions (width and height) and select the image with the smallest width not smaller than 200 pixels (which is the width of the Card  component that displays the image). If there is no image with width bigger than 200, then select the biggest available. (Check the `getBestImage` function).

The artists are displayed in cards implemented by the `ArtistCard` component ([artistCard.component.js](https://github.com/MarceloNunes/spotify-api-reactjs/blob/master/src/components/artists/artistCard.component.js)). When the card is clicked it send the user to the list of albums.

### Step 3: List the albums of an artist. 

The Albums List page ([albumsListPage.component.js](https://github.com/MarceloNunes/spotify-api-reactjs/blob/master/src/components/albums/albumsListPage.component.js)) displays two pieces of information: The artist's name and the list of albums.

**Artist's name**: On ordinary navigation, the information about the artist is already available on the `artists` reducer loaded on the search page. So, to avoid redundant API call, it first look for the available artists to find the information about the selected user. 

However, in non-ordinary navigation (for instance, if the user follows a direct link or hits F5 to reload) the information about the selected user will not be available on the reducers. In this case a selector is called to fetch the information about the specific user that was selected. The returned information is transformed by the appropriate reducer the same way it was done on *Step 2*.

**List of Albums**: The first step to obtain the list of albums is to reset the `albums` reducer. After it is called a selector that communicates with the API using the `axios` module ([albums.selector.js](https://github.com/MarceloNunes/spotify-api-reactjs/blob/master/src/selectors/albums.selector.js)). The API response is dispatched to the appropriate reducer who filters only the information that is needed for the application ([albums.reducer.js](https://github.com/MarceloNunes/spotify-api-reactjs/blob/master/src/reducers/albums.reducer.js)). The items of the reduced list of albums contain the following fields: 

- `id`: artists's unique ID
- `name`: album title
- `artist`: artist name
- `image`: best fitted image
- `externalUrl` : URL of this album at the Spotify website
- `releseDate`: release date
- `totalTracks`: total number of tracks of the album

The algorithm to select the artist name get a list of artists' objects and returns a name. If this list contains only one artist, it returns the name of this artist. If it contains two or three artists, it returns all the name comma separated, If it contains more than three artists it returns the string `"Various artists"`.

The best fitted image is selected using the same algoritm as in *Step 2*.

**Load more albums**: The list of albums selector will only fetch 25 albums on each call, but several artists have more than 25 albums on its catalog. To fetch more albums from the catalog the user can click the "Load more albums" button. This will fetch more 25 albums from the API starting with an offset equal to the current length of the list of albums. When the size of the fetch is smaller than 25, the button is hidden.

> TODO: implement this "Load more" feature to the artist search.

> TODO: Remove the Load More albums button and load all albums recursively since the beginning. 

### Step 4: Going back to the artists' search page

When going back to the artists' search page, the last keywords that was stored on `localStorage` is restored and the last query is repeated. 

> TODO: Store the keyword using a Subscriber.
