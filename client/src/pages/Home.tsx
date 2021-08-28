import React from "react";
import Carousel from "../components/Carousel";
import AllShows from "../components/cards/AllShows";

function Home() {
  return (
    <div className="container-fluid">
      <div className="container-fluid mb-4 ps-0 ms-0">
        <h2 className="h4">Welcome to AnimeList!</h2>
      </div>
      <div className="container-fluid">
        <AllShows />
        <Carousel />
      </div>
    </div>
  )
}

export default Home;