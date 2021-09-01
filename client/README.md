# client

In this readme it will be explained the basic structure of the files for the front-end.

The client has its main content on the src folder.

In the src you will find the App and index file for the aplication, and also the index.css.
- The index.tsx is where react-dom is used and where the connection to the HTML is made.
- In the App you will find all the routes used in the react router and a useEffect used together
  with a useContext so that if the session is not logged out will be keep active on the front end.
- The index.css is where the styles that where needed for some of the components are. Even though
  the project uses bootstrap there where some cases where regular css was needed.

In the pages you will find the as it names implies the pages that the site has. Those are:
- Home page, it is composed of the Carousel and the HomeCards.
- AllShows, it is composed of the AllShowsCards.
- TopShows, it is composed of the AllTopShowCards and a section that says rank, title, score, etc.
  to explain a little the content of what you will see there.
- Watchlist, it is composed of AllWatchListCards and as the TopShows it also has a section that explain
  the content of the Cards.
- Register, it is composed of the RegisterForm.
- Login, it is composed of the LoginForm.

In the modules you will find the API and the formValidation files.
- API, this file is where the methods used to get information for the API are, and also where you can
  find the grand majority of the interfaces used.
- formValidation, this file is where the validation methods for the LoginForm and the RegisterForm are,
  it also includes its interfaces.

In the context you will find only one file, userContext which is the method used for making the session work
in the front-end, and taking that state to the parts where its needed like the App and the navbar.

In the components folder you will as it names implies the components that make this app.
In the folder you find 5 components and 1 folder, the five components are:
- The Carousel, this is the one that is used in the homepage.
- The login and register form used in pages with the same name.
- The navbar, where you find all the Links to the pages.
- The ShowForm, this component is the one that shows up when you click the "Add to watchlist" button, and the
  status button in the watchlist, with this component you add a show to your list and review it.

The folder inside the components folder is the cards folder in here you will find the next things:
- AllShowsCards, this file contains all the MainShowsCards generated with the content of the shows in the database, 
  this is the component used in the AllShows page.
- AllTopShowsCards, this file contains all the TopShowCards generated with the content of the shows in the database, 
  this is the component used in the TopShows page.
- AllWatchListCards, this file contains all the WatchListCard generated with the content of the user watchlist,
  this is the component used in the Watchlist page.

The folder inside the cards folder is the individual-cards folder in here you will find the next things:
- MainShowCard, this file structures an individual show in a card, and contains the most info
  about the shows, it is part of the AllShowsCards.
- TopShowCard, this file structures an individual show in row that is inside a grid and divides it into
  columns, this is the component used in the AllTopShowsCards.
- WatchListCard, this file structures an individual show in row that is inside a grid and divides it into
  columns much like the TopShowCards, but this doesn't have a rank and the date of airing, this is the component 
  used in the AllWatchListCards.
- HomeCard, this component is a card component that just contains a title and some paragraphs, it is used inside the
  Home page.
