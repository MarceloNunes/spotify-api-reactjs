# Spotify API / React.js App

This application is a simple display using the [Spotify API](https://developer.spotify.com/documentation/web-api/quick-start/). It uses the [Spotify Implicit Grant](https://developer.spotify.com/documentation/general/guides/authorization-guide/#implicit-grant-flow) authorization to allow the user to log on Spotify, and then perform a query on artists names and display the list of albums from a selected artist.

This in an front-end application developed in **JavaScript ECMAScript-20015 (ES6)** using **React.js** and **Redux.js** libraries. It is based on **Webpack** and uses **Babel** to translate all code from ES6 to ES5. It also uses `babel-plugin-transform-class-properties` to emulate some ES7 features. It also uses **Semantic UI** visual components.

The package also includes a development environment using **Nodemon** for live update and an small **Node.js** HTTP server and is compatible with the **Heroku** server.

## Live version on Heroku

This application is running live on Heroku service, in the following link:

[https://spotify-artist-search-mpn.herokuapp.com/](https://spotify-artist-search-mpn.herokuapp.com/)

## Installation

To install the application on your local environment, first make sure to have bith Git and Node.js installed on your system. Then open a command line terminal and type the following commands.

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

The application lands on a login page whose component is implemented on [loginPage.component.js](https://github.com/MarceloNunes/spotify-api-reactjs/blob/master/src/components/login/loginPage.component.js). Initially it is presented a big Login Button that, when cliced pasport the user to the Spotify authentication page.

> TODO: The navigation to the Spotify Authentiction page is done using `window.location`. This can be improved to a popup using `window.open`.

After authentication on Spotify, the application lands back on the same Login page. This time, it extracts the access token from `props.location.hash`and stores it on `localStorage`. After, it reirects to the ArtistSearch page.

> TODO: Store the access token using a Subscriber.

### Step 2: Search artist by keyword

The artist search page is implemented on [artistsSearchPage.component.js](https://github.com/MarceloNunes/spotify-api-reactjs/blob/master/src/components/artists/artistsSearchPage.component.js). This page presents an input box for the keywords. The search is started when the user types at least two characters and updates as the user types.

> TODO: improve syncrhonization on the *"update as you type"* feature

Each updates triggers a selector that performs the communication with the API using the `axios` module ([artists.selector.js](https://github.com/MarceloNunes/spotify-api-reactjs/blob/master/src/selectors/artists.selector.js)). The API response is dispatched to the appropriate reducer who filters only the information that is needed for the application ([artists.reducer.js](https://github.com/MarceloNunes/spotify-api-reactjs/blob/master/src/reducers/artists.reducer.js)). The items of the reduced list of artists contain the following fields: 

- `id`: artists's unique ID
- `name`: artist name
- `followers`: number of followers, 
- `image`: best fitted image
- `popularity`: a rank from 0 to 5 based on user's feedback about the artist

The algorithm that selects the best fitted image takes as input a list of images with different resolutions (width and height) and select the image with the smallest width not smaller than 200 pixels (which is the width of the Card  component that displays the image). If there is no image with width bigger than 200, then select the biggest available. (Check the `getBestImage` function).

The artists are displayed in cards implemented by the `ArtistCard` component ([artistCard.component.js](https://github.com/MarceloNunes/spotify-api-reactjs/blob/master/src/components/artists/artistCard.component.js)). When the card is clicked it send the user to the list of albums.

