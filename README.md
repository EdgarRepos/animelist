# animelist

Animelist is like a basic clone of myanimelist.

As it name implies it is a site about anime, it has a collection of anime series (30).

Though the site is about anime, due to its functionality it could be changed to movies, series,
comics, etc. or instead of changing it you could add those sections and it would do a great job.

As it uses react router it is a singlepage webapp.

CONTENT

In the page you find the Home page in where you have a carousel with 3 slides and some text, also in the
homepage you can find 3 cards which give a simple explanation of the things you can do in the webpage.

The webpage has a navbar with 5 texts.

All of them are Links of react router that will take you to the pages with their respective names, the only
exception is your account which is a dropdown, inside of it you have 2 Link elements.

- AnimeList, which is the name of the page, if you click on it, it will take you to the homepage.
- Top Shows, in this part you will see the shows that have the highest ranking, voted by the users, they are ordered 
  by score. Each show has the "Add to watchlist" button, if you are logged in with this button you can add shows to your
  watchlist, mark them as completed, plan to watch, watching, score the shows, and add them to your watchlist.
- All Shows, which makes a different way of the presenting the shows and shows you every show, the shows are ordered
  in alphabetic order so that you can more easily look for the show you want, it also has the "Add to watchlist" button 
  with the same functionality as mentioned before, in this page you have more info about the shows like the genres and 
  the description of the show, and it has a different way of presenting this information.
- Register, which is where you register an account, it doesn't let you repeat a username that is already stored in
  the database, and puts some restrictions on the number of characters in your username and password, if you make an
  error in one of the fields, when you do submit it will tell you in which field you made the mistake and some insight
  into it.
- Login, after you have created a valid account you can log in from here, if you do a succesful login it will take you
  to the homepage.

After your first register or each time you log in, the log in and register will dissapear, instead your username will
appear on the top right corner of the navbar, as it is a dropdown if you click on it it will give you 2 options:
- Watchlist, in here you will see the shows that you have added to your watch list, with the status that you have chosen, 
  the score that you gave to that show and also it will have the number of episodes that you have watched, if you click on
  the status button you can modify this data. It refreshes the data each time you submit a change in your watchlist in a
  dinamic way.
- Lastly the Log out, when you click that option your session will end and you will be taken to the homepage.

TECHNOLOGIES USED

AnimeList uses:
  for the back-end:
    - nodejs
    - express
    - mongoDB
  
  for the front-end:
    - reactjs
    - typescript
    - react router
    - bootstrap for the styles and some in-line css

NOTE

The server and the client also have their own README files.
