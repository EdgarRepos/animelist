import React from "react";
import AllShowsCards from "../components/cards/AllShowsCards";

function AllShows() {
  return (
    <div className="container mt-5 pt-4">
      <div className="mb-4 ps-0 ms-0">
        <h2 className="h4">Anime</h2>
      </div>
      <div className="container">
        <AllShowsCards />
      </div>
    </div>
  );
};

export default AllShows;