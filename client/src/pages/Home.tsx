import React from "react";
import Carousel from "../components/Carousel";
import HomeCard from "../components/cards/individual-cards/HomeCard";
 
function Home() {
  return (
    <div className="container mt-5 pt-4">
      <div className="ps-0 ms-0">
        <h2 className="h4">Welcome to AnimeList!</h2>
      </div>
      <div className="mt-5">
        <Carousel />
        <div className="row mt-5">
          <div className="col">
            <HomeCard 
              title="Organize"
              paragraph="With our watchlist option you can organize your shows much better."
              paragraph2="Whether you have completed the anime, currently watching it or it's on your to-watch."
            />
          </div>
          <div className="col">
            <HomeCard 
              title="Review"
              paragraph="Have you ever seen a show and thought that that show was a masterpiece?."
              paragraph2="In AnimeList you can rate the anime you watched and give it a personal score."
              paragraph3="With a high enough rating a show can reach our Top Shows list."
            />
          </div>
          <div className="col">
            <HomeCard 
              title="Discover"
              paragraph="Get to discover new anime either old or new in our extensive anime library."
              paragraph2="Classics like Slam Dunk, hidden gems like Odd taxi and many other new shows are in our library."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
