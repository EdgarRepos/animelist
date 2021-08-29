import React from "react";
import Carousel from "../components/Carousel";

function Home() {
  return (
    <div className="container-fluid">
      <div className="container-fluid mb-4 ps-0 ms-0">
        <h2 className="h4">Welcome to AnimeList!</h2>
      </div>
      <div className="container-fluid">
        <Carousel />
      </div>
    </div>
  )
}

export default Home;