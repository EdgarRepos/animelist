# server

The server makes a CRUD API. It uses nodejs, express and mongoDB.

The database has 4 collections:
- headers: Where the content for the carousel on the homepage is.
- shows: Where all the content from the show is. There is just 30 shows in there.
- users: Where the main content from the users is. I left some test users in there.
- watchlist: Where the content from the "add to watchlist" gets stored. The objects in there have its own personal Id and the
  unique id from the user and the show. The Id are stored as ObjectIds.

The index basically just has the connection and listen.
data is where all the functions that are used in the http methods are stored.
The routes folder has inside all the routes divided so that they are more easier to get and organize.
- Inside the routes is where all the methods for the respective routes are located.