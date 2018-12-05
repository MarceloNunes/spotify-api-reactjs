# Spotify API / React.js App

This application is a simple display using the [Spotify API](https://developer.spotify.com/documentation/web-api/quick-start/). It uses the [Spotify Implicit Grant](https://developer.spotify.com/documentation/general/guides/authorization-guide/#implicit-grant-flow) authorization to allow the user to log on Spotify, and then perform a query on artists names and display the list of albums from a selected artist.

This in an front-end application developed in *JavaScript ECMAScript-20015 (ES6)* using *React.js* and *Redux.js* libraries. It is based on *Webpack* and uses *Babel* to translate all code from ES6 to ES5. It also uses `babel-plugin-transform-class-properties` to emulate some ES7 features. It also uses *Semantic UI* visual components.

The package also includes a development environment using *Nodemon* for live update and an small *Node.js* HTTP server and is compatible with the *Heroku* server.

## Live version on Heroku

This application is running live on Heroku service, in the following link:

[https://spotify-artist-search-mpn.herokuapp.com/](https://spotify-artist-search-mpn.herokuapp.com/)

## Installation

To install the application on your local environment, first make sure to have bith Git and Node.js installed on your system. Then open a command line terminal and type the following commands.

```bash
git@github.com:MarceloNunes/spotify-api-reactjs.git
cd spotify-api-reactjs
npm install
npm start
```

After that, point your browser to [http://localhost:3030](http://localhost:3030).
