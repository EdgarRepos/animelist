# animelist

Animelist is like a basic clone of myanimelist.

As it name implies it is about anime, it has a collection of anime series (30).

As it uses react router it is a singlepage webapp.

In the page you find the Home page in where you have a carousel with 3 slides and some text, also in the
homepage you can find 3 cards which give a simple explanation of the things you can do in the webpage.

The webpage has a navbar with 5 texts.
- AnimeList, which is the name of the page, if you click on it, it will take you to the homepage.
- Top Shows, as it name implies it takes you to the Top shows, but as the global score functionality doesn't work
  it just like a different way of presenting the shows. Each show has the "Add to watchlist" button, if you are
  logged in with this button you can add shows to your watchlist, mark the as completed, plan to watch, watching,
  score the shows, and just keep them in your watchlist as a memory.
- All Shows, which makes a different way of the presenting the shows and shows you every show, it also has the
  "Add to watchlist" button with the same functionality. Due to the global score not working and there just being
  30 shows there isn't much of a difference between the Top Shows and All Shows.
- Register, which is where you register an account, it doesn't let you repeat a username that is already stored in
  the database, and puts some restrictions and the number of characters in your username and password, it also has 
  a regex which i took from a webpage that checks the input of your email so that it has the basic things for a valid
  email.
- Login, after you have created a valid account you can log in from here, if you do a succesful login it will take you
  to the homepage.

- After your first register or each time you log in, the log in and register will dissapear, instead your username will
  appear on the top right corner of the navbar, if you click on it it will give you 2 options:
- Watchlist, in here you will see the show that you have added to your watch list, with the status that you have chosen, 
  the score that you gave to that show and also it will have the number of episodes that you have watched, you can click
  on the button to update that state when you want to.
- Lastly the Log out, when you click that option your session will end.

AnimeList uses:
  for the back-end:
    -nodejs
    -express
    -mongoDB
  
  for the front-end:
    -reactjs
    -typescript
    -react router
    -bootstrap for the styles and some in-line css

